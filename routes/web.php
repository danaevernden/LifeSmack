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

/*OOOOOOOOOOOOOOOOOOOOOOOOOOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDDDDDDDDDDDDDDDDDDDDDDDD*/

Route::get('/goal/create', 'GoalsController@PostCreate')->name('goals.create');
Route::get('/goal/{id?}', 'GoalsController@getshow');

Route::get('/goaltemplates','GoaltemplatesController@getIndex')->name('goaltemplates.show');

/*if not logged in*/
Route::get('/about', 'AboutController@getIndex')->name('about.show');
Route::get('/join', 'JoinController@getIndex')->name('join.create');

/*to add later*/
Route::get('/newsfeed', 'NewsfeedController@getIndex')->name('newsfeed.show');
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
