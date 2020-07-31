<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genera extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    public function family()
    {
        return $this->belongsTo('App\Family');
    }

    public function plants()
    {
        return $this->hasMany('App\Plant');
    }

}
