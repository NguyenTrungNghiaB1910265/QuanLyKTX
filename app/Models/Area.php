<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = 'area';
    protected $primaryKey = 'area_id';
    protected $fillable = [
        'area_id',
        'area_name',
        'area_desc',
    ];
}
