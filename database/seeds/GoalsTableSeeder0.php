<?php

use Illuminate\Database\Seeder;

class PoolDataSeeder extends Seeder {

	public function run()
	{
		DB::table('pools')->delete();
		DB::table('pooloptions')->delete();


    Goal::create(array('created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_name' => 'Build LifeSmack',
    'order_id' => 1,
    'status_id' => 1,
    'parent_goal_id' => 0,
     'goal_due_date' => Carbon\Carbon::createFromDate(2017,12,31)->toDateTimeString(),
    'life_area' => 'personal_growth'));

    $goal2 = Goal::create(array('created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
    'goal_name' => 'Qualify for NYC marathon',
    'order_id' => 2,
    'status_id' => 1,
    'parent_goal_id' => 0,
    'goal_due_date' => Carbon\Carbon::createFromDate(2017,10,31)->toDateTimeString(),
    'life_area' => 'fitness'));

	}

}
