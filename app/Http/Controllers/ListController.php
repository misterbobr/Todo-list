<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TodoListRequest;
use App\Models\Note;

class ListController extends Controller
{
    public function Add(TodoListRequest $req)
    {
        //$text = $req->input('text');
        return response()->json(["text" => Note::add($req->input("text"))->todo_list]);
        //return redirect()->route('');
    }
}
