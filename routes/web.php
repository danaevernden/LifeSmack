<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
View::addExtension('html', 'php');
/*if logged in*/
Route::get('/', function() {
	return view('OnePage');
});

Route::get('/OnePage/test', function() {
	return view('OnePageTest');
});
Route::get('/test', function() {
	return view('ReactExample');
});

Route::get('/goals/all', 'Goalscontroller@getAll'); /*get all goals*/
Route::post('/goals/create', 'GoalController@create'); /*create goal*/
Route::post('/goals/delete', 'GoalController@delete'); /*delete goal*/
Route::post('/goals/edit', 'GoalController@edit'); /*edit goal*/


Route::group(['prefix' => 'api'], function() {
	Route::get('/tasks', 'TasksController@getIndex')->name('tasks.show');
	Route::get('/comments', 'CommentsController@getIndex')->name('comments.show');
	Route::get('/categories', 'CategoriesController@getIndex')->name('categories.show');
	Route::get('/goals', 'GoalsController@getIndex')->name('goals.show');
	Route::get('/marketplace', 'MarketplaceController@getIndex')->name('marketplace.show');
	Route::get('/reviews', 'ReviewsController@getIndex')->name('reviews.show');
	Route::get('/profile', 'ProfileController@getIndex')->name('profile.show');
	Route::get('/markettasks', 'MarkettasksController@getIndex')->name('markettasks.show');

});

Route::get('/newsfeed2', 'NewsfeedController@getArray')->name('newsfeed.create');

/*OOOOOOOOOOOOOOOOOOOOOOOOOOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDDDDDDDDDDDDDDDDDDDDDDDD*/

Route::get('/goal/create', 'GoalsController@PostCreate')->name('goals.create');
Route::get('/goal/{id?}', 'GoalsController@getshow');

Route::get('/goaltemplates','GoaltemplatesController@getIndex')->name('goaltemplates.show');

/*if not logged in*/
Route::get('/about', 'AboutController@getIndex')->name('about.show');
Route::get('/join', 'JoinController@getIndex')->name('join.create');

/*to add later*/
Route::get('/SmackIt','SmackitController@getIndex')->name('smackit.show');
Route::get('/account','AccountController@getIndex')->name('account.show');

/*for refreshing the database*/
if(App::environment('local')) {

    Route::get('/drop', function() {

        DB::statement('DROP database lifesmack');
        DB::statement('CREATE database lifesmack');

        return 'Dropped lifesmack; created lifesmack.';
    });


};
