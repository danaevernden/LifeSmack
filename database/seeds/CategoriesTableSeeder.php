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
     'parent_cat'=>null,
     'text' => 'location'
     ]);

     DB::table('categories')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'parent_cat'=>1,
    'text' => 'at home'
    ]);
    DB::table('categories')->insert([
   'created_at' => Carbon\Carbon::now()->toDateTimeString(),
   'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
   'parent_cat'=>1,
   'text' => 'while commuting'
   ]);
   DB::table('categories')->insert([
  'created_at' => Carbon\Carbon::now()->toDateTimeString(),
  'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
  'parent_cat'=>1,
  'text' => 'with professor'
  ]);
  DB::table('categories')->insert([
 'created_at' => Carbon\Carbon::now()->toDateTimeString(),
 'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
 'parent_cat'=>null,
 'text' => 'effort estimation'
 ]);
 DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'parent_cat'=>5,
'text' => 'low'
]);
DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'parent_cat'=>5,
'text' => 'medium'
]);
DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'parent_cat'=>5,
'text' => 'high'
]);

DB::table('categories')->insert([
'created_at' => Carbon\Carbon::now()->toDateTimeString(),
'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
'parent_cat'=> null,
'text'=>'type of activity'
   ]);

   DB::table('categories')->insert([
   'created_at' => Carbon\Carbon::now()->toDateTimeString(),
   'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
   'parent_cat'=> 9,
   'text'=>'bit writing'
      ]);

      DB::table('categories')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'parent_cat'=> 9,
      'text'=>'performing'
         ]);

         DB::table('categories')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'parent_cat'=> 9,
         'text'=>'getting gigs'
            ]);




    }
}
