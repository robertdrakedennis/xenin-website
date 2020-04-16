<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model{

    use SoftDeletes;

    protected $fillable = [
        'image',
        'title',
        'user_id',
        'body',
        'short_body'
    ];

public function user(){
    return $this->belongsTo(User::class);
}
}
