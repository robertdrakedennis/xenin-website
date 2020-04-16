@extends('layouts.master')
@section('css')
    <style>
        .avatar-img-overlay::before{
            background: url('{{ Storage::url($user->background) }}') no-repeat center;
        }
    </style>
@endsection
@section('title', 'Editing - ' . $user->name)


@section('content')
    <section class="d-flex flex-column position-relative justify-content-between avatar-img-overlay" style="min-height: 700px; padding: 10rem 0 5rem;">
        <div class="container">
            <div class="text-light position-relative">
                {{ Breadcrumbs::render('user', $user) }}
                @include('main.partials.errors')
                <article class="community-post bg-brand-darker-grey w-100 mb-3">
                    <div class="post-inner d-sm-block d-md-block d-lg-flex d-xl-flex">
                        <div class="post-cell-user text-white">
                            <div class="avatar-container">
                                <a class="avatar">
                                    <img src="{{ Storage::url($user->avatar) }}" id="avatarImg" class="avatar-img">
                                </a>
                            </div>
                            <div class="user-details">
                                <h4 class="username" style="color:{{ $user->color }} !important;">{{ $user->name }}</h4>
                                <h5 class="role">{{ $user->getRoleNames()->first() }}</h5>
                                <h5 class="stats"><span class="font-weight-bold">Posts:</span> {{ $user->post_count }}</h5>
                            </div>
                        </div>
                        <div class="post-cell-main text-white" style="min-height: 600px;">
                            <div class="d-flex h-100 flex-column">
                                <div class="inner">
                                    <ul class="nav nav-tabs justify-content-center position-relative" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active mx-1 text-light dont-fade" style="z-index: 9999" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">General</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link mx-1 text-light dont-fade" style="z-index: 9999" id="donator-tab" data-toggle="tab" href="#donator" role="tab" aria-controls="donator" aria-selected="false">Donator</a>
                                        </li>
                                        @can('edit user')
                                            <li class="nav-item">
                                                <a class="nav-link mx-1 text-light dont-fade" style="z-index: 9999" id="moderator-tab" data-toggle="tab" href="#moderator" role="tab" aria-controls="moderator" aria-selected="false">Moderator</a>
                                            </li>
                                        @endcan
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                                <form method="POST" action="{{ action('UserController@Update', $user) }}" enctype="multipart/form-data">
                                                    @method('PATCH')
                                                    @csrf
                                                <div class="input-field">
                                                    <label for="titleInput" class="text-white">Name</label>
                                                    <input type="text" name="name" class="text-light" id="titleInput" aria-describedby="titleHelp" value="{{ $user->name }}">
                                                </div>
                                                    <quill-component :post='{{$user->about ?? "{\"ops\":[{\"insert\":\"User has no biography, encourage them to make one!\\n\"}]}"}}'></quill-component>
                                                <div class="custom-file mb-2">
                                                    <input type="file" class="custom-file-input" name="avatar" id="avatar">
                                                    <label class="custom-file-label bg-brand-black text-light" for="avatar">Upload Avatar</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                            @if($user->donator_tier != null || $user->hasAnyRole(['Owner', 'Administrator', 'Moderator']))
                                            <div class="tab-pane fade" id="donator" role="tabpanel" aria-labelledby="donator-tab">
                                                <div class="alert alert-warning m-3">
                                                    Seriously, do not abuse these features. You will have your status permanently revoked immediately if you do so.
                                                </div>
                                                <form method="POST" action="{{ action('UserController@Update', $user) }}" enctype="multipart/form-data">
                                                    @method('PATCH')
                                                    @csrf
                                                    <div class="input-field my-3">
                                                        <label for="titleInput" class="text-white">Custom url: your current custom url is: <code>https://xenin.co/users/{{$user->slug}}</code></label>
                                                        <input type="text" name="slug" class="text-light" id="titleInput" aria-describedby="titleHelp">
                                                    </div>

                                                    <div class="custom-file mb-3">
                                                        <input type="file" class="custom-file-input" name="background" id="background">
                                                        <label class="custom-file-label bg-brand-black text-light" for="background">Upload Background</label>
                                                    </div>

                                                    <div class="custom-file mb-3">
                                                        <input type="file" class="custom-file-input" name="post_background" id="post_background">
                                                        <label class="custom-file-label bg-brand-black text-light" for="post_background">Upload Post Background</label>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="color" class="text-light">Select a Color</label>
                                                        <input type='text' id="color" name="color" />
                                                    </div>

                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                                @else
                                            <div class="tab-pane fade" id="donator" role="tabpanel" aria-labelledby="donator-tab">
                                                <div class="alert alert-warning m-3">
                                                    Looks like you aren't a donator , by <a href="{{ route('store') }}" class="text-light font-weight-bold">purchasing credits</a> you can unlock prime, which will grant you all of these features!
                                                </div>
                                                <form method="POST" action="#">
                                                    <div class="form-group my-3">
                                                        <label for="titleInput" class="text-white">Custom url: (your current custom url is: http://xenin.local/users/{{$user->slug}}</label>
                                                        <input type="text" class="form-control" id="titleInput" aria-describedby="titleHelp" value="{{ $user->slug }}" disabled>
                                                    </div>

                                                    <div class="custom-file mb-3">
                                                        <input type="file" class="custom-file-input" id="background" disabled>
                                                        <label class="custom-file-label bg-brand-black text-light" for="background">Only donators can upload backgrounds.</label>
                                                    </div>

                                                    <div class="custom-file mb-3">
                                                        <input type="file" class="custom-file-input" name="post_background" id="post_background" disabled>
                                                        <label class="custom-file-label bg-brand-black text-light" for="post_background">Only donators can upload post Backgrounds.</label>
                                                    </div>
                                                    <button type="button" class="btn btn-primary" disabled>Donate to edit these options.</button>
                                                </form>
                                            </div>
                                                @endif
                                        @can('edit rank')
                                            <div class="tab-pane fade" id="moderator" role="tabpanel" aria-labelledby="moderator-tab">
                                                <form method="POST" class="" action="{{ action('UserController@setRank', $user) }}">
                                                    @method('POST')
                                                    @csrf
                                                    <div class="input-field my-2">
                                                        <div class="input-group-prepend">
                                                            <label class="input-group-text bg-brand-darkest-grey" for="role">Choose Role</label>
                                                        </div>
                                                        <select class="custom-select bg-brand-black" id="role" name="role">
                                                            @foreach($roles as $role)
                                                                <option value="{{$role->name}}" @if($role->name == $user->roles()->first()->name) selected @endif> {{$role->name}}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                    <button type="submit" class="waves-effect waves-light btn btn-primary mx-2 float-right">Set Rank</button>
                                                </form>
                                                @endcan
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section class="d-flex flex-column position-relative justify-content-between" style="min-height: 600px; padding: 10rem 0 20rem;"></section>
@endsection
@section('scripts')
    <script>
        $('document').ready(function(){
            $("#color").spectrum({
                color: "{{ $user->color ?? '#EFEFEF' }}",
                preferredFormat: "hex",
                containerClassName: 'color-picker',
                showInput: true,
                cancelText: '',
                chooseText: 'close',
                move: function(color) {
                    $("#color").val(color.toHexString());
                }
            });
        });
    </script>
@endsection