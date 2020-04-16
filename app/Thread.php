<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class Thread extends Model{

    use SoftDeletes;

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'isLocked' => 'boolean',
        'isPinned' => 'boolean',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'title',
        'body',
        'category_id',
        'user_id',
        'color',
        'reply_count',
        'image',
        'isPinned',
        'isLocked',
        'slug'
    ];

    public function getRouteKeyName(){
        return 'slug';
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class);
    }

    public function latestReply(){
        return $this->hasOne(Reply::class)->latest();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}
