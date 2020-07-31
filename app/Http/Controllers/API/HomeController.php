<?php

namespace App\Http\Controllers\API;

use App\Family;
use App\Genera;
use App\Http\Controllers\Controller;
use App\Species;

class HomeController extends Controller
{
    public function stats()
    {
        $family_count = Family::all()->count();
        $genera_count = Genera::all()->count();
        $species_count = Species::all()->count();

        $stats = new Collection();

        return $stats->toJson();
    }
}
