<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('goals', function (Blueprint $table) {

     $table->increments('id')->unsigned();
     $table->timestamps();

     # The rest of the fields...
     $table->string('goal_name');
     $table->date('goal_due_date')->nullable();
     $table->integer('category_id_1')->nullable();
     $table->integer('category_id_2')->nullable();
     $table->integer('category_id_3')->nullable();
     $table->integer('user_id')->nullable();
   });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('goals');
    }
}
