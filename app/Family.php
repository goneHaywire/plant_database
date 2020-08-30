<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['name', 'description', 'leaves', 'flowers', 'seeds', 'characteristics'];

    public function genera()
    {
        return $this->hasMany('App\Genera');
    }

    public function soil()
    {
        return $this->belongsTo('App\Area');
    }
}
