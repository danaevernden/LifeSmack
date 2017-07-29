<?php

use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('reviews')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'marketplace_id' => 1,
     'name' => 'Jane Doe',
     'review' => 'hilarious and fun to work on, I was able to book my own gig at the Comedy Cellar after!',
     'helpful'=>4,
     'rating'=>5
   ]);

   DB::table('reviews')->insert([
  'created_at' => Carbon\Carbon::now()->toDateTimeString(),
  'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
  'marketplace_id' => 1,
  'name' => 'Stacey Gray',
  'review' => 'could use a section on cross training, I had to define that myself',
  'helpful'=>3,
  'rating'=>3
]);

    }
}
