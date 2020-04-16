@extends('layouts.master')
@section('title', 'Store')


@section('content')
    <section class="bg-brand-black d-flex flex-column position-relative brand" style="min-height: 600px; padding: 10rem 0 10rem;">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <form method="POST" class="w-100" action="{{ action('CreditController@Store') }}">
                    @csrf
                    @method('POST')
                    <div class="form-group">
                        <label for="nameInput" class="text-white">Title</label>
                        <input type="text" name="name" class="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter Credit Package Name">
                    </div>
                    <div class="form-group">
                        <label for="amountInput" class="text-white">Amount</label>
                        <input type="number" name="amount" class="form-control" id="amountInput" aria-describedby="amountHelp" placeholder="Enter Credit Package Amount">
                    </div>
                    <div class="form-group">
                        <label for="bonusAmountInput" class="text-white">bonus Amount</label>
                        <input type="number" name="bonus_amount" class="form-control" id="bonusAmountInput" aria-describedby="bonusAmountHelp" placeholder="Enter Credit Package Bonus Amount">
                    </div>
                    <div class="form-group">
                        <label for="priceInput" class="text-white">Price</label>
                        <input type="number" name="price" class="form-control" id="priceInput" aria-describedby="priceHelp" placeholder="Enter Credit Package Price">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection