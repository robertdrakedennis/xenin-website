<?php

namespace App\Http\Controllers;

use App\User;
use Cocur\Slugify\Slugify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use kanalumaddela\LaravelSteamLogin\SteamUser;
use Spatie\LaravelImageOptimizer\Facades\ImageOptimizer;
use Spatie\Permission\Models\Role;
use Validator;

class UserController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $users = User::paginate(15);
        return view('main.users.index', compact('users'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function staff(){
        $users = User::role(['Owner', 'Administrator', 'Moderator'])->paginate(15);
        return view('main.users.staff.index', compact('users'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(User $user){
        $this->authorize('view', User::class);


        $userAccountId = $user->steam_account_id;
        $steam = new SteamUser("[U:1:$userAccountId]");

        $steam->getUserInfo();

        return view('main.users.show', compact('user', 'steam'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(User $user){
        $this->authorize('update', $user);

        $roles = Role::all();

        return view('main.users.edit', compact('user', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, User $user){
        $this->authorize('update', $user);

        $messages = [
            'mimetypes' => 'Sorry, only donators can use gifs for their avatar. Consider becoming one! It directly supports the server uptime! (or you just uploaded a file we don\'t allow.)',
        ];

        if($user->hasAnyRole(['Owner', 'Administrator', 'Moderator']) || $user->donator_tier != null){
            $rules = [
                'name' => 'nullable|min:3|max:255',
                'body' => 'nullable|json|min:5',
                'avatar' => 'nullable|image|max:2048',
                'slug' => [
                    'nullable',
                    'min:1',
                    'max:50',
                    Rule::unique('users')->ignore($user->id), // when it's an array every single rule has to be its own value
                ],
                'background' => 'nullable|image|max:2048',
                'post_background' => 'nullable|image|max:2048',
                'color' => 'sometimes',
            ];
        } else {
            $rules = [
                'name' => 'nullable|min:3|max:255',
                'body' => 'nullable|json|min:5',
                'avatar' => 'nullable|mimetypes:image/png,image/jpeg|max:2048',
                'slug' => [
                    'nullable',
                    'min:1',
                    'max:50',
                    Rule::unique('users')->ignore($user->id), // when it's an array every single rule has to be its own value
                ],
                'background' => 'nullable|image|max:2048',
                'post_background' => 'nullable|image|max:2048',
                'color' => 'sometimes',
            ];
        }

        Validator::make($request->all(), $rules, $messages)->validate();

        if ($request->name != null){
            $user->name = $request->name;
        }

        if ($request->body != null){
            $user->about = json_encode($request->body);
        }

        if ($request->slug != null){
            $this->authorize('donator', $user);
            $user->slug = (new Slugify)->slugify($request->slug);
        }

        if ($request->background != null){
            $this->authorize('donator', $user);
            $background = $request->file('background')->store('public/backgrounds');
            $user->background = $background;
        }

        if ($request->post_background != null){
            $this->authorize('donator', $user);
            $post_background = $request->file('post_background')->store('public/backgrounds');
            $user->post_background = $post_background;
        }

        if ($request->color != null){
            $this->authorize('donator', $user);
            $color = substr($request->color, 1);
            if(ctype_xdigit($color) && strlen($color) == 6){
                $user->color = $request->color;
            }
        }

        if ($request->avatar != null){
            $avatar = $request->file('avatar')->store('public/avatars');
            $user->avatar = $avatar;
        }

        $user->save();
        toast('Profile Updated Successfully!','success','top-right');
        return redirect(route('users.edit', $user));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function setRank(Request $request, User $user){
        $this->authorize('ban', $user); // just using this policy to not have to make another one
        $user->syncRoles([$request->role]);
        toast('Profile Role Updated Successfully!','success','top-right');
        return redirect(route('users.show', $user));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\User $user
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function ban(User $user){
        $this->authorize('ban', $user);

        if ($user->hasRole('User')){
            $user->syncRoles(['Banned']);
            toast('User Successfully Banned!','success','top-right');
            return redirect(route('users.show', $user));
        } else
            $user->syncRoles(['User']);
        toast('User Successfully Un-banned!','success','top-right');
        return redirect(route('users.show', $user));
    }
}
