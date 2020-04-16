@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            @include('main.partials.errors')
            <div class="d-flex flex-column position-relative text-center mx-auto my-auto justify-content-center align-items-center brand w-100">
                <article class="community-post bg-brand-darker-grey w-100 mx-5">
                    <div class="post-inner">
                        <div class="post-cell-user text-white">
                            <div class="avatar-container">
                                <a class="avatar">
                                    <img src="{{ Storage::url($reply->user->avatar) }}">
                                </a>
                            </div>
                            <div class="user-details">
                                <h4 class="username" style="color:{{ $reply->user->color }} !important;">{{ $reply->user->name }}</h4>
                                <h5 class="role">Role</h5>
                                <h6 class="stats"># Posts</h6>
                            </div>
                        </div>
                        <div class="post-cell-main text-white">
                            <div class="d-flex h-100 flex-column">
                                <div class="inner">
                                    <form method="POST" class="m-2 text-left" action="{{ action('ReplyController@Update', [$category, $thread, $reply]) }}">
                                        @method('PATCH')
                                        @csrf
                                        <quill-component :post='{{$reply->body}}'></quill-component>
                                        <button type="submit" class="btn btn-primary">Submit</button>
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

@endsection