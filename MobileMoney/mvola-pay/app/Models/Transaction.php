<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
 
    protected $fillable = [
        'correlation_id',
        'reference_id',
        'env',
        'status',
        'payer_phone',
        'receiver_phone',
        'amount',
        'currency',
        'description',
        'response',
    ];

    protected $casts = [
        'response' => 'array',
    ];


}
