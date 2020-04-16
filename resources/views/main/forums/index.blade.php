@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            <div>
                {{ Breadcrumbs::render('forums') }}
            </div>
            @foreach($categories as $category)
                <div class="community-category card bg-brand-darkest-grey mb-5">
                    <div class="card-header community-category-header bg-brand-darker-grey">
                        <h3 class="text-white">@if($category->isPrivate) <i class="fas fa-fw fa-xs fa-rocket text-light"></i> @endif {{$category->title}}</h3>
                    </div>
                    <div>
                        @foreach($category->children as $child)
                            <div class="community-sub-category">
                                <div class="icon">
                                    <i class="{{ $child->fontawesome }} fa-fw fa-2x" style="color: {{ $child->color }}"></i>
                                </div>
                                <div class="name text-white">
                                    <h5 class="text-white mb-1">
                                        @if($child->isLocked)
                                            <i class="fas fa-fw fa-xs fa-lock text-danger"></i>
                                        @endif
                                        @if($child->isPrivate)
                                            <i class="fas fa-fw fa-xs fa-rocket text-light"></i>
                                        @endif
                                        <a class="text-white card-link" href="{{route('categories.show', $child)}}">{{$child->title}}</a>
                                    </h5>
                                    <span class="text-muted">Threads:</span> {{$child->thread_count}}
                                </div>
                                <div class="last-post d-sm-none d-md-none d-lg-table-cell d-xl-table-cell">
                                    @if($child->latestThread == null)
                                        <p class="text-white">there are no threads.</p>
                                    @else
                                        <div class="avatar float-right ml-1">
                                            <hovercard-component id="template_forum_{{$child->latestThread->id}}" v-tippy-html slug="{{ $child->latestThread->user->slug }}" avatar="{{ Storage::url($child->latestThread->user->avatar) }}" rank="{{ $child->latestThread->user->getRoleNames()->first() }}"></hovercard-component>
                                            <a href="{{route('users.show',  $child->latestThread->user)}}" v-tippy="{ html:  '#template_forum_{{$child->latestThread->id}}', reactive : true,
        interactive : true, theme : 'transparent', animateFill : true, placement : 'left' }">
                                                <img src="{{ Storage::url($child->latestThread->user->avatar) }}" class="avatar-img">
                                            </a>
                                        </div>
                                        <div class="post-row text-white">
                                            @if($child->latestThread->isLocked)
                                                <i class="fas fa-fw fa-xs fa-lock text-danger"></i>
                                            @endif
                                            @if($child->latestThread->isPinned)
                                                <i class="fas fa-fw fa-xs fa-thumbtack text-success"></i>
                                            @endif
                                            <a href="{{route('threads.show',[ $child, $child->latestThread])}}" class="card-link">
                                                {{ $child->latestThread->title }}
                                            </a>
                                        </div>
                                        <div class="post-row text-white">
                                            <time dir="auto">{{ date('M d Y', $child->latestThread->created_at->timestamp) }}</time>
                                            <a href="{{route('users.show',  $child->latestThread->user->slug)}}" class="card-link" style="color:{{ $child->latestThread->user->color }} !important;">{{ $child->latestThread->user->name }}</a>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    </section>
@endsection
