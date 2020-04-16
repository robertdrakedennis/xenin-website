@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            <div class="d-flex flex-column position-relative my-auto brand">
                @include('main.partials.errors')
                <form method="POST" class="my-5" action="{{ route('categories.store') }}" enctype="multipart/form-data">
                    @method('POST')
                    @csrf
                    <div class="form-group">
                        <label for="titleInput" class="text-white">Title</label>
                        <input type="text" name="title" class="form-control" id="titleInput" aria-describedby="titleHelp" placeholder="Enter Category Title">
                    </div>
                    <div class="form-group">
                        <label for="description" class="text-white">Description</label>
                        <input type="text" class="form-control" id="description" name="description">
                    </div>
                    <div class="form-group">
                        <label for="fontawesome" class="text-white">Font Awesome</label>
                        <input type="text" class="form-control" id="fontawesome" name="fontawesome">
                    </div>
                    <div class="custom-file mb-3">
                        <input type="file" class="custom-file-input" name="background" id="background">
                        <label class="custom-file-label bg-brand-black text-light" for="background">Upload Category Background Image</label>
                    </div>
                    <div class="form-group">
                        <label for="parent_id" class="text-white">Parent</label>
                        <select class="custom-select" id="parent_id" name="parent_id">
                            <option value="" selected>none</option>
                            @foreach($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->title }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="weight" class="text-white">Weight</label>
                        <input type="number" name="weight" class="form-control" id="weight" value="1">
                    </div>
                    <div class="form-group">
                        <label for="locked" class="text-white">Locked?</label>
                        <select class="custom-select" id="locked" name="locked">
                            <option value="0" selected>False</option>
                            <option value="1">True</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="private" class="text-white">Private?</label>
                        <select class="custom-select" id="private" name="private">
                            <option value="0" selected>False</option>
                            <option value="1">True</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="color" class="text-light">Select a Color</label>
                        <input type='text' id="color" name="color" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection
@section('scripts')
    <script>
        $('document').ready(function(){
            $("#color").spectrum({
                color: "#000",
                preferredFormat: "hex",
                containerClassName: 'color-picker',
                cancelText: '',
                chooseText: 'close',
                move: function(color) {
                    $("#color").val(color.toHexString());
                }
            });
        });
    </script>
@endsection