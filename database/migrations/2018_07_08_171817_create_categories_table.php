<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('categories', function (Blueprint $table) {

     # Increments method will make a Primary, Auto-Incrementing field.
     # Most tables start off this way
     $table->increments('id')->unsigned();

     # This generates two columns: `created_at` and `updated_at` to
     # keep track of changes to a row
     $table->timestamps();

     # The rest of the fields...

     $table->integer('parent_cat')->nullable();
     $table->string('text');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::drop('categories');

    }
}
