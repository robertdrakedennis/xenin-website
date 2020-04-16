@extends('layouts.master')
@section('title', 'Store')

@php
    $gifted = $gifted ?? $gifted = null;
@endphp

@section('content')

    <section class="d-flex flex-column position-relative brand bg-brand-primary" style="min-height: 400px; padding: 5rem 0 5rem;">
        <div class="d-flex flex-column position-relative text-center justify-content-center align-items-center brand h-100">
            <h1 class="text-white text pb-2">Credits</h1>
            <h5 class="text-white sub-text pb-2">You're purchasing credits for {{ $gifted->name ?? 'yourself' }}</h5>
            <img src="{{ '/assets/media/logo/light.svg' }}" style="height: auto; width: 15rem;">
        </div>
    </section>
    <section class="bg-brand-white d-flex flex-column position-relative brand" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="container">
            @include('main.partials.errors')
            <div class="d-flex flex-sm-column flex-md-row flex-lg-row flex-xl-row align-items-center justify-content-center">
                <div class="d-flex flex-column flex-fill mx-2 w-100 h-100">
                    <h3 class="text-dark mb-0">Purchasing for someone else?</h3>
                    @if($gifted != null)
                        <div class="alert alert-danger">
                            <h5 class="text-dark mb-0 font-weight-bold">You are currently purchasing for {{ $gifted->name }} if you use this form again it will change the user.</h5>
                        </div>
                    @else
                        <div class="alert alert-warning">
                            <p class="text-dark mb-0"><code>You can enter a user's steamid, steam64id, etc..}}</code>) here. They must be signed up on our site for you to gift them.</p>
                        </div>
                    @endif
                    <form class="w-100" method="POST" action="{{ action('CreditController@Gift', $credit) }}">
                        @csrf
                        @method('POST')
                        <div class="form-group">
                            <label for="steamidInput" class="text-white">Title</label>
                            <input type="text" name="steamid" class="form-control bg-brand-white text-dark" id="steamidInput" aria-describedby="steamidHelp" placeholder="Enter a User's Steamid">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="d-flex flex-column flex-fill mx-2 w-100 h-100">
                    <div class="card d-flex flex-column justify-content-center p-3 rounded">
                        <div class="card-body mx-auto">
                            <img src="{{ Storage::url($gifted->avatar ?? Auth::user()->avatar) }}" class="avatar-img avatar-img-lg">
                            <h3 class="text-dark text-center mb-1">{{ $gifted->name ?? Auth::user()->name }}</h3>
                            @if($gifted == null)
                                <p class="text-dark text-center"><span class="font-weight-bold">Credits:</span> {{ Auth::user()->credits }}</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column justify-content-center">
                @if($gifted != null)
                    <div class="alert alert-danger my-3">
                        <h5 class="text-dark mb-0 font-weight-bold">You are currently purchasing for {{ $gifted->name }} you are NOT purchasing for yourself, if you submit this form you agree to our terms of service.</h5>
                    </div>
                @endif
                <div class="card brand my-3 text-center">
                    <div class="card-header border-bottom-0 bg-transparent">
                        <h3 class="text-dark">Purchasing {{ $credit->name }}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item border-0"><i class="fas fa-coins fa-fw"></i> Amount: {{ $credit->amount + $credit->bonus_amount }}</li>
                            @if($credit->bonus_amount != null)
                                <li class="list-group-item border-0"><i class="fas fa-badge-percent fa-fw"></i>Sale:  {{ round(($credit->bonus_amount / $credit->amount) * 100) }}% Off</li>
                            @endif
                        </ul>
                    </div>
                </div>
                <form method="POST" class="w-100" @if(config('paypal_ipn.paypal_environment') == 'live') action="https://www.paypal.com/cgi/bin/webscr" @else action="https://sandbox.paypal.com/cgi/bin/webscr" @endif>
                    <input type="hidden" name="cmd" value="_xclick">
                    <input type="hidden" name="item_name" value="{{ $credit->name }}">
                    <input type="hidden" name="business" value="{{ config('paypal_ipn.paypal_email') }}">
                    <input type="hidden" name="item_number" value="{{ $credit->id }}">
                    <input type="hidden" name="no_shipping" value="1">
                    <input type="hidden" name="lc" value="US">
                    <input type="hidden" name="currency_code" value="USD">
                    <input type="hidden" name="amount" id="amount" value="{{ $credit->price }}">
                    <input type="hidden" name="handling" value="0">
                    <input type="hidden" name="custom" value="{{ $gifted->steam_account_id ?? Auth::user()->steam_account_id }}">
                    <input type="hidden" name="cancel_return" value="{{ config('paypal_ipn.paypal_cancel_url') }}">
                    <input type="hidden" name="return" value="{{ config('paypal_ipn.paypal_return_url') }}">
                    <input type="hidden" name="rm" value="2">
                    <input type="hidden" name="notify_url" value="{{ config('paypal_ipn.paypal_notify_url') }}">
                    <button type="button" id="pay-with-paypal" class="btn btn-lg btn-primary btn-block"><i class="fab fa-paypal"></i> Pay with PayPal</button>
                </form>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script>
        $('#pay-with-paypal').on('click',function(e){
            e.preventDefault();
            let form = $(this).parents('form');
            Swal({
                title: 'Are you sure?',
                type: 'info',
                html: 'By continuing you\'re agreeing to our <a href={{ route('tos') }}" target="_blank">Terms of service.</a> <br>' +
                    'Your order will cost you: ${{ $credit->price }} for {{ $credit->amount + ($credit->bonus_amount ?? 0) }} credits.',
                focusConfirm: true,
                showCancelButton: true,
                confirmButtonText: 'Yes, let\'s go!',
                cancelButtonText: 'No, maybe later.',
            }).then((result) => {
                if (result.value) {
                    Swal({
                        title: 'Sending you over to Paypal...',
                        text: 'Thank you for your contribution :)',
                        type: 'info',
                        showConfirmButton: false,
                    });
                    form.submit()
                } else if (result.dismiss === Swal.DismissReason.cancel || swal.DismissReason.backdrop) {
                    Swal({
                        title: 'Canceled',
                        text: 'Come back when you\'re ready :)',
                        type: 'error',
                    })
                }
            })
        });
    </script>
@endsection