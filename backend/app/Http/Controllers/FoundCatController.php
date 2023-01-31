<?php

namespace App\Http\Controllers;

use App\Models\FoundCat;
use Illuminate\Http\Request;

class FoundCatController extends Controller
{
    //
    public function index(){
        $found_cats = FoundCat::get();
        return response()->json($found_cats);

    }

    public function store(Request $request)
    {
        // $image_path = $request->file('image')->store('image', 'public');
        $complete_file_name = $request->file('image')->getClientOriginalName();
        $file_name_only = pathinfo($complete_file_name, PATHINFO_FILENAME);
        $extension = $request->file('image')->getClientOriginalExtension();
        $compPic = str_replace('','_',$file_name_only).'_'.rand().'_'.time().'.'.$extension;
        $path = $request->file('image')->storeAs('public/found_cats',$compPic);

        return FoundCat::create([
            'location'=>$request->location,
            'gender'=>$request->gender,
            'date'=>$request->date,
            'description'=>$request->description,
            'image'=>$compPic
        ]);
    }

    public function update(Request $request, $id)
    {

        return FoundCat::find($id)->update([
            'location'=>$request->location,
            'gender'=>$request->gender,
            'date'=>$request->date,
            'description'=>$request->description,

            ]
        );
    }


    public function delete(FoundCat $foundCat){
        return $foundCat->delete();
    }

    public function show(FoundCat $foundCat)
    {
        return $foundCat;
    }
}

