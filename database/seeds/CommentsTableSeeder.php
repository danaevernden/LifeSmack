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
      DB::table('comments')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'text' => 'need to ask ryan.',
     'task_id' => 1
   ]);


       DB::table('comments')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'text' => 'read article about time on feet',
      'task_id' => 2
    ]);


    DB::table('comments')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'text' => 'decide what to remove from MVP',
    'task_id' => 3
    ]);

      DB::table('comments')->insert([
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'text' => 'get Add Tasks button to work on back end',
    'task_id' => 4
    ]);



    }
}
