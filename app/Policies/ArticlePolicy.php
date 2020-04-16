<?php

namespace App\Policies;

use App\User;
use App\Article;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class ArticlePolicy{
    use HandlesAuthorization;

    public function before($user, $ability){
        if ($user->hasRole('Owner')) {
            return true;
        }
    }


    /**
     * Determine whether the user can view the article.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function view(?User $user){
        if(Auth::user() === null) {
            return true;
        } elseif ($user->hasRole('Banned')) {
            return false;
        } else
            return true;
    }

    /**
     * Determine whether the user can create articles.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user){
        return $user->can('edit news');
    }

    /**
     * Determine whether the user can update the article.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function update(User $user){
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can delete the article.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function delete(User $user){
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can restore the article.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function restore(User $user){
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can permanently delete the article.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function forceDelete(User $user){
        return $user->can('edit category');
    }
}
