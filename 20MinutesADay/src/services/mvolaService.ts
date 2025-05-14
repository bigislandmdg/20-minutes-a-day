export interface MvolaPaymentPayload {
  amount: number;
  phoneNumber: string;
  externalId: string;
  currency?: string;
  description?: string;
  environment?: 'sandbox' | 'preprod'; // Ajouter pour choisir l'environnement
}

// Configuration des URLs selon l'environnement
const MVOLA_ENV_URLS = {
  sandbox: {
    tokenUrl: 'https://sandbox.mvola.mg/token',
    transactionUrl: 'https://sandbox.mvola.mg/mvola/mm/transactions/type/merchantpay/1.0.0/',
  },
  preprod: {
    tokenUrl: 'https://preprod.mvola.mg/token',
    transactionUrl: 'https://pre-api.mvola.mg/mvola/mm/transactions/type/merchantpay/1.0.0',
  },
};

// Clés d'authentification — à sécuriser avec des variables d’environnement
const CLIENT_CREDENTIALS = {
  sandbox: {
    basicAuth: 'Basic VOTRE_CLE_ENCODEE_SANDBOX',
    userId: '034xxxxxxxx',
    partnerId: 'your-partner-id-sandbox',
    receiverNumber: '034xxxxxxxx',
  },
  preprod: {
    basicAuth: 'Basic VOTRE_CLE_ENCODEE_PREPROD',
    userId: '034yyyyyyyy',
    partnerId: 'your-partner-id-preprod',
    receiverNumber: '034yyyyyyyy',
  },
};

// Fonction pour traiter un paiement MVola
export const processMvolaPayment = async (payload: MvolaPaymentPayload): Promise<void> => {
  const env = payload.environment || 'sandbox';
  const config = MVOLA_ENV_URLS[env];
  const credentials = CLIENT_CREDENTIALS[env];

  try {
    // Étape 1 : Authentification
    const authResponse = await fetch(config.tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: credentials.basicAuth,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    if (!accessToken) {
      throw new Error('Failed to retrieve access token from MVola API.');
    }

    // Étape 2 : Transaction
    const transactionResponse = await fetch(config.transactionUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'X-USER-CMS': 'msisdn',
        'X-USER-ID': credentials.userId,
        'X-CORRELATION-ID': Math.random().toString(36).substring(2),
        'X-PARTNER-ID': credentials.partnerId,
        'Content-Type': 'application/json',
        'X-Reference-Id': payload.externalId,
      },
      body: JSON.stringify({
        amount: payload.amount,
        currency: payload.currency || 'Ar',
        descriptionText: payload.description || 'Mobile payment via app',
        requestDate: new Date().toISOString(),
        debitParty: [{ key: 'msisdn', value: payload.phoneNumber }],
        creditParty: [{ key: 'msisdn', value: credentials.receiverNumber }],
        metadata: { partnerName: 'MyApp' },
      }),
    });

    if (!transactionResponse.ok) {
      const errorData = await transactionResponse.json();
      throw new Error(errorData.message || 'MVola payment failed');
    }
  } catch (error) {
    console.error('MVola payment error:', error);
    throw error;
  }
};

// Export alias pour un autre nom
export { processMvolaPayment as createPayment }; 
