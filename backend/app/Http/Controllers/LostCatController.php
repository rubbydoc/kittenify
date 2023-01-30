<?php

namespace App\Http\Controllers;

use App\Models\LostCat;
use Illuminate\Http\Request;

class LostCatController extends Controller
{
    //
    public function index(){
        return LostCat::all();

    }

    public function store(Request $request)
    {
        // $image_path = $request->file('image')->store('image', 'public');
        $complete_file_name = $request->file('image')->getClientOriginalName();
        $file_name_only = pathinfo($complete_file_name, PATHINFO_FILENAME);
        $extension = $request->file('image')->getClientOriginalExtension();
        $compPic = str_replace('','_',$file_name_only).'_'.rand().'_'.time().'.'.$extension;
        $path = $request->file('image')->storeAs('public/lost_cats',$compPic);

        return LostCat::create([
            'name'=>$request->name,
            'location'=>$request->location,
            'gender'=>$request->gender,
            'date'=>$request->date,
            'description'=>$request->description,
            'image'=>$compPic
        ]);
    }

    public function update(Request $request, $id)
    {

        return LostCat::find($id)->update([
            'name'=>$request->name,
            'location'=>$request->location,
            'gender'=>$request->gender,
            'date'=>$request->date,
            'description'=>$request->description,

            ]
        );
    }


    public function delete(LostCat $lostCat){
        return $lostCat->delete();
    }

    public function show(LostCat $lostCat)
    {
        return $lostCat;
    }
}

