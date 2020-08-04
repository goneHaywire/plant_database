<?php

namespace App\Http\Controllers\API;

use App\Family;
use App\Genera;
use App\Http\Controllers\Controller;
use App\Specie;
use App\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function stats()
    {
        $family_count = Family::all()->count();
        $genera_count = Genera::all()->count();
        $species_count = Specie::all()->count();
        $albanian_count = Specie::where('in_albania', 1)->count();
        $user_count = User::all()->count();
        $favourites_count = User::withCount(['favourites' => function ($query) {
            return $query->where('user_id', Auth::id());
        }])->find(Auth::id())->favourites_count;

        $stats = new Collection([
            'family_count' => $family_count,
            'genera_count' => $genera_count,
            'species_count' => $species_count,
            'albanian_count' => $albanian_count,
            'user_count' => $user_count,
            'favourites_count' => $favourites_count,
        ]);

        return $stats->toJson();
    }
}
