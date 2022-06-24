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
}
