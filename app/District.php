<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    public function polygons()
    {
        return $this->hasMany('App\Polygons');
    }
}
