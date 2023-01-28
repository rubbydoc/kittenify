<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cat extends Model
{
    use HasFactory;
    protected $fillable =[
        'name',
        'age',
        'color',
        'gender',
        'hair_length',
        'spayed',
        'reason',
        'location',
        'breed',
        'shots_upto_date',
        'story',
        'diet',
        'image'
    ];
}
