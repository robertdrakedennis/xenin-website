@extends('layouts.master')
@section('css')
    <style>
        .profile-img-overlay::before{
            @if($user->background != null)
            background: url('{{ Storage::url($user->background) }}') no-repeat center;
            @endif
        }
    </style>
@endsection

@section('meta')
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="xenin, xenin.co, game servers, us game servers, garrysmod, us garrysmod servers, garrys mod, garrysmod, darkrp, Darkrp, darkRP, dark roleplay, dark role play">
    <meta name="description" content="Xenin\'s the name, good server's the game.">
    <meta name="title" content="Xenin - Darkrp | Dark Roleplay | US darkrp | dark rp server">
    <meta property="og:site_name" content="Xenin">
    <meta property="og:title" content="{{ $user->name }}">
    <meta property="og:description" content="Posts: {{ $user->post_count }}">
    <meta property="og:type" content="Product">
    <meta property="og:image" content="{{ Storage::url($user->avatar) }}">
    <meta property="og:url" content="{{ route('users.show', $user->slug) }}">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="@xeninco" name="twitter:site">
    <meta name="twitter:description" content="Darkrp that isn't shit.">
    <meta name="twitter:image" content="{{ Storage::url($user->avatar) }}">
    <meta name="theme-color" content="#955799">
@endsection


@section('title', $user->name)

@section('content')
    <section class="d-flex flex-column position-relative justify-content-between profile-img-overlay" style="min-height: 700px; padding: 10rem 0 5rem;">
        <div class="container">
            <div class="position-relative">
                {{ Breadcrumbs::render('user', $user) }}
                <div class="d-flex flex-column">
                    <div class="ml-auto d-flex flex-row">
                        @auth
                            @if(Auth::user()->id == $user->id || Auth::user()->can('edit user'))
                                <a href="{{ route('users.edit', $user) }}" class="btn btn-light d-flex align-items-center mx-1"><i class="fas fa-edit mx-auto"></i> Edit</a>
                            @endif
                            @can('edit user')
                                @if($user->hasAnyRole(['Owner', 'Administrator', 'Moderator']))
                                @else
                                    @if($user->hasRole('Banned'))
                                        <form method="POST" action="{{ action('UserController@Ban', $user) }}">
                                            @csrf
                                            @method('POST')
                                            <button type="submit" class="btn btn-danger mx-1">
                                                Un-ban
                                            </button>
                                        </form>
                                    @else
                                        <form method="POST" action="{{ action('UserController@Ban', $user) }}">
                                            @csrf
                                            @method('POST')
                                            <button type="submit" class="btn btn-danger mx-1">
                                                Ban
                                            </button>
                                        </form>
                                    @endif
                                @endif
                            @endcan
                        @endauth
                    </div>
                    <div class="d-flex flex-column p-5 justify-content-center align-items-center my-1">
                        <h1 class="text-light text-center" style="color:{{ $user->color }} !important;">{{ $user->name }}</h1>
                        <hovercard-component id="hovercard" v-tippy-html slug="{{ $user->slug }}" avatar="{{ Storage::url($user->avatar) }}" rank="{{ $user->getRoleNames()->first() }}"></hovercard-component>
                        <div class="wrapper">
                            <img src="{{ Storage::url($user->avatar) }}" class="avatar-img avatar-img-lg" v-tippy="{ html: '#hovercard', reactive : true,
        interactive : true, theme : 'transparent', animateFill : true }">
                            @if($steam->onlineState == "Online")
                                <div class="state online-state"></div>
                            @else
                                <div class="state offline-state"></div>
                            @endif
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center my-1">
                        <h4 class="text-light text-center">About me:</h4>
                        <div class="text-light">
                            <static-quill-component :post='{{$user->about ?? "{\"ops\":[{\"insert\":\"User has no biography, encourage them to make one!\\n\"}]}"}}'></static-quill-component>
                        </div>
                    </div>
                    <div class="my-1">
                        <div class="card-deck profile-deck">
                            <div class="card bg-brand-black mx-3 my-3">
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h3 class="text-light">Rank</h3>
                                    @if($user->hasAnyRole('Owner', 'Moderator', 'Administrator'))
                                        <i class="fas fa-shield-check fa-fw fa-2x text-light py-2 staff-tool-tip" v-tippy title="This user is a verified staff member"></i>
                                    @else
                                        <i class="fas fa-user fa-fw fa-2x text-light py-2"></i>
                                    @endif
                                    <h5 class="text-light">{{$user->getRoleNames()->first()}}</h5>
                                </div>
                            </div>
                            <div class="card bg-brand-black mx-3 my-3">
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h3 class="text-light">Posts</h3>
                                    <i class="fas fa-paste fa-fw fa-2x text-light py-2"></i>
                                    <h6 class="text-light">{{ $user->post_count }}</h6>
                                </div>
                            </div>
                            <div class="card bg-brand-black mx-3 my-3">
                                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h3 class="text-light">Donator Tier</h3>
                                    @if($user->donator_tier == null)
                                        <i class="fal fa-frown fa-fw fa-2x text-light py-2"></i>
                                    @elseif($user->donator_tier == 'founder')
                                        <img src="{{ '/assets/media/donator/solid_white/founder.svg' }}" class="store-rank-founder" style="height: 3rem; width: auto;" v-tippy title="This rank can only be achieved by people who have purchased credits in the first week of Xenin's release">
                                    @elseif($user->donator_tier == 'prime')
                                        <img src="{{ '/assets/media/donator/solid_white/prime.svg' }}" class="store-rank-prime" style="height: 3rem; width: auto;" v-tippy title="This ranked is unlocked when reaching 1100 total credits in your account">
                                    @elseif($user->donator_tier == 'supreme')
                                        <img src="{{ '/assets/media/donator/solid_white/supreme.svg' }}" class="store-rank-supreme" style="height: 3rem; width: auto;" v-tippy title="This ranked is unlocked when reaching 2875 total credits in your account.">
                                    @elseif($user->donator_tier == 'zenith')
                                        <img src="{{ '/assets/media/donator/solid_white/zenith.svg' }}" class="store-rank-zenith" style="height: 3rem; width: auto;" v-tippy title="This ranked is unlocked when reaching 8525 total credits in your account.">
                                    @endif
                                    @if($user->donator_tier == null)
                                        <h6 class="text-light">No donation Tier.</h6>
                                    @else
                                        <h6 class="text-light">{{ $user->donator_tier }}</h6>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection