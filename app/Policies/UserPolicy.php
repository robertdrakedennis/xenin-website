<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class UserPolicy
{
    use HandlesAuthorization;

    public function before($user, $ability){
        if ($user->hasRole('Owner')) {
            return true;
        }
    }


    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function view(?User $user){
        if(Auth::user() === null) {
            return true;
        }
        if ($user->hasRole('Banned')) {
            return false;
        } else
            return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function update(User $user){
        if ($user->hasRole('Banned')) {
            return false;
        }
        return $user->can('edit user') || Auth::user()->id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function delete(User $user){

        return $user->can('edit user') || Auth::user()->id === $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function restore(User $user){
        return $user->can('edit user') || Auth::user()->id === $user->id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function forceDelete(User $user){
        return $user->can('edit user') || Auth::user()->id === $user->id;
    }

    /**
     * Determine whether the user is a donator or not..
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function donator(User $user){
        if($user->donator_tier == null){
            return false;
        } else
            return true;
    }

    /**
     * Determine whether the user can be banned or not
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function ban(User $user){
            return $user->can('edit user');
    }
}
