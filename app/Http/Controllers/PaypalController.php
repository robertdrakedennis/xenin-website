<?php
namespace App\Http\Controllers;
use App\Credit;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use kanalumaddela\LaravelSteamLogin\SteamUser;
use Srmklive\PayPal\Services\ExpressCheckout;

class PayPalController extends Controller{
    /**
     * Parse PayPal IPN.
     *
     * @param \Illuminate\Http\Request $request
     * @throws \Exception
     */
    public function notify(Request $request)
    {
        if (!($this->provider instanceof ExpressCheckout)) {
            $this->provider = new ExpressCheckout();
        }
        $post = [
            'cmd' => '_notify-validate'
        ];
        $data = $request->all();
        foreach ($data as $key => $value) {
            $post[$key] = $value;
        }
        $response = (string) $this->provider->verifyIPN($post);

        if ($response === 'VERIFIED') {
            $steam_account_id = $post['custom'];

            // get amount they spent in the store, used to make sure people don't cheat the system, quick round to make sure I dont get decimals
            $amountSpent = round($post['mc_gross'], 0, PHP_ROUND_HALF_UP);

            $credit = Credit::where('id', $post['item_number'])->first();


            //query player and updates their credits
            $user = User::where('steam_account_id', $steam_account_id)->first();

            if ($amountSpent == $credit->price){
                $user->increment([
                    'credits' => $credit->amount + ($credit->bonus_amount ?? 0),
                ]);

                $user->increment([
                    'total_credits' => $credit->amount + ($credit->bonus_amount ?? 0),
                ]);

                $user->save();
            }

            if($user->total_credits >= 8525){
                $user->donator_tier = 'zenith';
                $user->save();
            } elseif ($user->total_credits >= 2875){
                $user->donator_tier = 'supreme';
                $user->save();
            } elseif ($user->total_credits >= 1100){
                $user->donator_tier = 'prime';
                $user->save();
            }


            Log::info(Carbon::now()->toDateTimeString() . ' PAYPAL CONFIRMED for ' . $steamid . 'with the $ spent being: ' . $amountSpent);
        }

        $ipn = new IPNStatus();
        $ipn->payload = json_encode($post);
        $ipn->status = $response;
        $ipn->save();
    }
}