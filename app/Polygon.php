<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Polygon extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    public function specie()
    {
        return $this->belongsTo('App\Specie');
    }

    public function area()
    {
        return $this->belongsTo('App\Area');
    }

    public function scopeSoilOnly($query)
    {
        return $query->whereNull('specie_id');
    }
}
