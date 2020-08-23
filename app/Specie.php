<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specie extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['name', 'common_name', 'in_albania'];
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

    public function polygons()
    {
        return $this->hasMany('App\Polygon');
    }

    public function photos()
    {
        return $this->hasMany('App\Photos');
    }
}
