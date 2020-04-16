@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            <div class="d-flex flex-column position-relative my-auto brand">
                @include('main.partials.errors')
                <form method="POST" class="m-5" action="{{ action('ArticleController@Update', $article) }}" enctype="multipart/form-data">
                    @method('PATCH')
                    @csrf
                    <div class="form-group">
                        <label for="titleInput" class="text-white">Title</label>
                        <input type="text" name="title" class="form-control" id="titleInput" aria-describedby="titleHelp" value="{{ $article->title }}">
                    </div>
                    <div class="custom-file mb-3">
                        <input type="file" class="custom-file-input" name="image" id="image">
                        <label class="custom-file-label bg-brand-black text-light" for="image">Upload Article Image</label>
                    </div>
                    <div class="form-group bg-white">
                        <label for="body" class="text-white d-none">Body</label>
                        <input type="hidden" name="body" class="form-control" id="body" aria-describedby="body" value="">
                        <div id="editor" class="editor"></div>
                    </div>
                    <div class="form-group">
                        <label for="short_body" class="text-light">TL;DR</label>
                        <textarea class="form-control" id="short_body" name="short_body" rows="3">{{ $article->short_body }}</textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection
@section('scripts')
    <script>
        quill.setContents({!! $article->body !!});
    </script>
@endsection