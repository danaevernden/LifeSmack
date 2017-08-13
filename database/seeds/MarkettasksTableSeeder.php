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
         'marketplacegoal_id'=> 1,
         'task_name'=>'write a bit about a topic that makes you laugh uncontrollably whenever you think about it',
         'category_id_1'=>10

             ]);

           DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 1,
         'task_name'=>'video: setting up your first performance',
         'category_id_1'=>11
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 1,
         'task_name'=>'cold call your favorite bar and ask them about open mic nights',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 1,
         'task_name'=>'video: joan rivers first gigs',
         'category_id_1'=>12
             ]);

    }
}
