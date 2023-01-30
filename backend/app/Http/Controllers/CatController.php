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
        // $image_path = $request->file('image')->store('image', 'public');
        $complete_file_name = $request->file('image')->getClientOriginalName();
        $file_name_only = pathinfo($complete_file_name, PATHINFO_FILENAME);
        $extension = $request->file('image')->getClientOriginalExtension();
        $compPic = str_replace('','_',$file_name_only).'_'.rand().'_'.time().'.'.$extension;
        $path = $request->file('image')->storeAs('public/cats',$compPic);

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
            'image'=>$compPic,


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
