<?php

namespace App\Http\Controllers;

use App\Models\LostFound;
use Illuminate\Http\Request;

class LostFoundController extends Controller
{
    public function index(){
        $lost_found = LostFound::get();
        return response()->json($lost_found);

    }

    public function store(Request $request)
    {
        // $image_path = $request->file('image')->store('image', 'public');
        $complete_file_name = $request->file('image')->getClientOriginalName();
        $file_name_only = pathinfo($complete_file_name, PATHINFO_FILENAME);
        $extension = $request->file('image')->getClientOriginalExtension();
        $compPic = str_replace('','_',$file_name_only).'_'.rand().'_'.time().'.'.$extension;
        $path = $request->file('image')->storeAs('public/lost_n_found',$compPic);

        return LostFound::create([
            'name'=>$request->name,
            'location'=>$request->location,
            'gender'=>$request->gender,
            'date'=>$request->date,
            'description'=>$request->description,
            'image'=>$compPic,
            'status'=>$request->status
        ]);
    }

    public function update(Request $request, $id)
    {

        return LostFound::find($id)->update([
            'name'=>$request->name,
            'location'=>$request->location,
            'gender'=>$request->gender,
            'date'=>$request->date,
            'description'=>$request->description,
            'status'=>$request->status

            ]
        );
    }


    public function delete(LostFound $lostFound){
        return $lostFound->delete();
    }

    public function show(LostFound $lostFound)
    {
        return $lostFound;
    }
}
