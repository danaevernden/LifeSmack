<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable1142017 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('tasks', function (Blueprint $table) {

     # Increments method will make a Primary, Auto-Incrementing field.
     # Most tables start off this way
     $table->increments('id');

     # This generates two columns: `created_at` and `updated_at` to
     # keep track of changes to a row
     $table->timestamps();

     # The rest of the fields...
     $table->string('task_name');
     $table->integer('status_id');
     $table->integer('order_id');
     $table->integer('priority_id');
     $table->integer('archived_flag');
     $table->date('task_due_date');
     $table->integer('goal_id')->unsigned();
   });
     Schema::table('tasks', function($table) {
      $table->foreign('goal_id')->references('id')->on('goals');
    });

  }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('tasks', function (Blueprint $table) {
          # ref: http://laravel.com/docs/5.1/migrations#dropping-indexes
          # combine tablename + fk field name + the word "foreign"
          $table->dropForeign('tasks_goal_id_foreign');
          $table->dropColumn('goal_id');
          });
        Schema::drop('tasks');
    }
}
