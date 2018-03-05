<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
/*
      DB::table('users')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'first_name'=> 'Joan',
     'last_name' => 'Rivers',
     'city' => 'New York City',
     'state' => 'NY',
     'country' => 'USA',
     'email' => 'jrivers@harvard.edu',
     'password' = \Hash::make('helloworld')

         ]);
*/
       $user = \App\User::firstOrCreate(['email' => 'jrivers@harvard.edu']);
       $user->created_at = Carbon\Carbon::now()->toDateTimeString();
       $user->updated_at = Carbon\Carbon::now()->toDateTimeString();
       $user->id = '1';
       $user->first_name = 'Jamal';
       $user->last_name = 'Smith';
       $user->city = 'New York';
       $user->state = 'NY';
       $user->country = 'USA';
       $user->email = 'jamal@harvard.edu';
       $user->password = \Hash::make('helloworld');
       $user->save();

    }
}
