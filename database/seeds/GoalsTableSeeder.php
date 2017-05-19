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
     'goal_id'=> 1,
     'goal_name'=> 'build Lifesmack',
     'image'=> '/public/images/running.jpg',
     'goal_due_date' => Carbon\Carbon::createFromDate(2017,12,31)->toDateTimeString()
  /*   'user_id' => $user_id */
         ]);

/*      $user_id = \App\User::where('name','=','Jamal Smith')->pluck('id');*/
       DB::table('goals')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'goal_id'=> 2,
      'goal_name'=> 'run 2017 NYC marathon',
      'image'=> '/public/images/running.jpg',
      'goal_due_date' => Carbon\Carbon::createFromDate(2017,10,31)->toDateTimeString(),
    /*  'user_id' => $user_id*/
      ]);


    }
}
