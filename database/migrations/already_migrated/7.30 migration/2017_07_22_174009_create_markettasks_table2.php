<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConnectMarketgoalsMarkettasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


   Schema::table('markettasks', function($table) {
    $table->foreign('marketplacegoal_id')->references('id')->on('marketplacegoals');
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
