@extends('layouts.master')
@section('title', 'Leaderboards')

@section('content')

    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="container text-center">
            {{ Breadcrumbs::render('leaderboards') }}
           <h3 class="text-light">This Feature is Currently Unavailable.</h3>
            <p class="text-muted">We'll let you know when it's up :)</p>
        </div>
    </section>
@endsection