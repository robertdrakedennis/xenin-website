<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

use App\Http\Resources\Articles;
use Cocur\Slugify\Slugify;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index(){
        $this->authorize('view', Article::class);
        $latest = Article::get()->last();

        $articles = Article::orderBy('id', 'desc')->paginate(10);


        return view('main.news.index', compact('articles', 'latest'));
    }

    /**
     * Create a resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(){
        $this->authorize('create', Article::class);
        return view('main.news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request){
        $this->authorize('create', Article::class);
        $request->validate([
            'title' => 'bail|required',
            'image' => 'required|image',
            'body' => 'required',
            'short_body' => 'required',
        ]);

        $image = $request->file('image')->store('public/articles/images');

        Article::create([
            'title' => $request->title,
            'image' => $image,
            'body' => json_encode($request->body),
            'user_id' => Auth::user()->id,
            'short_body' => $request->short_body
        ]);

        return redirect(route('articles.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param Article $article
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Article $article){
        $this->authorize('view', Article::class);
        return view('main.news.show', compact('article'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article $article
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Article $article){
        $this->authorize('update', Article::class);
        return view('main.news.edit', compact('article'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Article $article
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Article $article){
        $this->authorize('update', Article::class);
        $request->validate([
            'title' => 'bail|required',
            'image' => 'sometimes|image',
            'body' => 'required',
            'short_body' => 'required',

        ]);

        $article->title = $request->title;

        if ($request->image != null){
            $image = $request->file('image')->store('public/articles/images');
            $article->image = $image;
        }

        $article->body = json_encode($request->body);
        $article->short_body = $request->short_body;

        $article->save();

        return redirect(route('articles.index'));
    }

    /**
     * Remove the specified resource from storage.
     * @param Article $article
     * @return \Illuminate\Http\Response
     * @throws \Exception|\Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Article $article){
        $this->authorize('delete', Article::class);
        $article->delete();

        return redirect(route('articles.index'));
    }
}
