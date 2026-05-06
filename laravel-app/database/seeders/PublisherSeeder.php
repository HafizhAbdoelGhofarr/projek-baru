<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     public function run()
{
        \App\Models\Author::create(['name' => 'Andrea Hirata' , 'email' => 'andrea@example.com']);
        \App\Models\Author::create(['name' => 'Tere Liye' , 'email' => 'tere@example.com']);
        //
}
}
