<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkettasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('markettasks', function (Blueprint $table) {

     $table->increments('id');
     $table->timestamps();

     # The rest of the fields...
     $table->string('task_name');
     $table->integer('parent_task');
     $table->integer('marketplace_id')->unsigned();

#connect this to marketplace table and remove it

    });

   Schema::table('markettasks', function($table) {
    $table->foreign('marketplace_id')->references('id')->on('marketplace');
    });
  }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('marketTasksByTask', function (Blueprint $table) {
          # ref: http://laravel.com/docs/5.1/migrations#dropping-indexes
          # combine tablename + fk field name + the word "foreign"
          $table->dropForeign('markettasks_marketplace_id_foreign');
          $table->dropColumn('marketplace_id');
          });
        Schema::drop('markettasks');
    }
}
