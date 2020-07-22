<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    public function specie(){
        return $this->belongsTo('App\Specie');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
