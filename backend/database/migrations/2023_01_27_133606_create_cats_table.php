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
        Schema::create('cats', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('age');
            $table->string('color');
            $table->string('gender');
            $table->string('hair_length');
            $table->string('spayed');
            $table->string('reason');
            $table->string('location');
            $table->string('breed');
            $table->string('shots_upto_date');
            $table->text('story');
            $table->text('diet');
            $table->string('image');

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
        Schema::dropIfExists('cats');
    }
};
