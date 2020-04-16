<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            'id' => 1,
            'image' => 'https://i.imgur.com/7TsGzk0.jpg',
            'title' => 'It\'s Alive!',
            'body' => '{"ops":[{"insert":"Feels great to finally be able to put this up for people to mess around with. Tell me what you guys think! Feel free to go to "},{"attributes":{"link":"https://xenin.co/forums/suggestions"},"insert":"suggestions"},{"insert":" and post what you think needs to be improved on!\n"}]}',
            'short_body' => 'Web 1.0 is launched! (with some already apparent bugs...)',
            'created_at' => '2018-09-12 08:47:49',
            'updated_at' => '2018-09-12 08:47:49'
        ]);


    }
}
