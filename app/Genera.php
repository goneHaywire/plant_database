<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genera extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['name'];

    public function family()
    {
        return $this->belongsTo('App\Family');
    }

    public function species()
    {
        return $this->hasMany('App\Specie');
    }

}
