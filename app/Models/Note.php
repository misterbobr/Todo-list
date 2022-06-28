<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;
    
    protected $table = "notes";
    protected $fillable = ["text"];

    public static function add($text)
    {
        $note = new Note();
        $note->text = $text;
        $note->save();
        return $note;
    }

    public static function edit($id, $text)
    {
        $note = Note::where('id', $id)->first();
        $note->text = $text;
        $note->save();
        return $note;
    }

    public static function remove($id)
    {
        $note = Note::where('id', $id)->first();
        $text = $note->text;
        $note->delete();
        return $text;
    }

    public static function fetchFromDB()
    {
        return Note::all();
    }
}
