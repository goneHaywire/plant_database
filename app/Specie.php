<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specie extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $casts = [
        'in_albania' => 'boolean',
    ];

    public function genera()
    {
        return $this->belongsTo('App\Genera');
    }

    public function favourites()
    {
        return $this->hasMany('App\Favourite');
    }
}
