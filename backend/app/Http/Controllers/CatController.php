<?php

namespace App\Http\Controllers;
use App\Models\Cat;


use Illuminate\Http\Request;

class CatController extends Controller
{
    public function index(){
        return Cat::all();

    }

    public function store(Request $request)
    {
        $image_path = $request->file('image')->store('image', 'public');

        return Cat::create([
            'name'=>$request->name,
            'age'=>$request->age,
            'color'=>$request->color,
            'gender'=>$request->gender,
            'hair_length'=>$request->hair_length,
            'spayed'=>$request->spayed,
            'reason'=>$request->reason,
            'location'=>$request->location,
            'breed'=>$request->breed,
            'shots_upto_date'=>$request->shots_upto_date,
            'story'=>$request->story,
            'diet'=>$request->diet,
            'image'=>$request->$image_path
        ]);


        // $this->validate($request, [
        //     'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        // ]);

        // $data = Cat::create([
        //     'image' => $image_path,
        // ]);

        // return response($data, Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        $image_path = $request->file('image')->store('image', 'public');

        return Cat::find($id)->update([
            'name'=>$request->name,
            'age'=>$request->age,
            'color'=>$request->color,
            'gender'=>$request->gender,
            'hair_length'=>$request->hair_length,
            'spayed'=>$request->spayed,
            'reason'=>$request->reason,
            'location'=>$request->location,
            'breed'=>$request->breed,
            'shots_upto_date'=>$request->shots_upto_date,
            'story'=>$request->story,
            'diet'=>$request->diet,
            'image'=>$image_path
            ]
        );
    }


    public function delete(Cat $cat){
        return $cat->delete();
    }

    public function show(Cat $cat)
    {
        return $cat;
    }
}
