<?php

namespace App\Http\Controllers;

use App\Models\CatBreed;
use App\Models\PhysicalAttribute;
use Illuminate\Http\Request;

class CatBreedController extends Controller
{
    public function index(){
        return CatBreed::all();

    }

    public function store(Request $request)
    {
        $physicalAttribute = new PhysicalAttribute();
        return $catBreed = CatBreed::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'personality'=>$request->personality,
            'history'=>$request->history,
            // 'physical_attribute_id'=>$physicalAttribute->physicalAttributeId,

        ]);
    }

    public function update(Request $request, $id)
    {
        return CatBreed::find($id)->update([
            'name'=>$request->name,
            'description'=>$request->description,
            'personality'=>$request->personality,
            'history'=>$request->history,
            'physical_attribute_id'=>$request->physical_attribute_id
            ]
        );
    }


    public function delete(CatBreed $catbreed){
        return $catbreed->delete();
    }

    public function show(CatBreed $catbreed)
    {
        return $catbreed;
    }




}
