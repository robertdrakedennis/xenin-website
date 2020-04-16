<?php

namespace App\Http\Controllers\Api;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response|\Illuminate\Support\Collection
     */
    public function index(){
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Article  $article
     * @return array
     */
    public function show(Article $article){
        return [
            'id' => $article->id,
            'image' => env('APP_URL') . Storage::url($article->image),
            'title' => $article->title,
            'short_body' => $article->short_body,
            'created_at' => $article->created_at->timestamp,
            'updated_at' => $article->updated_at->timestamp
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Support\Collection
     */
    public function showall(){
        $article = Article::all()->pluck('title');
        return $article;
    }
}
