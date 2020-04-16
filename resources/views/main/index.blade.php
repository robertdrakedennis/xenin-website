@extends('layouts.master')
@section('css')
@endsection
@section('title', 'Home')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-black" style="min-height: 100vh; padding: 10rem 0 10rem;">
        <div class="d-flex flex-column position-relative text-center mx-auto my-auto justify-content-center align-items-center brand">
            <h1 class="text-white text pb-2">Xenin</h1>
            <h5 class="text-white sub-text pb-2">DarkRP, but it's not shit.</h5>
            <img src="{{ '/assets/media/logo/light.svg' }}" style="height: auto; width: 15rem;">
        </div>
    </section>
@endsection
@section('scripts')
@endsection