<?php

namespace App\Http\Controllers;

use App\Category;
use App\Reply;
use App\Thread;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class ReplyController extends Controller{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Category $category
     * @param Thread $thread
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request, Category $category, Thread $thread){

        $this->authorize('create', Reply::class);
        $this->authorize('isLocked', $thread);
        $request->validate([
            'body' => 'required|json|min:50|max:4000',
        ]);

        Reply::create([
            'body' => json_encode($request->body),
            'thread_id' => $thread->id,
            'user_id' => Auth::user()->id,
        ]);

        Auth::user()->increment('post_count');
        $thread->increment('reply_count');
        $category->increment('reply_count');


        toast('Reply Created Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }

    /**
     * Edit the specified resource.
     *
     * @param Category $category
     * @param Thread $thread
     * @param  \App\Reply $reply
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Category $category, Thread $thread, Reply $reply){
        $this->authorize('update', $reply);
        return view('main.forums.reply.edit', compact('category', 'thread', 'reply'));
    }

    /**
     * Update the specified resource.
     *
     * @param Category $category
     * @param Thread $thread
     * @param  \App\Reply $reply
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Category $category, Thread $thread, Reply $reply){
        $this->authorize('update', $reply);

        Validator::make($request->only(['body']), [
            'body' => [
                'required|json|min:20|max:20000'
            ],
        ]);

        $reply->body = json_encode($request->body);
        $reply->save();

        toast('Reply Updated Successfully!','success','top-right');

        return redirect(route('threads.show', [ $category, $thread ]));
    }

    /**
     * Remove the specified resource.
     *
     * @param Category $category
     * @param Thread $thread
     * @param  \App\Reply $reply
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Category $category, Thread $thread, Reply $reply){
        $this->authorize('delete', Reply::class);

        $reply->delete();

        $thread->decrement('reply_count');
        $category->decrement('reply_count');


        toast('Reply Destroyed Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }

    /**
     * Restores the specified resource.
     *
     * @param Category $category
     * @param Thread $thread
     * @param $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */

    public function restore(Category $category, Thread $thread, $id){
        $reply = Reply::withTrashed()->findOrFail($id);

        $this->authorize('restore', Reply::class);

        $reply->restore();

        $thread->increment('reply_count');
        $category->increment('reply_count');

        toast('Reply Restored Successfully!','success','top-right');

        return redirect(route('threads.show', [$category, $thread]));
    }
}
