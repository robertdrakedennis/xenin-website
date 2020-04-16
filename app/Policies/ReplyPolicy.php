<?php

namespace App\Policies;

use App\User;
use App\Reply;
use Illuminate\Auth\Access\HandlesAuthorization;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class ReplyPolicy{
    use HandlesAuthorization;

    public function before($user, $ability){
        if ($user->hasRole('Owner')) {
            return true;
        }
    }


    /**
     * Determine whether the user can view the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Reply  $reply
     * @return mixed
     */
    public function view(User $user, Reply $reply){
    // we dont really use this so
    }

    /**
     * Determine whether the user can create replies.
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
     * Determine whether the user can update the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Reply  $reply
     * @return mixed
     */
    public function update(User $user, Reply $reply){
        return $user->can('edit reply') || $user->id === $reply->user_id;
    }

    /**
     * Determine whether the user can delete the reply.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function delete(User $user){
        return $user->can('edit reply');
    }

    /**
     * Determine whether the user can restore the reply.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function restore(User $user){
        return $user->can('edit reply');
    }

    /**
     * Determine whether the user can permanently delete the reply.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function forceDelete(User $user){
        return $user->can('edit reply');
    }
}
