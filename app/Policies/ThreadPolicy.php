<?php

namespace App\Policies;

use App\User;
use App\Thread;
use App\Category;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class ThreadPolicy{
    use HandlesAuthorization;

    public function before($user, $ability){
        if ($user->hasRole('Owner')) {
            return true;
        }
    }

    /**
     * Determine whether the user can view the thread.
     *
     * @param  \App\User  $user
     * @return mixed
     */

    public function view(?User $user){
        if(Auth::guest()) {
            return true;
        }
        if ($user->hasRole('Banned')) {
            return false;
        } else
            return true;
    }

    /**
     * Determine whether the user can create threads.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user){
        if ($user->hasRole('Banned')) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Determine whether the user can update the thread.
     *
     * @param  \App\User  $user
     * @param  \App\Thread  $thread
     * @return mixed
     */
    public function update(User $user, Thread $thread){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit thread') || $user->id === $thread->user_id;
    }

    /**
     * Determine whether the user can delete the thread.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function delete(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit thread');
    }

    /**
     * Determine whether the user can restore the thread.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function restore(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit thread');
    }

    /**
     * Determine whether the user can permanently delete the thread.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function forceDelete(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit thread');
    }

    /**
     * Determine whether the user can create in a locked thread.
     *
     * @param  \App\User $user
     * @param Thread $thread
     * @return mixed
     */
    public function isLocked(?User $user, Thread $thread){
        if ($thread->isLocked == true){
            if(Auth::guest() == true) {
                return false;
            }
            if ($user->can('edit thread')){
                return true;
            } else {
                return false;
            }
        } else
            return true;
    }

    /**
     * Determine whether the user can view  a deleted thread.
     *
     * @param  \App\User $user
     * @param Thread $thread
     * @return mixed
     */
    public function istrashed(?User $user, Thread $thread){
        if ($thread->trashed()){
            if(Auth::guest()) {
                return false;
            }
            if ($user->can('edit thread')){
                return true;
            } else {
                return false;
            }
        } else return true;
    }
}
