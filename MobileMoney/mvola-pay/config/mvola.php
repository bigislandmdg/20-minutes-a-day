<?php

return [
    'sandbox' => [
        'base_url' => 'https://devapi.mvola.mg',
        'token_url' => 'https://devapi.mvola.mg/token',
        'transaction_url' => 'https://devapi.mvola.mg/mvola/mm/transactions/type/merchantpay/1.0.0/',
        'user_id' => env('MVOLA_USER_ID_SANDBOX'),
        'partner_id' => env('MVOLA_PARTNER_ID_SANDBOX'),
        'receiver_number' => env('MVOLA_RECEIVER_NUMBER_SANDBOX'),
        'basic_auth' => env('MVOLA_BASIC_AUTH_SANDBOX'),
    ],

    'preprod' => [
        'base_url' => 'https://pre-api.mvola.mg',
        'token_url' => 'https://preprod.mvola.mg/token',
        'transaction_url' => 'https://pre-api.mvola.mg/mvola/mm/transactions/type/merchantpay/1.0.0',
        'user_id' => env('MVOLA_USER_ID_PREPROD'),
        'partner_id' => env('MVOLA_PARTNER_ID_PREPROD'),
        'receiver_number' => env('MVOLA_RECEIVER_NUMBER_PREPROD'),
        'basic_auth' => env('MVOLA_BASIC_AUTH_PREPROD'),
    ],
];
