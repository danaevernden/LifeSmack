<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable07092017 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('comments', function (Blueprint $table) {

     # Increments method will make a Primary, Auto-Incrementing field.
     # Most tables start off this way
     $table->increments('id');

     # This generates two columns: `created_at` and `updated_at` to
     # keep track of changes to a row
     $table->timestamps();

     # The rest of the fields...

     $table->string('comment_text');
     $table->integer('goal_id')->unsigned();
   });
     Schema::table('comments', function($table) {
      $table->foreign('task_id')->references('id')->on('tasks'); #fix this
    });

  }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('commentsByTask', function (Blueprint $table) {
          # ref: http://laravel.com/docs/5.1/migrations#dropping-indexes
          # combine tablename + fk field name + the word "foreign"
          $table->dropForeign('comments_task_id_foreign');
          $table->dropColumn('task_id');
          });
        Schema::drop('comments');
    }
}
