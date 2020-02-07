<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->String('common_name')->nullable();
            $table->String('specie_name')->nullable();
            $table->boolean('in_albania')->nullable();
            $table->bigInteger('ipni')->unique();
            $table->bigInteger('year')->nullable();
            $table->string('authorship')->nullable();
            $table->unsignedBigInteger('family_id')->nullable();
            $table->unsignedBigInteger('genera_id')->nullable();
            $table->foreign('family_id')->references('id')->on('families');
            $table->foreign('genera_id')->references('id')->on('generas');
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
        Schema::dropIfExists('plants');
    }
}
