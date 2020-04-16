<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Sale extends Model
{
    protected $fillable = [
        'item_name',
        'invoice_description',
        'total',
        'order_id',
        'steamid',
        'credit_amount'
    ];


    public function extraCredits($number){

        if ($number == 10){
            return (10 / 100) * $number;
        } elseif ($number == 25){
            return (15 / 100) * $number;
        } elseif ($number == 50){
            return (20 / 100) * $number;
        } elseif ($number == 100){
            return (25 / 100) * $number;
        } else
        return (0 / 100) * $number;
    }

    /**
     * Set cart data for processing payment on PayPal.
     *
     *
     * @return array
     */
    public function getGeneratedCheckoutData(){

        $order_id = Invoice::all()->count() + 1;
        $sale = Sale::where('order_id', $order_id)->orderBy('created_at', 'desc')->first();

        $data = [];
        $data['items'] = [
            [
                'name'  => $sale->item_name,
                'price' => $sale->total,
                'qty'   => 1,
            ]
        ];


        $data['return_url'] = url('/paypal/ec-checkout-success');
        $data['invoice_id'] = config('paypal.invoice_prefix') . '_' . $order_id;
        $data['invoice_description'] = 'Order ' . $order_id . ' Invoice';
        $data['cancel_url'] = url('/');
        $total = 0;
        foreach ($data['items'] as $item) {
            $total += $item['price'] * $item['qty'];
        }
        $data['total'] = $total;

        return $data;
    }

    /**
     * Create invoice.
     *
     * @param array  $cart
     * @param string $status
     *
     * @return \App\Invoice
     */
    public function createInvoice($cart, $status){

        $order_id = Invoice::all()->count() + 1;
        $sale = Sale::where('order_id', $order_id)->orderBy('created_at', 'desc')->first();

        $invoice = new Invoice();
        $invoice->title = $cart['invoice_description'];
        $invoice->credit_amount = $sale->credit_amount;
        $invoice->price = $cart['total'];
        $invoice->steamid = Auth::user()->steamid;
        if (!strcasecmp($status, 'Completed') || !strcasecmp($status, 'Processed')) {
            $invoice->paid = 1;
        } else {
            $invoice->paid = 0;
        }
        $invoice->chargeback = 0;
        $invoice->save();
        return $invoice;
    }

}
