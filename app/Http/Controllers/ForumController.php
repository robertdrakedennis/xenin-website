<?php

namespace App\Http\Controllers;

use App\Category;
use App\Reply;
use App\Thread;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ForumController extends Controller{
    public function index(){
        $categories = Category::root()->with(['parent','children.latestThread.user'])->get();
        return view('main.forums.index', compact('categories'));
    }
}
