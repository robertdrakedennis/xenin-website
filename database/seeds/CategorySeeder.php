<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        DB::table('categories')->insert([
            'id' => 1,
            'title' => 'Xenin',
            'description' => 'Official Updates, posts, etc. From Xenin Staff.',
            'slug' => 'xenin',
            'weight' => 1,
            'isLocked' => true,
            'isPrivate' => false,
        ]);

        DB::table('categories')->insert([
            'id' => 2,
            'title' => 'General',
            'description' => 'Posts that are on-topic with Xenin go here.',
            'slug' => 'general',
            'weight' => 1,
            'isLocked' => false,
            'isPrivate' => false,
        ]);




        // Sub-Categories
        DB::table('categories')->insert([
            'id' => 3,
            'title' => 'Off-topic',
            'description' => 'Anything off-topic to Xenin goes here.',
            'slug' => 'off-topic',
            'parent_id' => 2,
            'weight' => 1,
            'isLocked' => false,
            'isPrivate' => false,
        ]);

        DB::table('categories')->insert([
            'id' => 4,
            'title' => 'Announcements',
            'description' => 'Official updates, news, meta changes.',
            'slug' => 'announcements',
            'parent_id' => 1,
            'weight' => 1,
            'isLocked' => true,
            'isPrivate' => false,
        ]);


        DB::table('categories')->insert([
            'id' => 5,
            'title' => 'Lounge',
            'description' => 'chill zone',
            'slug' => 'lounge',
            'parent_id' => 2,
            'weight' => 1,
            'isLocked' => false,
            'isPrivate' => false,
        ]);

        DB::table('categories')->insert([
            'id' => 6,
            'title' => 'Suggestions',
            'description' => 'Post suggestions here.',
            'slug' => 'suggestions',
            'parent_id' => 2,
            'weight' => 1,
            'isLocked' => false,
            'isPrivate' => false,
        ]);

        DB::table('categories')->insert([
            'id' => 7,
            'title' => 'Report a User',
            'description' => 'Report a user here.',
            'slug' => 'report-a-user',
            'parent_id' => 2,
            'weight' => 1,
            'isLocked' => false,
            'isPrivate' => false,
        ]);


    }
}
