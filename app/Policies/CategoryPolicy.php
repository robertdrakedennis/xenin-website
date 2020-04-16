<?php

namespace App\Policies;

use App\User;
use App\Category;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CategoryPolicy{
    use HandlesAuthorization;

    public function before($user, $ability){
        if ($user->hasRole('Owner')) {
            return true;
        }
    }


    /**
     * Determine whether the user can view the category.
     *
     * @param  \App\User $user
     * @param Category $category
     * @return mixed
     */
    public function view(?User $user, Category $category){
        if ($category->parent == null){
            return false;
        }
        if(Auth::guest() == true) {
            return true;
        }
        if($user->hasRole('Banned')) {
            return false;
        } else
            return true;
    }

    /**
     * Determine whether the user can create categories.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can update the category.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function update(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can delete the category.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function delete(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can restore the category.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function restore(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can permanently delete the category.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function forceDelete(User $user){
        if(Auth::guest() == true) {
            return false;
        }
        return $user->can('edit category');
    }

    /**
     * Determine whether the user can view a private category.
     *
     * @param  \App\User $user
     * @param Category $category
     * @return mixed
     */
    public function isPrivate(?User $user, Category $category){
        if ($category->isPrivate == true){
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
     * Determine whether the user can create in a locked category.
     *
     * @param  \App\User $user
     * @param Category $category
     * @return mixed
     */
    public function isLocked(?User $user, Category $category){
        if ($category->isLocked == true){
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
}
