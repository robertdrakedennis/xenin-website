@extends('layouts.master')
@section('meta')
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="xenin, xenin.co, game servers, us game servers, garrysmod, us garrysmod servers, garrys mod, garrysmod, darkrp, Darkrp, darkRP, dark roleplay, dark role play">
    <meta name="description" content="{{ $category->description }}">
    <meta name="title" content="Xenin - Darkrp | Dark Roleplay | US darkrp | dark rp server">
    <meta property="og:site_name" content="Xenin">
    <meta property="og:title" content="{{ $category->title }}">
    <meta property="og:description" content="{{ $category->description }}">
    <meta property="og:type" content="Product">
    <meta property="og:image" content="{{ Storage::url($category->background) }}">
    <meta property="og:url" content="{{ route('categories.show', $category) }}">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="@xeninco" name="twitter:site">
    <meta name="twitter:description" content="{{ $category->description }}">
    <meta name="twitter:image" content="{{ Storage::url($category->background) }}">
    <meta name="theme-color" content="#955799">
@endsection
@section('css')
    <style>
        .category-img-overlay::before{
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: url('{{ Storage::url($category->background) ?? null }}');
            -webkit-background-size: cover !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0, .55)), to(rgba(0,0,0,0)));
            mask-image: linear-gradient(to bottom, rgba(0,0,0, .55), rgba(0,0,0,0) 65%);
        }
    </style>
@endsection
@section('title')
    {{ 'Forums - ' . $category->slug }}
@endsection

@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black category-img-overlay" style="min-height: 400px; padding: 10rem 0 1rem;">
        <div class="d-flex flex-column position-relative text-center mx-auto my-auto justify-content-center align-items-center brand">
            <h1 class="text-white text pb-2">{{$category->title}}</h1>
            <h5 class="text-white sub-text pb-2">{{$category->description}}</h5>
        </div>
    </section>
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
       <div class="container">
           <div>
               @include('main.partials.errors')
               <div>
                   {{ Breadcrumbs::render('category', $category) }}
               </div>
               <div class="py-3 d-flex">
                   <div class="mx-sm-auto mx-md-auto mx-lg-0 mx-xl-0 ml-lg-auto ml-xl-auto">
                       <div class="d-flex flex-row">
                           @auth
                               @if($category->isLocked)
                                   @can('edit thread')
                                       <a href="{{ route('threads.create', $category) }}" class="waves-effect waves-light btn btn-primary mx-1">Create Thread</a>
                                   @else
                                       <a href="#" class="btn btn-primary mx-1 disabled">This category is locked</a>
                                   @endcan
                               @else
                                   <a href="{{ route('threads.create', $category) }}" class="waves-effect waves-light btn btn-primary mx-1">Create Thread</a>
                               @endif
                               @can('edit category')
                                   @include('main.forums.category.partials.moderator.modal')
                               @endcan
                           @endauth
                       </div>
                   </div>
               </div>
               <div class="community-threads card bg-brand-darkest-grey">
                   <div class="threads-body">
                       @foreach($threads as $thread)
                       <div class="thread @if($thread->trashed()) border border-danger @endif">
                               <div class="avatar">
                                   <hovercard-component id="template_category_{{$thread->id}}" v-tippy-html slug="{{ $thread->user->slug }}" avatar="{{ Storage::url($thread->user->avatar) }}" rank="{{ $thread->user->getRoleNames()->first() }}"></hovercard-component>
                                   <a href="{{ route('users.show', $thread->user) }}" v-tippy="{ html:  '#template_category_{{$thread->id}}', reactive : true,
        interactive : true, theme : 'transparent', animateFill : true, placement : 'right' }">
                                       <img src="{{ Storage::url($thread->user->avatar) }}" class="avatar-img">
                                   </a>
                               </div>
                               <div class="thread-main">
                                   <div class="title">
                                       <h5 class="text-white">
                                           @if($thread->isPinned) <i class="fas fa-fw fa-xs fa-thumbtack text-success"></i> @endif
                                           <a class="text-white card-link" href="{{route('threads.show', [$category, $thread])}}">{{$thread->title}}</a>
                                       </h5>
                                   </div>
                                   <div class="minor text-white">
                                       <ul class="parts">
                                           <li class="px-1">
                                               <time dir="auto">{{ $thread->created_at->diffForHumans() }}</time>
                                           </li>
                                           <li class="px-1">
                                               <a href="{{route('users.show', $thread->user)}}" class="card-link" style="color:{{ $thread->user->color }} !important;">{{  $thread->user->name }}</a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                               <div class="stats">
                                   <dl class="pairs text-white">
                                       <dt>
                                           Replies:
                                       </dt>
                                       <dd>{{ $thread->reply_count}}</dd>
                                   </dl>
                               </div>
                               @if($thread->trashed())
                                   <div class="last-post">
                                       <form method="POST" action="{{ action('ThreadController@Restore', [$category, $thread]) }}">
                                           @method('POST')
                                           @csrf
                                           <button type="submit" class="btn btn-warning">Restore</button>
                                       </form>
                                   </div>
                               @else
                                   <div class="last-post">
                                       @if($thread->reply_count == 0)
                                           <a class="text-white card-link" href="{{route('threads.show', [$category, $thread])}}">{{ $thread->created_at->diffForHumans() }}</a>
                                           <div class="minor text-primary">
                                               <a class="ml-auto card-link" href="{{route('threads.show', [$category, $thread])}}" style="color:{{ $thread->user->color }} !important;">{{ $thread->user->name }}</a>
                                           </div>
                                       @else
                                           <a class="text-white card-link" href="{{route('threads.show', [$category, $thread])}}">{{  $thread->latestReply->created_at->diffForHumans() }}</a>
                                           <div class="minor text-primary">
                                               <a class="ml-auto card-link" href="{{route('threads.show', [$category, $thread])}}" style="color:{{ $thread->user->color }} !important;">{{$thread->latestReply->user->name }}</a>
                                           </div>
                                       @endif
                                   </div>
                               @endif
                           </div>
                       @endforeach
                   </div>
               </div>
               <div class="mx-5 pt-3">
                   {{ $threads->links() }}
               </div>
           </div>
       </div>
    </section>
@endsection