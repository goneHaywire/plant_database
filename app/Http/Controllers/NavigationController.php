<?php

namespace App\Http\Controllers;

use App\Family;
use App\Favourite;
use App\Genera;
use App\Plant;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NavigationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function home()
    {
        $family_count = count(Family::get());
        $genera_count = count(Genera::get());
        $species_count = count(Plant::get());
        $albanian_count = count(Plant::where('in_albania', 1)->get());
        $user_count = count(User::get());
        $favourites_count = count(User::find(1)->favourites()->get());
        return view('dashboard.home')->with(compact([
            'family_count', 'genera_count', 'species_count', 'albanian_count', 'user_count', 'favourites_count'
        ]));
    }

    public function stats(Request $request)
    {
        $stats = DB::table('plants')
            ->select(DB::raw('families.name as label, count(*) as data'))
            ->join('families', 'plants.family_id', '=', 'families.id')
            ->where('in_albania', 1)
            ->groupBy('families.name')
            ->orderBy(DB::raw('count(*)'), 'DESC')
            ->limit(30)
            ->get();
        return $stats;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
//    public function plants()
//    {
//        return view('dashboard.plants.index');
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function favourites()
    {
        return view('dashboard.favourites.index');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
//    public function families()
//    {
//        return view('dashboard.families.index');
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function genera()
    {
        return view('dashboard.genera.index');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function albanian_plants()
    {
        return view('dashboard.albanian.index');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('dashboard.plants.index');
    }
}
