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
         $goal_id = \App\Goal::where('goal_id','=',1)->pluck('id');
          DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 5,
         'parent_task'=>null,
         'task_type'=>'task',
         'task_name'=>'app MVP',
         'complete'=>false,
         'scheduled' => Carbon\Carbon::createFromDate(2017,2,15)->toDateTimeString()
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Goal::where('goal_id','=',1)->pluck('id');
         DB::table('tasks')->insert([
        'created_at' => Carbon\Carbon::now()->toDateTimeString(),
        'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
        'goal_id'=> 1,
        'task_id'=> 1,
        'parent_task'=> 5,
        'category_id_1'=> 2,
        'category_id_2'=> 8,
        'task_type'=> 'task',
        'task_name'=> 'complete framework for site',
        'complete'=> true,
        'scheduled'=> Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
      ]);

        $goal_id = \App\Goal::where('goal_id','=',1)->pluck('id');
        DB::table('tasks')->insert([
       'created_at' => Carbon\Carbon::now()->toDateTimeString(),
       'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
       'goal_id'=> 1,
       'task_id'=> 2,
       'parent_task'=> 5,
       'category_id_1'=> 4,
       'category_id_2'=> 7,
       'task_type'=> 'task',
       'task_name' => 'build out UI',
       'complete'=> false,
       'scheduled'=>Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
     ]);

     $goal_id = \App\Goal::where('goal_id','=',1)->pluck('id');
     DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 1,
    'task_id'=> 3,
    'parent_task'=> 5,
    'category_id_1'=> 3,
    'category_id_2'=> 6,
    'task_type'=> 'task',
    'task_name'=> 'add clear button to newsfeed',
    'complete'=> false,
    'scheduled'=> null
    ]);

    $goal_id = \App\Goal::where('goal_name','=','Build LifeSmack')->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 2,
    'task_id'=> 4,
    'parent_task'=> 6,
    'category_id_1'=> 1,
    'category_id_2'=> null,
    'task_type'=> 'supplemental',
    'task_name'=> 'video: running form with Meb',
    'complete'=> false,
    'scheduled'=> Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
    ]);

    $goal_id = \App\Goal::where('goal_id','=',2)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 2,
    'task_id'=> 6,
    'parent_task'=> null,
    'category_id_1'=> 2,
    'category_id_2'=> null,
    'task_type'=> 'task',
    'task_name'=> 'running education',
    'complete'=> false,
    'scheduled'=> null
    ]);
    }
}
