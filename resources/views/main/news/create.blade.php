@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            @include('main.partials.errors')
            <div class="d-flex flex-column position-relative my-auto brand">
                <form method="POST"action="{{ action('ArticleController@Store') }}" enctype="multipart/form-data">
                    @method('POST')
                    @csrf
                    <div class="form-group">
                        <label for="titleInput" class="text-white">Title</label>
                        <input type="text" name="title" class="form-control" id="titleInput" aria-describedby="titleHelp" placeholder="Enter Post Title">
                    </div>
                    <div class="custom-file mb-3">
                        <input type="file" class="custom-file-input" name="image" id="image">
                        <label class="custom-file-label bg-brand-black text-light" for="image">Upload Article Image</label>
                    </div>
                    <quill-component></quill-component>
                    <div class="form-group">
                        <label for="short_body" class="text-light">TL;DR</label>
                        <textarea class="form-control" id="short_body" name="short_body" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection
