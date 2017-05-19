<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
  /*    $user_id = \App\User::where('name','=','Jamal Smith')->pluck('id');*/
      DB::table('categories')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'catogory_id'=> 4,
     'goal_id'=> 1,
     'parent_cat'=>null,
     'text' => 'task type'
     ]);

     DB::table('categories')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'catogory_id'=> 1,
    'goal_id'=> 1,
    'parent_cat'=>4,
    'text' => 'UI'
    ]);
    DB::table('categories')->insert([
   'created_at' => Carbon\Carbon::now()->toDateTimeString(),
   'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
   'catogory_id'=> 2,
   'goal_id'=> 1,
   'parent_cat'=>4,
   'text' => 'back end'
   ]);
   DB::table('categories')->insert([
  'created_at' => Carbon\Carbon::now()->toDateTimeString(),
  'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
  'catogory_id'=> 3,
  'goal_id'=> 1,
  'parent_cat'=>4,
  'text' => 'user testing'
  ]);
  DB::table('categories')->insert([
 'created_at' => Carbon\Carbon::now()->toDateTimeString(),
 'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
 'catogory_id'=> 5,
 'goal_id'=> 1,
 'parent_cat'=>null,
 'text' => 'effort estimation'
 ]);
 DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'catogory_id'=> 6,
'goal_id'=> 1,
'parent_cat'=>5,
'text' => 'low'
]);
DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'catogory_id'=> 7,
'goal_id'=> 1,
'parent_cat'=>5,
'text' => 'medium'
]);
DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'catogory_id'=> 8,
'goal_id'=> 1,
'parent_cat'=>5,
'text' => 'high'
]);


    }
}
