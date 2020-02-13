<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    public function genera(){
        return $this->hasMany('App\Genera');
    }
}
