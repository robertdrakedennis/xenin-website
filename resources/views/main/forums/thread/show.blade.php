@extends('layouts.master')
@section('meta')
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="xenin, xenin.co, game servers, us game servers, garrysmod, us garrysmod servers, garrys mod, garrysmod, darkrp, Darkrp, darkRP, dark roleplay, dark role play">
    <meta name="description" content="Replies: {{$thread->reply_count}}">
    <meta name="title" content="Xenin - Darkrp | Dark Roleplay | US darkrp | dark rp server">
    <meta property="og:site_name" content="Xenin">
    <meta property="og:title" content="{{ $thread->title }}">
    <meta property="og:description" content="Replies: {{$thread->reply_count}}">
    <meta property="og:type" content="Product">
    <meta property="og:image" content="{{ Storage::url($thread->user->avatar) }}">
    <meta property="og:url" content="{{ route('threads.show', [$category, $thread]) }}">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="@xeninco" name="twitter:site">
    <meta name="twitter:description" content="Replies: {{$thread->reply_count}}">
    <meta name="twitter:image" content="{{ Storage::url($thread->user->avatar) }}">
    <meta name="theme-color" content="#955799">
@endsection

@section('css')
    @include('main.forums.thread.partials.css.avatar')
@endsection
@section('title')
    {{ 'Forums - Thread - ' . $thread->title }}
@endsection

@section('content')

    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh;padding: 10rem 0 10rem;">
        <div class="container">
            @include('main.partials.errors')
            <div class="page-header">
                <div class="container-fluid">
                    <div class="page-heading">
                        <div class="title">
                            <h3 class="text-light">
                                @if($thread->isLocked)
                                    <i class="fas fa-fw fa-xs fa-lock text-danger"></i>
                                @endif
                                @if($thread->isPinned)
                                    <i class="fas fa-fw fa-xs fa-thumbtack text-success"></i>
                                @endif
                                {{ $thread->title }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            {{ Breadcrumbs::render('thread', $category, $thread) }}
            <div class="d-flex flex-column position-relative text-center mx-auto justify-content-center align-items-center brand w-100 mx-5">
                <article class="community-post bg-brand-darker-grey w-100 mb-5 @if($thread->trashed()) border border-danger @endif">
                    <div class="post-inner d-sm-block d-md-block d-lg-flex d-xl-flex">
                        <div class="post-cell-user text-white author-img-overlay bg-brand-darkest-grey">
                            <div class="avatar-container position-relative">
                                <hovercard-component id="template_thread_{{$thread->id}}" v-tippy-html slug="{{ $thread->user->slug }}" avatar="{{ Storage::url($thread->user->avatar) }}" rank="{{ $thread->user->getRoleNames()->first() }}"></hovercard-component>
                                <a href="{{ route('users.show', $thread->user) }}" class="avatar waves-effect" v-tippy="{ html:  '#template_thread_{{$thread->id}}', reactive : true,
        interactive : true, theme : 'transparent', animateFill : true, placement : 'right' }">
                                    <img src="{{ Storage::url($thread->user->avatar) }}">
                                </a>
                            </div>
                            <div class="user-details position-relative">
                                <h4 class="username" style="color:{{ $thread->user->color }} !important;">{{ $thread->user->name }}</h4>
                                <h5 class="role badge badge-secondary thread-op" v-tippy title="This user is the author of this thread.">OP</h5>
                                @if($thread->user->hasAnyRole('Owner', 'Moderator', 'Administrator'))
                                    <h5 class="role pb-1"><i class="fas fa-shield-check fa-fw text-light py-2 thread-staff" v-tippy title="This user is a verified staff member"></i> {{$thread->user->roles->first()->name}}</h5>
                                @else
                                    <h5 class="role pb-1">{{$thread->user->getRoleNames()->first()}}</h5>
                                @endif
                                <h6 class="stats"><span class="font-weight-bold">Posts:</span> {{ $thread->user->post_count ?? 0 }}</h6>
                            </div>
                        </div>
                        <div class="post-cell-main text-white">
                            <div class="d-flex h-100 flex-column">
                                <div class="inner">
                                    <header class="header text-muted">
                                        Created: {{ $thread->created_at->diffForHumans() }} @if($thread->created_at->diffForHumans() !== $thread->updated_at->diffForHumans())· Updated: {{$thread->updated_at->diffForHumans()}} @endif
                                    </header>
                                    <static-quill-component :post='{!! $thread->body !!}' v-html></static-quill-component>
                                    <div class="post-footer">
                                        <div class="actions">
                                            <div class="action-set ml-auto d-flex flex-row">
                                                @auth
                                                    @if(Auth::user()->id === $thread->user_id)
                                                        <a href="{{ route('threads.edit', [$category, $thread])}}" class="mx-1 btn btn-brand-white">Edit</a>
                                                    @endif
                                                    @can('edit thread')
                                                        @include('main.forums.thread.partials.moderator.thread.modal')
                                                    @endcan
                                                @endauth
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
                @foreach($replies as $reply)
                    <div class="d-flex flex-column position-relative text-center mx-auto my-auto justify-content-center align-items-center brand w-100 mx-5">
                        <article class="community-post bg-brand-darker-grey w-100 mx-5 mb-3 @if($reply->trashed()) border border-danger @endif">
                            <div class="post-inner d-sm-block d-md-block d-lg-flex d-xl-flex">
                                <div class="post-cell-user text-white avatar-img-overlay-{{$reply->id}} bg-brand-darkest-grey">
                                    <div class="avatar-container position-relative">
                                        <hovercard-component id="template_reply_{{ $reply->id }}" v-tippy-html slug="{{ $reply->user->slug }}" avatar="{{ Storage::url($reply->user->avatar) }}" rank="{{ $reply->user->getRoleNames()->first() }}"></hovercard-component>
                                        <a href="{{ route('users.show', $reply->user) }}" class="avatar" v-tippy="{ html:  '#template_reply_{{ $reply->id }}', reactive : true,
        interactive : true, theme : 'transparent', animateFill : true, placement : 'right' }">
                                            <img src="{{ Storage::url($reply->user->avatar) }}">
                                        </a>
                                    </div>
                                    <div class="user-details position-relative">
                                        <h4 class="username" style="color:{{ $reply->user->color }} !important;">{{ $reply->user->name }}</h4>
                                        @if($reply->user_id == $thread->user_id)
                                            <h5 class="role badge badge-secondary thread-reply-op" v-tippy title="This user is the author of this thread.">OP</h5>
                                        @endif
                                        @if($reply->user->hasAnyRole('Owner', 'Moderator', 'Administrator'))
                                            <h5 class="role pb-1"><i class="fas fa-shield-check fa-fw text-light py-2 reply-staff-{{ $reply->id  }}" v-tippy title="This user is a verified staff member"></i> {{$reply->user->getRoleNames()->first()}}</h5>
                                        @else
                                            <h5 class="role pb-1">{{$reply->user->getRoleNames()->first()}}</h5>
                                        @endif
                                        <h6 class="stats"><span class="font-weight-bold">Posts:</span> {{ $reply->user->post_count }}</h6>
                                    </div>
                                </div>
                                <div class="post-cell-main text-white">
                                    <div class="d-flex h-100 flex-column">
                                        <div class="inner">
                                            <header class="header text-muted">
                                                Replied: {{ $reply->created_at->diffForHumans() }}
                                            </header>
                                            <static-quill-component :post='{{$reply->body}}'></static-quill-component>
                                            <div class="post-footer">
                                                <div class="actions">
                                                    <div class="action-set ml-auto d-flex flex-row">
                                                        @auth
                                                            @if(Auth::user()->id === $reply->user_id)
                                                                <a href="{{ route('replies.edit', [$category, $thread, $reply])}}" class="btn btn-brand-white">Edit</a>
                                                            @endif
                                                            @can('edit thread')
                                                                @include('main.forums.thread.partials.moderator.reply.modal')
                                                            @endcan
                                                        @endauth
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                @endforeach
            @guest
                <h3 class="text-light text-center"> You must login to reply.</h3>
            @endguest
            @auth
                <article class="community-post bg-brand-darker-grey w-100 mx-auto">
                    <div class="post-inner d-sm-block d-md-block d-lg-flex d-xl-flex">
                        <div class="post-cell-user text-white reply-img-overlay bg-brand-darkest-grey">
                            <div class="avatar-container position-relative">
                                <a href="{{ route('users.show', Auth::user()->slug) }}" class="avatar">
                                    <img src="{{ Storage::url(Auth::user()->avatar) }}">
                                </a>
                            </div>
                            <div class="user-details position-relative">
                                <h4 class="username" style="color:{{ Auth::user()->color }} !important;">{{  Auth::user()->name }}</h4>
                            </div>
                        </div>
                        <div class="post-cell-main">
                            <div class="d-flex h-100 flex-column">
                                <div class="inner">
                                    @if($thread->isLocked)
                                        <h3 class="text-light">Thread is locked.</h3>
                                        @can('edit thread')
                                            <form method="POST" class="m-2 text-left" action="{{ action('ReplyController@Store', [$category, $thread]) }}">
                                                @method('POST')
                                                @csrf
                                                <quill-component></quill-component>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>
                                        @endcan
                                    @else
                                        <form method="POST" class="m-2 text-left" action="{{ action('ReplyController@Store', [$category, $thread]) }}">
                                            @method('POST')
                                            @csrf
                                            <quill-component></quill-component>
                                            <button type="submit" class="waves-effect btn btn-primary float-right">Submit</button>
                                        </form>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            @endauth
        </div>
    </section>
@endsection

@section('scripts')
    {{--@include('main.forums.thread.partials.quill.thread')--}}
    {{--@include('main.forums.thread.partials.quill.replies')--}}
    @endsection