<?php

namespace App\Http\Controllers\API;

use App\Area;
use App\Family;
use App\Genera;
use App\Http\Controllers\Controller;
use App\Photo;
use App\Polygon;
use App\Specie;
use App\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use stdClass;

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
        $photos_count = Photo::all()->count();
        $polygons_count = Polygon::all()->count();
        $layers_count = Area::all()->count();

        $family = new stdClass();
        $family->count = $family_count;
        $family->text = 'Families';

        $genera = new stdClass();
        $genera->count = $genera_count;
        $genera->text = 'Genera';

        $specie = new stdClass();
        $specie->count = $species_count;
        $specie->text = 'Species';

        $albanian = new stdClass();
        $albanian->count = $albanian_count;
        $albanian->text = 'Albanian';

        $favourites = new stdClass();
        $favourites->count = $favourites_count;
        $favourites->text = 'Favourites';

        $users = new stdClass();
        $users->count = $user_count;
        $users->text = 'Users';

        $photos = new stdClass();
        $photos->count = $photos_count;
        $photos->text = 'Photos Uploaded';

        $polygons = new stdClass();
        $polygons->count = $polygons_count;
        $polygons->text = 'Polygons Created';

        $layers = new stdClass();
        $layers->count = $layers_count;
        $layers->text = 'Layers Available';

        $stats = new Collection([
            $family,
            $genera,
            $specie,
            $albanian,
            $favourites,
            $users,
            $photos,
            $polygons,
            $layers
        ]);

        return $stats->toArray();
    }
}
