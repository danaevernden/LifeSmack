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
       $user = \App\User::firstOrCreate(['email' => 'jane@harvard.edu']);
       $user->created_at = Carbon\Carbon::now()->toDateTimeString();
       $user->updated_at = Carbon\Carbon::now()->toDateTimeString();
       $user->id = '1';
       $user->email = 'jane@harvard.edu';
       $user->first_name = 'Jane Doe';
       $user->password = \Hash::make('helloworld');
       $user->save();

    }
}
