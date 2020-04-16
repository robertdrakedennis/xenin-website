<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main.index');
})->name('home');

Route::get('/test', function () {
    return view('main.test');
})->name('test');

Route::get('/tos', function () {
    return view('main.tos');
})->name('tos');

//Forum Routes
Route::get('/forums', 'ForumController@index')->name('forums.index');


Route::prefix('forums')->group(function () {
    Route::resource('categories', 'CategoryController');

    // start categories
    Route::get('/', [
        'as' => 'forums.index',
        'uses' => 'ForumController@Index'
    ]);

    Route::get('/categories', [
        'as' => 'categories.index',
        'uses' => 'CategoryController@Index'
    ]);

    Route::post('/categories', [
        'as' => 'categories.store',
        'uses' => 'CategoryController@Store'
    ]);

    Route::get('/{category}', [
        'as' => 'categories.show',
        'uses' => 'CategoryController@Show'
    ]);

    Route::get('/{category}/edit', [
        'as' => 'categories.edit',
        'uses' => 'CategoryController@Edit'
    ]);

    Route::patch('/{category}/update', [
        'as' => 'categories.update',
        'uses' => 'CategoryController@Update'
    ]);

    Route::post('/{category}/delete', [
        'as' => 'categories.delete',
        'uses' => 'CategoryController@Destroy'
    ]);

    Route::post('/{category}/lock', [
        'as' => 'categories.lock',
        'uses' => 'CategoryController@lockCategory'
    ]);

    Route::post('/{category}/private', [
        'as' => 'categories.private',
        'uses' => 'CategoryController@privateCategory'
    ]);

    // end categories



    //start threads

    Route::get('/{category}/create', [
        'as' => 'threads.create',
        'uses' => 'ThreadController@Create'
    ]);

    Route::post('/{category}/store', [
        'as' => 'threads.store',
        'uses' => 'ThreadController@Store'
    ]);

    Route::get('/{category}/{thread}', [
        'as' => 'threads.show',
        'uses' => 'ThreadController@Show'
    ]);

    Route::get('/{category}/{thread}/edit', [
        'as' => 'threads.edit',
        'uses' => 'ThreadController@Edit'
    ]);

    Route::patch('/{category}/{thread}/update', [
        'as' => 'threads.update',
        'uses' => 'ThreadController@Update'
    ]);

    Route::post('/{category}/{thread}/delete', [
        'as' => 'threads.delete',
        'uses' => 'ThreadController@Destroy'
    ]);

    Route::post('/{category}/{thread}/restore', [
        'as' => 'threads.restore',
        'uses' => 'ThreadController@Restore'
    ]);

    Route::post('/{category}/{thread}/lock', [
        'as' => 'threads.lock',
        'uses' => 'ThreadController@lockThread'
    ]);

    Route::post('/{category}/{thread}/pin', [
        'as' => 'threads.pin',
        'uses' => 'ThreadController@pinThread'
    ]);
    // end threads

    // start replies
    Route::post('/{category}/{thread}', [
        'as' => 'replies.store',
        'uses' => 'ReplyController@Store'
    ]);


    Route::get('/{category}/{thread}/{reply}/edit', [
        'as' => 'replies.edit',
        'uses' => 'ReplyController@Edit'
    ]);

    Route::patch('/{category}/{thread}/{reply}/update', [
        'as' => 'replies.update',
        'uses' => 'ReplyController@Update'
    ]);

    Route::post('/{category}/{thread}/{reply}/delete', [
        'as' => 'replies.delete',
        'uses' => 'ReplyController@Destroy'
    ]);

    Route::post('/{category}/{thread}/{reply}/restore', [
        'as' => 'replies.restore',
        'uses' => 'ReplyController@Restore'
    ]);
    // end replies
});

//Start news
Route::prefix('news')->group(function () {
    Route::get('/', [
        'as' => 'articles.index',
        'uses' => 'ArticleController@Index'
    ]);

    Route::middleware('optimizeImages')->group(function () {
        Route::post('/create', [
            'as' => 'articles.store',
            'uses' => 'ArticleController@Store'
        ]);

        Route::patch('/{article}/update', [
            'as' => 'articles.update',
            'uses' => 'ArticleController@Update'
        ]);
    });

    Route::get('/create', [
        'as' => 'articles.create',
        'uses' => 'ArticleController@Create'
    ]);


    Route::get('/{article}', [
        'as' => 'articles.show',
        'uses' => 'ArticleController@Show'
    ]);

    Route::get('/{article}/edit', [
        'as' => 'articles.edit',
        'uses' => 'ArticleController@Edit'
    ]);


});


Route::prefix('users')->group(function () {
    Route::get('/', [
        'as' => 'users.index',
        'uses' => 'UserController@Index'
    ]);

    Route::get('/staff', [
        'as' => 'users.staff',
        'uses' => 'UserController@Staff'
    ]);

    Route::get('/leaderboards', function () {
        return view('main.users.leaderboards.index');
    })->name('users.leaderboards');

    Route::get('/bans', function () {
        return view('main.users.bans.index');
    })->name('users.bans');

    Route::get('/{user}', [
        'as' => 'users.show',
        'uses' => 'UserController@Show'
    ]);

    Route::get('/{user}/settings', [
        'as' => 'users.edit',
        'uses' => 'UserController@Edit'
    ]);

    Route::middleware('optimizeImages')->group(function () {
        Route::patch('/{user}/update', [
            'as' => 'users.update',
            'uses' => 'UserController@Update'
        ]);
    });


    Route::post('/{user}/setRank', [
        'as' => 'users.setrank',
        'uses' => 'UserController@setRank'
    ]);

    Route::post('/{user}/ban', [
        'as' => 'users.ban',
        'uses' => 'UserController@Ban'
    ]);
});

//store routes
Route::prefix('store')->group(function () {
    Route::get('/', function () {
        return view('main.store.index');
    })->name('store');

    Route::get('/purchase', [
        'as' => 'credits.index',
        'uses' => 'CreditController@Index'
    ]);

    Route::get('/purchase/create', [
        'as' => 'credits.create',
        'uses' => 'CreditController@Create'
    ]);

    Route::post('/purchase/create', [
        'as' => 'credits.store',
        'uses' => 'CreditController@Store'
    ]);

    Route::get('/purchase/{credit}', [
        'as' => 'credits.show',
        'uses' => 'CreditController@Show'
    ]);

    Route::post('/purchase/{credit}/gift', [
        'as' => 'credits.gift',
        'uses' => 'CreditController@Gift'
    ]);

    Route::get('/purchase/{credit}/edit', [
        'as' => 'credits.edit',
        'uses' => 'CreditController@Edit'
    ]);

    Route::patch('/purchase/{credit}/update', [
        'as' => 'credits.update',
        'uses' => 'CreditController@Update'
    ]);

    Route::post('/purchase/{credit}/destroy', [
        'as' => 'credits.destroy',
        'uses' => 'CreditController@Destroy'
    ]);
});

Route::post('paypal/notify', 'PayPalController@notify');

//Route::post('paypal/ec-checkout', 'PayPalController@getExpressCheckout');

//Route::get('paypal/ec-checkout-success', 'PayPalController@getExpressCheckoutSuccess');



//redirect links
Route::get('discord', function () {
    return redirect()->away('https://discordapp.com/invite/cQa7xQR');
})->name('discord');

Route::get('steam', function () {
    return redirect()->away('https://steamcommunity.com/groups/xeninrp');
})->name('steam');

Route::get('mail', function () {
    return redirect()->away('mailto:xeninco@gmail.com');
})->name('mail');

Route::get('server', function () {
    return redirect()->away('steam://connect/#');
})->name('server');




// Auth routes
Route::post('logout', 'Auth\LoginController@logout')->name('logout'); // or use the default post method if you prefer

Route::post('login/steam', 'Auth\SteamLoginController@login')->name('login.steam');
Route::get('auth/steam', 'Auth\SteamLoginController@auth')->name('auth.steam');


Route::get('test', function () {
    return view('test');
})->name('test');