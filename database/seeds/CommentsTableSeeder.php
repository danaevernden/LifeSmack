<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $task_id = \App\Task::where('task_id','=',1)->pluck('id');
      DB::table('comments')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'comment_text' => 'need to ask ryan.',
     'task_id' => 1,
     'comment_id' => 1
   ]);


      $task_id = \App\Task::where('task_id','=',3)->pluck('id');
       DB::table('comments')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'comment_text' => 'check out this link',
      'task_id' => 3,
      'comment_id' => 2
    ]);


   $task_id = \App\Task::where('task_name','=',1)->pluck('id');
    DB::table('comments')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'comment_text' => 'second line of comment',
    'task_id' => 1,
    'comment_id' => 4
    ]);

   $task_id = \App\Task::where('task_name','=',4)->pluck('id');
    DB::table('comments')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'comment_text' => 'watch on train',
    'task_id' => 4,
    'comment_id' => 3
    ]);



    }
}
