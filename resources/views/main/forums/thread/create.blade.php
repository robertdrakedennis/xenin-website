@extends('layouts.master')
@section('title')
    {{'Forums - ' . $category->title}}
@endsection


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            @include('main.partials.errors')
            <div class="alert alert-warning">
                <h3>Seriously: if you post stupid shit, you will be banned.</h3>
                <p class="mb-0">If you have to question whether what you're posting is appropriate, it's probably not.</p>
            </div>
            <div>
                {{ Breadcrumbs::render('category', $category) }}
            </div>
            <div class="d-flex flex-column position-relative my-auto brand">
                <form method="POST" action="{{ action('ThreadController@Store', $category->slug) }}">
                    @method('POST')
                    @csrf
                    <div class="input-field">
                        <label for="titleInput" class="text-white">Enter Post Title</label>
                        <input type="text" class="text-light validate" name="title" id="titleInput" aria-describedby="titleHelp" required>
                    </div>
                    <div class="form-group bg-white">
                        {{--<label for="body" class="text-white d-none">Body</label>--}}
                        {{--<input type="hidden" name="body" class="form-control" id="body" aria-describedby="body" value="">--}}
                        {{--<div id="editor" class="editor"></div>--}}
                    </div>
                    <quill-component></quill-component>
                    <button type="submit" class="waves-effect waves-light btn btn-lg btn-primary float-right">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection