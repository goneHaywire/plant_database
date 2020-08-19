<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePolygonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('polygons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->json('coordinates');
            $table->bigInteger('area_id')->unsigned()->index();
            $table->bigInteger('specie_id')->nullable()->unsigned()->index();
            $table->timestamps();
        });

        Schema::table('polygons', function (Blueprint $table) {
            $table->foreign('area_id')
                ->references('id')->on('areas')->onDelete('cascade');
            $table->foreign('specie_id')
                ->references('id')->on('species')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('polygons');
    }
}
