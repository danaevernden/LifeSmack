<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoalsTable1142017 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('goals', function (Blueprint $table) {

     # Increments method will make a Primary, Auto-Incrementing field.
     # Most tables start off this way
     $table->increments('id');

     # This generates two columns: `created_at` and `updated_at` to
     # keep track of changes to a row
     $table->timestamps();

     # The rest of the fields...
     $table->string('goal_name');
     $table->integer('order_id');
     $table->date('goal_due_date');
     $table->integer('parent_goal_id'); /*for parent/child goals, not sure if this needs to be unsigned*/
     $table->integer('status_id');
     $table->string('life_area');

     # will add this later:
     # $table->integer('user_id')->unsigned();

   });
/*
   Schema::table('goals', function($table) {
    $table->foreign('user_id')->references('id')->on('users');*
  }); */
 }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      /*add this in when ready for users*/
  /*    Schema::table('goals', function (Blueprint $table) {
          # ref: http://laravel.com/docs/5.1/migrations#dropping-indexes
          # combine tablename + fk field name + the word "foreign"
          $table->dropForeign('goals_user_id_foreign');
          $table->dropColumn('user_id');
        });*/
        Schema::drop('goals');

    }
}
