<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    public function genera(){
        return $this->belongsTo('App\Genera');
    }

    public function favourites(){
        return $this->hasMany('App\Favourite');
    }
}
