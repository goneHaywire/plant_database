<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    public function genera()
    {
        return $this->hasMany('App\Genera');
    }
}
