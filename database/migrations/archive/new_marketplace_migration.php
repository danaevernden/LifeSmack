<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarketplaceTable07092017 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('marketplace', function (Blueprint $table) {

     $table->increments('id');
     $table->timestamps();

     # The rest of the fields...
     $table->string('name');
     $table->integer('specialist_id');
     $table->string('goal_name');
     $table->integer('rating');
     $table->string('plan_description');
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
        Schema::drop('marketplace');

    }
}
