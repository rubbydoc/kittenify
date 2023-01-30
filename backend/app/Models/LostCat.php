<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LostCat extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'location',
        'gender',
        'date',
        'description',
        'image',
    ];
}
