<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->uuid('correlation_id')->unique();
            $table->uuid('reference_id')->unique();
            $table->string('env'); // sandbox ou preprod
            $table->string('status')->nullable(); // pending, success, failed
            $table->string('payer_phone');
            $table->string('receiver_phone');
            $table->string('amount');
            $table->string('currency')->default('Ar');
            $table->text('description')->nullable();
            $table->json('response')->nullable(); // contenu brut MVola
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
