@extends('layouts.master')
@section('title', 'Store')


@section('content')
    <section class="d-flex flex-column position-relative brand bg-brand-primary" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="d-flex flex-column position-relative text-center justify-content-center align-items-center brand h-100">
            <h1 class="text-white text pb-2">Credits</h1>
            <h5 class="text-white sub-text pb-2">Buy credits to use in-game for added bonuses!</h5>
            <img src="{{ '/assets/media/logo/light.svg' }}" style="height: auto; width: 15rem;">
        </div>
    </section>
    <section class="bg-brand-white d-flex flex-column position-relative brand" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="container">
            @auth
                @foreach($credits as $credit)
                    <div class="d-flex flex-sm-column flex-md-column flex-lg-row my-4 pricing rounded">
                        <div class="d-flex flex-column flex-fill bg-brand-white p-4 mx-sm-auto mx-md-auto mx-lg-0">
                            <h1 class="text-dark font-weight-bold">{{ $credit->name . ' - ' . ($credit->amount + $credit->bonus_amount) . ' credits' }}</h1>
                            @if($credit->bonus_amount != null)
                                <h3 class="text-brand-lighter-grey"> <span class="badge badge-success">{{ round(($credit->bonus_amount / $credit->amount) * 100) }}% Off</span></h3>
                            @endif
                        </div>
                        <div class="p-5 h-100 align-items-center justify-content-center rounded-right">
                            <div class="btn-group mx-auto my-auto" role="group">
                                <a href="#" class="btn btn-lg btn-black dont-fade">${{ $credit->price }}</a>
                                <a href="{{ route('credits.show', $credit) }}" class="btn btn-lg btn-primary">Add Credits</a>
                                @auth
                                    @if(Auth::user()->hasRole('Owner'))
                                        <a href="{{ route('credits.edit', $credit) }}" class="btn btn-lg btn-success">Edit Package</a>
                                    @endif
                                @endauth
                            </div>
                        </div>
                        @auth
                            @if(Auth::user()->hasRole('Owner'))
                                <form method="POST" action="{{ action('CreditController@Destroy', $credit) }}">
                                    @csrf
                                    @method('POST')
                                    <button type="submit" class="btn btn-sm btn-danger">Delete Package</button>
                                </form>
                            @endif
                        @endauth
                    </div>
                @endforeach
            @endauth
            @guest
                <h1>You need to sign in to use the store.</h1>
            @endguest
        </div>
    </section>
@endsection