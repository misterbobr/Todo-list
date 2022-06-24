<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TodoListRequest;
use App\Models\Note;

class ListController extends Controller
{
    public function addNote(TodoListRequest $req)
    {
        //$text = $req->input('text');
        return response()->json(["text" => Note::add($req->text)->text]);
        //return redirect()->route('');
    }

    public function removeNote(Request $req)
    {
        //$text = $req->input('text');
        return response()->json(["text" => Note::remove($req->id)]);
        //return redirect()->route('');
    }

    public function getData()
    {
        return response()->json(["data" => Note::fetchFromDB()]);
    }
}
