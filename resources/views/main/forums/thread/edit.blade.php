@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            @include('main.partials.errors')
            <div class="d-flex flex-column position-relative text-center mx-auto my-auto justify-content-center align-items-center brand w-100 ">
                <article class="community-post bg-brand-darker-grey w-100">
                    <div class="post-inner">
                        <div class="post-cell-user text-white">
                            <div class="avatar-container">
                                <a class="avatar">
                                    <img src="{{ Storage::url($thread->user->avatar) }}">
                                </a>
                            </div>
                            <div class="user-details">
                                <h4 class="username">{{ $thread->user->name }}</h4>
                                <h5 class="role">{{ $thread->user->roles()->first()->name }}</h5>
                            </div>
                        </div>
                        <div class="post-cell-main text-white">
                            <div class="d-flex h-100 flex-column">
                                <div class="inner">
                                    <header class="header text-muted">
                                        {{ $thread->created_at->diffForHumans() }}
                                    </header>
                                    <form method="POST" class="text-left" action="{{ action('ThreadController@Update', [$category, $thread]) }}">
                                        @method('PATCH')
                                        @csrf
                                        <div class="input-field">
                                            <label for="titleInput" class="text-white">Title</label>
                                            <input type="text" name="title" class="validate text-light" id="titleInput" aria-describedby="titleHelp" value="{{ $thread->title }}">
                                        </div>
                                        <div class="form-group bg-white text-dark">
                                            <label for="body" class="text-white d-none">Body</label>
                                            <input type="hidden" name="body" class="form-control" id="body" aria-describedby="body" value="">
                                            <div id="editor" class="editor"></div>
                                        </div>
                                        <button type="submit" class="waves-effect waves-light btn btn-primary float-right">Update Post</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
@endsection
@section('scripts')
    <script>
        quill.setContents({!! $thread->body !!});
    </script>
@endsection