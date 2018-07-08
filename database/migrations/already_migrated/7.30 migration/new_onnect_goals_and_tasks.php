<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class ConnectGoalsAndTasks extends Migration
{
   public function up()
    {
#        Schema::table('wishes', function (Blueprint $table) {
            # Add a new INT field called `author_id` that has to be unsigned (i.e. positive)
            $table->integer('goal_id')->unsigned();
            # This field `author_id` is a foreign key that connects to the `id` field in the `authors` table
            $table->foreign('goal_id')->references('id')->on('goals');
#        });
    }
    public function down()
    {
#        Schema::table('wishes', function (Blueprint $table) {
            # ref: http://laravel.com/docs/5.1/migrations#dropping-indexes
            # combine tablename + fk field name + the word "foreign"
            $table->dropForeign('tasks_goal_id_foreign');
            $table->dropColumn('goal_id');
#        });
    }
}
