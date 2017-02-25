<?php

use Illuminate\Database\Seeder;

class GoalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
  /*    $user_id = \App\User::where('name','=','Jamal Smith')->pluck('id');*/
      DB::table('goals')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'goal_name' => 'Build LifeSmack',
     'order_id' => 1,
     'status_id' => 1,
     'parent_goal_id' => 0,
      'goal_due_date' => Carbon\Carbon::createFromDate(2017,12,31)->toDateTimeString(),
     'life_area' => 'personal_growth'
  /*   'user_id' => $user_id */
         ]);

/*      $user_id = \App\User::where('name','=','Jamal Smith')->pluck('id');*/
       DB::table('goals')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'goal_name' => 'Qualify for NYC marathon',
      'order_id' => 2,
      'status_id' => 1,
      'parent_goal_id' => 0,
      'goal_due_date' => Carbon\Carbon::createFromDate(2017,10,31)->toDateTimeString(),
      'life_area' => 'fitness'
    /*  'user_id' => $user_id*/
      ]);


    }
}
