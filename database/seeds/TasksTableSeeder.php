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
         $goal_id = \App\Goal::where('id','=',1)->pluck('id');
          DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 3,
         'parent_task'=>null,
         'category_id_1'=> null,
         'category_id_2'=> null,
         'category_id_3'=> null,
         'task_name'=>'app MVP',
         'complete'=>false,
         'scheduled' => Carbon\Carbon::createFromDate(2017,2,15)->toDateTimeString()
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Goal::where('id','=',1)->pluck('id');
         DB::table('tasks')->insert([
        'created_at' => Carbon\Carbon::now()->toDateTimeString(),
        'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
        'goal_id'=> 3,
        'parent_task'=> 5,
        'category_id_1'=> 2,
        'category_id_2'=> 8,
        'category_id_3'=> null,
        'task_name'=> 'complete framework for site',
        'complete'=> true,
        'scheduled'=> Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
      ]);

        $goal_id = \App\Goal::where('id','=',1)->pluck('id');
        DB::table('tasks')->insert([
       'created_at' => Carbon\Carbon::now()->toDateTimeString(),
       'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
       'goal_id'=> 3,
       'parent_task'=> 5,
       'category_id_1'=> 4,
       'category_id_2'=> 7,
       'category_id_3'=> null,
       'task_name' => 'build out UI',
       'complete'=> false,
       'scheduled'=>Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
     ]);

     $goal_id = \App\Goal::where('id','=',1)->pluck('id');
     DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 3,
    'parent_task'=> 5,
    'category_id_1'=> 3,
    'category_id_2'=> 6,
    'category_id_3'=> null,
    'task_name'=> 'add clear button to newsfeed',
    'complete'=> false,
    'scheduled'=> null
    ]);

    $goal_id = \App\Goal::where('id','=',1)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 3,
    'parent_task'=> 6,
    'category_id_1'=> 1,
    'category_id_2'=> null,
    'category_id_3'=> null,
    'task_name'=> 'video: running form with Meb',
    'complete'=> false,
    'scheduled'=> Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
    ]);


    $goal_id = \App\Goal::where('id','=',2)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 4,
    'parent_task'=> null,
    'category_id_1'=> 2,
    'category_id_2'=> null,
    'category_id_3'=> null,
    'task_name'=> 'running education',
    'complete'=> false,
    'scheduled'=> null
    ]);

    $goal_id = \App\Goal::where('id','=',2)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 4,
    'parent_task'=> null,
    'category_id_1'=> 2,
    'category_id_2'=> null,
    'category_id_3'=> null,
    'task_name'=> 'charge garmin before run',
    'complete'=> false,
    'scheduled'=> null
    ]);
    }
}
