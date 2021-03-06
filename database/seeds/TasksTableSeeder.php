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
         'goal_id'=> 1,
         'task_id'=>1,
         'category_id_1'=> null,
         'category_id_2'=> null,
         'category_id_3'=> null,
         'task_name'=>'app MVP',
         'parent_id'=> null,
         'is_child'=> 0,
         'complete'=>0,
         'scheduled' => Carbon\Carbon::createFromDate(2017,2,15)->toDateTimeString()
             ]);


         $goal_id = \App\Goal::where('id','=',1)->pluck('id');
         DB::table('tasks')->insert([
        'created_at' => Carbon\Carbon::now()->toDateTimeString(),
        'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
        'goal_id'=> 1,
        'task_id'=> 2,
        'category_id_1'=> 2,
        'category_id_2'=> 8,
        'category_id_3'=> 9,
        'task_name'=> 'complete framework for site',
        'parent_id'=> 1,
        'is_child'=> 1,
        'complete'=> 0,
        'scheduled'=> Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
      ]);

        $goal_id = \App\Goal::where('id','=',1)->pluck('id');
        DB::table('tasks')->insert([
       'created_at' => Carbon\Carbon::now()->toDateTimeString(),
       'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
       'goal_id'=> 1,
       'task_id'=> 3,
       'category_id_1'=> 4,
       'category_id_2'=> 7,
       'category_id_3'=> 9,
       'task_name' => 'build out UI',
       'parent_id'=> 1,
       'is_child'=> 1,
       'complete'=> 0,
       'scheduled'=>Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
     ]);

     $goal_id = \App\Goal::where('id','=',1)->pluck('id');
     DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 1,
    'task_id'=> 4,
    'category_id_1'=> 3,
    'category_id_2'=> 6,
    'category_id_3'=> 9,
    'task_name'=> 'add clear button to newsfeed',
    'parent_id'=> 1,
    'is_child'=> 1,
    'complete'=> 0,
    'scheduled'=> null
    ]);

    $goal_id = \App\Goal::where('id','=',2)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 2,
    'task_id'=> 5,
    'category_id_1'=> null,
    'category_id_2'=> null,
    'category_id_3'=> null,
    'task_name'=> 'running education',
    'parent_id'=> null,
    'is_child'=> 1,
    'complete'=> 0,
    'scheduled'=> null
    ]);

    $goal_id = \App\Goal::where('id','=',1)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 2,
    'task_id'=> 6,
    'category_id_1'=> 1,
    'category_id_2'=> 8,
    'category_id_3'=> 10,
    'task_name'=> 'video: running form with Meb',
    'parent_id'=> 5,
    'is_child'=> 1,
    'complete'=> 0,
    'scheduled'=> Carbon\Carbon::createFromDate(2017,1,31)->toDateTimeString()
    ]);

    $goal_id = \App\Goal::where('id','=',2)->pluck('id');
    DB::table('tasks')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_id'=> 2,
    'task_id'=> 7,
    'category_id_1'=> 2,
    'category_id_2'=> 9,
    'category_id_3'=> 9,
    'task_name'=> 'charge garmin before run',
    'parent_id'=>null,
    'is_child'=> 0,
    'complete'=> 0,
    'scheduled'=> null
    ]);
    }
}
