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
          DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>null,
         'task_name'=>'bit writing'
         /*to add next - task notes - may need to make another table*/
             ]);

          DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>null,
         'task_name'=>'performing'
         /*to add next - task notes - may need to make another table*/
             ]);

          DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>null,
         'task_name'=>'getting gigs'
         /*to add next - task notes - may need to make another table*/
             ]);


         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>null,
         'task_name'=>'write a bit about a topic that makes you laugh uncontrollably whenever you think about it'
         /*to add next - task notes - may need to make another table*/
             ]);

           DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>2,
         'task_name'=>'video: setting up your first performance'
         /*to add next - task notes - may need to make another table*/
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>3,
         'task_name'=>'cold call your favorite bar and ask them about open mic nights'
         /*to add next - task notes - may need to make another table*/
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplace_id'=> 1,
         'parent_task'=>3,
         'task_name'=>'video: joan rivers first gigs'
           /*to add next - task notes - may need to make another table*/
             ]);

    }
}
