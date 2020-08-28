<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCascadeDeleteToPolygonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('polygons', function (Blueprint $table) {
            $table->dropForeign('polygons_area_id_foreign');
            $table->dropForeign('polygons_specie_id_foreign');

            $table->foreign('area_id')->references('id')->on('areas')->onDelete('cascade');
            $table->foreign('specie_id')->references('id')->on('species')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('polygons', function (Blueprint $table) {
            $table->foreign('area_id')->onDelete('restrict')->change();
            $table->foreign('specie_id')->onDelete('restrict')->change();
        });
    }
}
