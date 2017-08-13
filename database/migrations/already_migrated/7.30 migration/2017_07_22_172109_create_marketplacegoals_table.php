<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarketplacegoalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('marketplacegoals', function (Blueprint $table) {

     $table->increments('id');
     $table->timestamps();

     # The rest of the fields...
     $table->string('name');
     $table->integer('specialist_id');
     $table->string('goal_name');
     $table->integer('rating')->nullable();
     $table->integer('category_id_1')->nullable();
     $table->string('plan_description');
     $table->boolean('favorite');
   });
  }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('marketplacegoals');
    }
}
