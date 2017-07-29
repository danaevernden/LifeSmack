<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('reviews', function (Blueprint $table) {

     # Increments method will make a Primary, Auto-Incrementing field.
     # Most tables start off this way
     $table->increments('id');

     # This generates two columns: `created_at` and `updated_at` to
     # keep track of changes to a row
     $table->timestamps();

     # The rest of the fields...
     $table->string('name');
     $table->string('review');
     $table->integer('helpful');
     $table->integer('rating');
     $table->integer('marketplace_id')->unsigned();


   });
     Schema::table('reviews', function($table) {
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
      Schema::table('reviews', function (Blueprint $table) {
          # ref: http://laravel.com/docs/5.1/migrations#dropping-indexes
          # combine tablename + fk field name + the word "foreign"
          $table->dropForeign('reviews_marketplace_id_foreign');
          $table->dropColumn('marketplace_id');
          });
        Schema::drop('reviews');
    }
}
