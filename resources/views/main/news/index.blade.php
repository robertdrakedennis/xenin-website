@extends('layouts.master')
@section('title', 'News')


@section('content')
    <section class="d-flex flex-column position-relative bg-brand-black justify-content-between" style="min-height: 100vh; padding: 10rem 0 20rem;">
        <div class="container">
            <div>
                {{ Breadcrumbs::render('articles') }}
            </div>
            @auth
                @can('edit news')
                    <div class="ml-auto">
                        <a href="{{ route('articles.create') }}" class="btn btn-light">Create Article</a>
                    </div>
                @endcan
            @endauth
            <div>
                <div class="card-deck news-deck">
                    @foreach($articles as $article)
                        @if($loop->first)
                            <div class="card bg-dark text-white border-0 rounded my-2 mx-sm-0 mx-md-0 mx-lg-2 mx-xl-2">
                                <div class="card-img position-absolute news-img" style="background: url('{{ Storage::url($article->image) }}') no-repeat center;">
                                    <a href="{{ route('articles.show', $article->id) }}" class="text-light" style="text-decoration: none;">
                                        <div class="card-img-overlay news-card-img-overlay d-flex flex-column justify-content-end">
                                            <h5 class="card-title" style="z-index: 50">{{ $article->title }}</h5>
                                            <p class="card-text mb-0" style="z-index: 50">{{ $article->short_body }}</p>
                                            <p class="card-text mb-0 text-light" style="z-index: 50">Posted: {{ $article->created_at->diffForHumans() }}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        @else
                            <div class="card bg-dark text-white my-2 mx-sm-0 mx-md-0 mx-lg-2 mx-xl-2 border-0 rounded">
                                <div class="card-img position-absolute news-img" style="background: url('{{ Storage::url($article->image) }}') no-repeat center;">
                                    <a href="{{ route('articles.show', $article->id) }}" class="text-light" style="text-decoration: none;">
                                        <div class="card-img-overlay news-card-img-overlay d-flex flex-column justify-content-end">
                                            <h5 class="card-title" style="z-index: 50">{{ $article->title }}</h5>
                                            <p class="card-text mb-0" style="z-index: 50">{{ $article->short_body }}</p>
                                            <p class="card-text mb-0 text-light" style="z-index: 50">{{ $article->created_at->diffForHumans() }}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
                {{$articles->links()}}
            </div>
        </div>
    </section>
@endsection