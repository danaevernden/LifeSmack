<?php

use Illuminate\Database\Seeder;

class MarkettasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
          DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 1,
         'parent_task'=>null,
         'task_type'=>'task',
         'task_name'=>'bit writing',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
          DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 2,
         'parent_task'=>null,
         'task_type'=>'task',
         'task_name'=>'performing',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
          DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 3,
         'parent_task'=>null,
         'task_type'=>'task',
         'task_name'=>'getting gigs',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);


         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
         DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 4,
         'parent_task'=>null,
         'task_type'=>'task',
         'task_name'=>'write a bit about a topic that makes you laugh uncontrollably whenever you think about it',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
         DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 5,
         'parent_task'=>2,
         'task_type'=>'supplemental',
         'task_name'=>'video: setting up your first performance',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
         DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 6,
         'parent_task'=>3,
         'task_type'=>'task',
         'task_name'=>'cold call your favorite bar and ask them about open mic nights',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);

         $goal_id = \App\Marketplace::where('goal_id','=',1)->pluck('id');
         DB::table('tasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'goal_id'=> 1,
         'task_id'=> 7,
         'parent_task'=>3,
         'task_type'=>'supplemental',
         'task_name'=>'video: joan rivers first gigs',
         'complete'=>false,
         'scheduled' => null
         /*to add next - task notes - may need to make another table*/
             ]);

    }
}
