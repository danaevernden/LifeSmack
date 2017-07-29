<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoalsTable07092017 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('goals', function (Blueprint $table) {

     $table->increments('id');
     $table->timestamps();

     # The rest of the fields...
     $table->string('goal_name');
     $table->date('goal_due_date');
     #want to add image here

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
