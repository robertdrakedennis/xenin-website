@extends('layouts.master')

@section('css')
<style>
    @foreach($users as $user)
    .user-img-overlay-{{$user->id}}::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('{{ Storage::url($user->background) ?? null }}') no-repeat center;
        -webkit-background-size: cover !important;
        background-size: cover !important;
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0, .15)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to bottom, rgba(0,0,0, .15), rgba(0,0,0,0) 75%);
    }
    @endforeach
</style>
@endsection
@section('title', 'Users')

@section('content')

    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container">
            {{ Breadcrumbs::render('users') }}
            <div class="card-deck user-deck">
                @foreach($users as $user)
                    <div class="card bg-brand-darker-grey m-3 user-img-overlay-{{$user->id}}">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center text-light position-relative">
                            <hovercard-component id="template_avatar_user_{{$user->id}}" v-tippy-html slug="{{ $user->slug }}" avatar="{{ Storage::url($user->avatar) }}" rank="{{ $user->getRoleNames()->first() }}"></hovercard-component>
                            <a href="{{ route('users.show', $user) }}" style="color:{{ $user->color }} !important;" v-tippy="{ html:  '#template_avatar_user_{{$user->id}}', reactive : true,
        interactive : true, theme : 'transparent', animateFill : true, placement : 'right' }">
                                <img src="{{ Storage::url($user->avatar) }}" class="avatar-img">
                            </a>
                            <a href="{{ route('users.show', $user) }}"><h6 class="mb-0 mt-1 text-light">{{ $user->name }}</h6></a>
                            <h6 class="mb-0 text-center">
                                @if($user->hasAnyRole('Owner', 'Moderator', 'Administrator'))
                                    <i class="fas fa-shield-check fa-fw text-light py-2 fa-xs staff-tool-tip" v-tippy title="This user is a verified staff member"></i>
                                @else
                                    <i class="fas fa-user fa-fw text-light py-2"></i>
                                @endif
                                {{$user->getRoleNames()->first()}}
                            </h6>
                        </div>
                    </div>
                @endforeach
            </div>
            {{$users->links()}}
        </div>
    </section>
@endsection