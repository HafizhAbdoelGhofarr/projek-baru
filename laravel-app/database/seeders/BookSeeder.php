<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
        \App\Models\Book::create([
            'title' => 'Laskar Pelangi',
            'year' => 2005,
            'category_id' => 1,
            'publisher_id' => 1,
            'author_id' => 1
        ]);
        //
    }
}
