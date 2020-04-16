@extends('layouts.master')
@section('title', 'Forums')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            <div class="d-flex flex-column position-relative my-auto brand">
                @include('main.partials.errors')
                <form method="POST" class="my-5" action="{{ action('CategoryController@Update', $category) }}" enctype="multipart/form-data">
                    @method('PATCH')
                    @csrf
                    <div class="form-group">
                        <label for="titleInput" class="text-white">Title</label>
                        <input type="text" name="title" class="form-control" id="titleInput" aria-describedby="titleHelp" value="{{ $category->title }}">
                    </div>
                    <div class="form-group">
                        <label for="description" class="text-white">Description</label>
                        <input type="text" class="form-control" id="description" name="description" value="{{ $category->description }}">
                    </div>
                    <div class="form-group">
                        <label for="fontawesome" class="text-white">Font Awesome</label>
                        <input type="text" class="form-control" id="fontawesome" name="fontawesome" value="{{$category->fontawesome}}">
                    </div>
                    <div class="custom-file mb-3">
                        <input type="file" class="custom-file-input" name="background" id="background">
                        <label class="custom-file-label bg-brand-black text-light" for="background">Upload Category Background Image</label>
                    </div>
                    <div class="form-group">
                        <label for="parent_id" class="text-white">Parent</label>
                        <select class="custom-select" id="parent_id" name="parent_id">
                            @foreach($filteredCategories as $filteredCategory)
                                @if($category->parent_id == null)
                                    <option value="null" selected>None</option>
                                    @break
                                @else
                                    <option value="{{ $filteredCategory->id }}" @if($category->parent_id == $filteredCategory->id) selected @endif>{{ $filteredCategory->title }}</option>
                                @endif
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="weight" class="text-white">Weight</label>
                        <input type="number" name="weight" class="form-control" id="weight" value="{{ $category->weight }}">
                    </div>
                    <div class="form-group">
                        <label for="locked" class="text-white">Locked?</label>
                        <select class="custom-select" id="locked" name="locked">
                            <option value="0"  @if(!$category->isLocked) selected @endif>False</option>
                            <option value="1" @if($category->isLocked) selected @endif>True</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="private" class="text-white">Private?</label>
                        <select class="custom-select" id="private" name="private">
                            <option value="0"  @if(!$category->isPrivate) selected @endif>False</option>
                            <option value="1" @if($category->isPrivate) selected @endif>True</option>
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
                color: "{{ $category->color }}",
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