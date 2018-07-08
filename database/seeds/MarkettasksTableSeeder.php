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

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 2,
         'task_name'=>'task 1 for goal 2',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 3,
         'task_name'=>'task 1 for goal 3',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 4,
         'task_name'=>'task 1 for goal 4',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 5,
         'task_name'=>'task 1 for goal 5',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 6,
         'task_name'=>'task 1 for goal 6',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 7,
         'task_name'=>'task 1 for goal 7',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 8,
         'task_name'=>'task 1 for goal 8',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 9,
         'task_name'=>'task 1 for goal 9',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 10,
         'task_name'=>'task 1 for goal 10',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 11,
         'task_name'=>'task 1 for goal 11',
         'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 12,
         'task_name'=>'task 1 for goal 12',
         'category_id_1'=>12
             ]);

          DB::table('markettasks')->insert([
          'created_at' => Carbon\Carbon::now()->toDateTimeString(),
          'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
          'marketplacegoal_id'=> 13,
          'task_name'=>'task 1 for goal 13',
          'category_id_1'=>12
             ]);

         DB::table('markettasks')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id'=> 14,
         'task_name'=>'task 1 for goal 14',
         'category_id_1'=>12
             ]);

          DB::table('markettasks')->insert([
          'created_at' => Carbon\Carbon::now()->toDateTimeString(),
          'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
          'marketplacegoal_id'=> 15,
          'task_name'=>'task 1 for goal 15',
          'category_id_1'=>12
             ]);

    }
}
