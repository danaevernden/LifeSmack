<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConnectCommentsTasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

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
    
    }
}
