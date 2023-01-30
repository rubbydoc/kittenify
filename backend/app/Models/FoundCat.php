<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoundCat extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'gender',
        'date',
        'description',
        'image',
    ];
}
