<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CatBreed;

class PhysicalAttribute extends Model
{
    use HasFactory;
    protected $fillable = [
        'body',
        'head',
        'ears',
        'eyes',
        'legs_paws',
        'tail',
        'coat',
        'color'

    ];

    public function catBreed()
    {
        return $this->hasOne(CatBreed::class);
    }

}
