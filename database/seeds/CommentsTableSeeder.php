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
      $task_id = \App\Task::where('task_name','=','enable hover on buttons js')->pluck('id');
      DB::table('comments')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'comment_text' => 'tried adding animation via hover.css, see files in js folder and new classes in css.',
     'task_id' => 1
   ]);

   $task_id = \App\Task::where('task_name','=','volunteer for a race')->pluck('id');
   DB::table('comments')->insert([
  'created_at' => Carbon\Carbon::now()->toDateTimeString(),
  'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
  'comment_text' => 'signed up to volunteer for brooklyn half in march, can opt out later',
  'task_id' => 3
]);

    }
}
