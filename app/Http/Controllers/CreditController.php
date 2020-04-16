<?php

namespace App\Http\Controllers;

use App\Credit;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use kanalumaddela\LaravelSteamLogin\SteamUser;

class CreditController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $credits = Credit::all();
        return view('main.store.credits.index', compact('credits'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(){
        $this->authorize('view', Credit::class);
        return view('main.store.credits.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request){
        $this->authorize('create', Credit::class);
        $request->validate([
            'name' => 'bail|required',
            'amount' => 'required',
            'bonus_amount' => 'sometimes',
            'price' => 'required',
        ]);

        Credit::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'bonus_amount' => $request->bonus_amount,
            'price' => $request->price,
        ]);

        return redirect(route('credits.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Credit $credit
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(Credit $credit){
        $this->authorize('view', Credit::class);

        $user = Auth::user();

        $userAccountId = $user->steam_account_id;
        $steam = new SteamUser("[U:1:$userAccountId]");

        $steam->getUserInfo();

       $steamId =  $steam->steamId;
        return view('main.store.credits.show', compact('credit', 'steamId'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Credit $credit
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(Credit $credit){
        $this->authorize('create', Credit::class);
        return view('main.store.credits.edit', compact('credit'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Credit $credit
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, Credit $credit){
        $this->authorize('update', Credit::class);
        $request->validate([
            'name' => 'bail|required',
            'amount' => 'required',
            'bonus_amount' => 'sometimes',
            'price' => 'required',
        ]);

        $credit->fill($request->input())->save();

        toast('Package deleted successfully!', 'success', 'top-right');
        return redirect(route('credits.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Credit $credit
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Credit $credit){
        $this->authorize('delete', Credit::class);
        $credit->delete();
        toast('Package delete successfully!', 'success', 'top-right');
        return redirect(route('credits.index'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Credit $credit
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function gift(Request $request, Credit $credit){
        $this->authorize('view', Credit::class);
        $request->validate([
            'steamid' => 'bail|required',
        ]);

        $user = Auth::user();

        $userAccountId = $user->steam_account_id;
        $steam = new SteamUser("[U:1:$userAccountId]");

        $steam->getUserInfo();

        $steamId =  $steam->steamId;

        $s = new SteamUser($request->steamid);

        $s->getUserInfo();

        $gifted = User::where('steam_account_id', '=',  $s->accountId)->first();

        if ($gifted == null){
            alert()->error('Unknown User..', 'Either the steamid you entered was wrong or the user you entered hasn\'nt signed up yet.')->showConfirmButton('Got it');

            return redirect(route('credits.show', $credit));
        }

            if($gifted->steam_account_id === Auth::user()->steam_account_id){
                alert()->error('Wait!', 'You can\'t gift yourself!')->showConfirmButton('Got it');
                return back()->withInput();
            }

        return view('main.store.credits.show', compact('credit', 'gifted'));
    }
}
