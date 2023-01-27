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
        'house_trained',
        'good_with_dogs',
        'good_with_cats',
        'good_with_kids',
        'purebred',
        'has_special_needs',
        'need_experinced_adopter',
        'story',
        'diet',
        'image'
    ];
}
