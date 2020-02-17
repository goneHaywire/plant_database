<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    public function plant(){
        return $this->belongsTo('App\Plant');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
