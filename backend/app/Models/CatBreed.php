<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PhysicalAttribute;

class CatBreed extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'personality',
        'history',
        'physical_attribute_id'
    ];

    public function physicalAttribute()
    {
        return $this->belongsTo(PhysicalAttribute::class);
    }
}
