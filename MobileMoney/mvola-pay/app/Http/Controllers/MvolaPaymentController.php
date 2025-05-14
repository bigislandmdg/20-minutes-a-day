<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;
use App\Models\Transaction;

class MvolaPaymentController extends Controller
{
    //
     public function pay(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'payer_phone' => 'required|string',
            'description' => 'nullable|string',
        ]);

        $env = 'sandbox'; // ou 'preprod' selon ton environnement
        $config = config("mvola.$env");

        // Étape 1 : Récupérer le token d'accès
        $tokenResponse = Http::withHeaders([
            'Authorization' => $config['basic_auth'],
            'Content-Type' => 'application/x-www-form-urlencoded',
        ])->asForm()->post($config['token_url'], [
            'grant_type' => 'client_credentials',
        ]);

        if (!$tokenResponse->ok()) {
            return response()->json(['error' => 'Échec de l\'authentification MVola'], 500);
        }

        $accessToken = $tokenResponse->json()['access_token'];

        // Étape 2 : Préparer et envoyer la transaction
        $correlationId = Str::uuid()->toString();
        $referenceId = Str::uuid()->toString();

        $payload = [
            "amount" => $request->amount,
            "currency" => "Ar",
            "descriptionText" => $request->description ?? 'Paiement MVola',
            "requestingOrganisationTransactionReference" => $referenceId,
            "originalTransactionReference" => $referenceId,
            "debitParty" => [
                ["key" => "msisdn", "value" => $request->payer_phone]
            ],
            "creditParty" => [
                ["key" => "msisdn", "value" => $config['receiver_number']]
            ]
        ];

        $response = Http::withHeaders([
            'Authorization' => "Bearer $accessToken",
            'X-CorrelationID' => $correlationId,
            'X-User-ID' => $config['user_id'],
            'X-Partner-ID' => $config['partner_id'],
            'Content-Type' => 'application/json',
            'Cache-Control' => 'no-cache',
        ])->post($config['transaction_url'], $payload);

        // Sauvegarde de la transaction en base de données
        $transaction = Transaction::create([
            'correlation_id' => $correlationId,
            'reference_id' => $referenceId,
            'env' => $env,
            'status' => $response->status(),
            'payer_phone' => $request->payer_phone,
            'receiver_phone' => $config['receiver_number'],
            'amount' => $request->amount,
            'currency' => 'Ar',
            'description' => $request->description,
            'response' => $response->json(),
        ]);

        return response()->json([
            'message' => 'Paiement MVola initié',
            'transaction' => $transaction,
        ]);
    }
}
