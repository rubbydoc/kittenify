<?php

namespace App\Http\Controllers;

use App\Models\PhysicalAttribute;
use Illuminate\Http\Request;

class PhysicalAttributeController extends Controller
{
    public function index()
    {
        return PhysicalAttribute::all();
    }

    public function store(Request $request)
    {
        $physicalAttribute = PhysicalAttribute::create([
            'body' => $request->body,
            'head' => $request->head,
            'ears' => $request->ears,
            'eyes' => $request->eyes,
            'legs_paws' => $request->legs_paws,
            'tail' => $request->tail,
            'coat' => $request->coat,
            'color' => $request->color

        ]);
       
    }

    public function update(Request $request, $id)
    {
        return PhysicalAttribute::find($id)->update(
            [
                'body' => $request->body,
                'head' => $request->head,
                'ears' => $request->ears,
                'eyes' => $request->eyes,
                'legs_paws' => $request->legs_paws,
                'tail' => $request->tails,
                'coat' => $request->coat,
                'color' => $request->color
            ]
        );
    }


    public function delete(PhysicalAttribute $physicalAttribute)
    {
        return $physicalAttribute->delete();
    }

    public function show(PhysicalAttribute $physicalAttribute)
    {
        return $physicalAttribute;
    }
}
