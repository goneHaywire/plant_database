<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    public function specie()
    {
        $this->belongsTo('App/Specie');
    }
}
