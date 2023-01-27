<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('physical_attributes', function (Blueprint $table) {
            $table->id();
            $table->string('body');
            $table->string('head');
            $table->string('ears');
            $table->string('eyes');
            $table->string('legs_paws');
            $table->string('tail');
            $table->string('coat');
            $table->string('color');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('physical_attributes');
    }
};
