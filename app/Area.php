<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    public function polygon()
    {
        return $this->belongsTo('App\Polygon');
    }
}
