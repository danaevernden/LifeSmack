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
      $this->call(MarkettasksTableSeeder::class);

      /*$this->call(MarketplacegoalsTableSeeder::class);

      /*  $this->call(UsersTableSeeder::class);
        $this->call(GoalsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
*/
    }
}
