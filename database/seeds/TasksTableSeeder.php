<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     $goal_id = \App\Goal::where('goal_name','=','Build LifeSmack')->pluck('id');
      DB::table('tasks')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'task_name' => 'enable hover on buttons js',
     'status_id' => 1,
     'order_id' => 1,
     'priority_id'=>0,
     'archived_flag'=>0,
     'goal_id' => 1,/*
     'goal_id' => $goal_id,*/
     'task_due_date' => Carbon\Carbon::createFromDate(2017,2,15)->toDateTimeString()
     /*to add next - task notes - may need to make another table*/
         ]);


     $goal_id = \App\Goal::where('goal_name','=','Build LifeSmack')->pluck('id');
     DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'task_name' => 'get cordova running',
    'status_id' => 1,
    'order_id'=>2,
    'priority_id'=>0,
    'archived_flag'=>0,
    'goal_id'=>1,/*
    'goal_id' => $goal_id,*/
    'task_due_date' => Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()

  ]);

    $goal_id = \App\Goal::where('goal_name','=','Qualify for NYC marathon')->pluck('id');
    DB::table('tasks')->insert([
   'created_at' => Carbon\Carbon::now()->toDateTimeString(),
   'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
   'task_name' => 'volunteer for a race',
   'status_id' => 1,
   'order_id'=>1,
   'priority_id'=>0,
   'archived_flag'=>0,
   'goal_id' => 2,
/*   'goal_id' => $goal_id, can't get this to work*/
   'task_due_date' => Carbon\Carbon::createFromDate(2017,10,31)->toDateTimeString()

       ]);

    }
}
