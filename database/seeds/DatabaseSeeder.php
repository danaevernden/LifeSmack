<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      #  $this->call(UsersTableSeeder::class);
        $this->call(GoalsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
    }
}
