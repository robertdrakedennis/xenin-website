<?php

namespace App\Http\Controllers;

use App\Category;
use App\Thread;
use Cocur\Slugify\Slugify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use function Sodium\increment;
use Validator;

class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     * @param Category $category
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(Category $category){

        $this->authorize('create', Thread::class);
        $this->authorize('isPrivate', $category);
        $this->authorize('isLocked', $category);

        return view('main.forums.thread.create', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Category $category
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request, Category $category){
        $this->authorize('create', Thread::class);
        $request->validate([
            'title' => 'bail|required|unique:threads|min:5|max:255',
            'body' => 'required|json|min:20|max:20000'
        ]);

        Thread::create([
            'title'=> $request->title,
            'body' => json_encode($request->body),
            'category_id' => $category->id,
            'slug' => (new Slugify)->slugify($request->title),
            'user_id' => Auth::user()->id,
        ]);

        $category->increment('thread_count');
        Auth::user()->increment('post_count');


        toast('Thread Created Successfully!','success','top-right');

        return redirect(route('threads.show', [
            'category' => $category->slug,
            'thread' => (new Slugify)->slugify($request->title)
        ]));


    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Category $category
     * @param  \App\Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Category $category, Thread $thread){
        $this->authorize('view', Thread::class);
        $this->authorize('isPrivate', $category);
        $this->authorize('isTrashed', $thread);

        //dd($thread->replies()->select('replies.*', 'users.id as user_id')->join('users', 'replies.user_id', '=', 'users.id')->toSql());
        //$replies = $thread->replies()->with(['user','thread'])->withTrashed()->paginate(15);
//        $replies = $thread->replies()->select('replies.*', 'users.id as user_id', 'users.name as user_name', 'users')->join('users', 'replies.user_id', '=', 'users.id')->withTrashed()->paginate(15);
//
//        dd($replies);

//        foreach ($replies as $reply){
//            dd($reply);
//        }

        if (Auth::guest() || !Auth::user()->can('view trashed thread')){
            $replies = $thread->replies()->with(['user', 'thread'])->paginate(15);
        } else {
            $replies = $thread->replies()->with(['user','thread'])->withTrashed()->paginate(15);
        }
        return view('main.forums.thread.show', compact('category', 'thread', 'replies'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category $category
     * @param  \App\Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Category $category, Thread $thread){
        $this->authorize('update', $thread);
        return view('main.forums.thread.edit', compact('category', 'thread'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Category $category
     * @param  \App\Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Category $category, Thread $thread){
        $this->authorize('update', $thread);

        Validator::make($request->only(['title', 'body']), [
            'title' => [
                'required|min:5|max:255',
                Rule::unique('threads')->ignore($thread->id),
            ],
            'body' => [
                'required|json|min:20|max:20000'
            ],
        ]);


        $thread->title = $request->title;
        $thread->body = json_encode($request->body);
        $thread->save();

        toast('Thread Updated Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @param  \App\Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Category $category, Thread $thread){
        $this->authorize('update', Thread::class);

        $category->reply_count = $category->reply_count - $thread->replies()->count();
        $category->save();

        $thread->replies()->delete();
        $thread->delete();

        $category->decrement('thread_count');

        toast('Thread Destroyed Successfully!','success','top-right');

        return redirect(route('categories.show', [$category]));
    }

    /**
     * Restores the specified resource.
     *
     * @param Category $category
     * @param Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function restore(Category $category,  Thread $thread){
        $this->authorize('restore', Thread::class);

        if ($thread->replies() != null){
            $thread->replies()->restore();
        }
        $thread->restore();

        $category->increment('thread_count');

        $category->reply_count = $category->reply_count + $thread->replies()->count();
        $category->save();

        toast('Thread Restored Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }

    /**
     * Lock the specified resource from storage.
     *
     * @param Category $category
     * @param  \App\Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function lockThread(Category $category, Thread $thread){
        $this->authorize('update', Thread::class);

        if ($thread->isLocked){
            $thread->isLocked = false;
            $thread->save();
        } else {
            $thread->isLocked = true;
            $thread->save();
        }

        toast('Thread Locked Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }
    /**
     * Pin the specified resource from storage.
     *
     * @param Category $category
     * @param  \App\Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function pinThread(Category $category, Thread $thread){
        $this->authorize('update', Thread::class);

        if($thread->isPinned){
            $thread->isPinned = false;
            $thread->save();
        } elseif(!$thread->isPinned) {
            $thread->isPinned = true;
            $thread->save();
        }

        toast('Thread Created Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }
}
