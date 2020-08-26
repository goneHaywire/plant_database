<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Photo;
use Illuminate\Http\Request;
use App\Specie;

class PhotoController extends Controller
{
    public function photos(Specie $specie)
    {
        $specie->load('photos');
        return $specie['photos'];
    }

    public function store(Request $request)
    {
        // return $request->all();
        if ($request->hasFile('photos')) {
            foreach ($request->file('photos') as $photo) {
                $new_photo = new Photo();
                $new_photo->specie_id = $request->get('specie_id');
                $path = $photo->store('photos', 'public');
                $new_photo->path = $path;
                $new_photo->save();
            }
        }
    }

    public function destroy($id)
    {
        Photo::destroy($id);
        return $id;
    }
}
