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


Route::get('/twilio', 'TwilioController@getTwilio');

Route::group(['prefix' => 'api'], function() {
	/*Route::get('/tasks/{goal_id}', 'TasksController@getTasksPerGoalWithComments');*/
/*	Route::get('/tasks/{goal_id}', 'TasksController@getTasksPerGoal');*/

	Route::get('/tasks', 'TasksController@getAllTasks');
	Route::post('/task/post', 'TasksController@postTask');
	Route::post('/task/edit/{task_id}', 'TasksController@editTask');
	Route::delete('/task/delete/{task_id}', 'TasksController@deleteTask');

	/*Route::post('/task/duplicate', 'TasksController@duplicateTask');
*/
	Route::get('/goals/{user_id}', 'GoalsController@getAllGoals');
/*	Route::get('/goals/{goal_id}', 'GoalsController@getOneGoal');
	Route::get('/taskswithcomments/{goal_id}', 'TasksController@getTasksPerGoalWithComments'); */
	Route::post('/goals/post', 'GoalsController@postGoal');
	Route::delete('/goal/delete/{goal_id}', 'GoalsController@deleteGoal');

	Route::get('/marketplacegoals', 'MarketplacegoalsController@getAllMarketgoals');

	/*Route::get('/markettasks/{marketplacegoal_id}', 'MarkettasksController@getMarkettasksperMarketgoal'); */
  Route::get('/markettasks', 'MarkettasksController@getAllMarkettasks');

	Route::get('/comments', 'CommentsController@getAllComments');
	Route::post('/comments', 'CommentsController@postComment');
	Route::delete('/comments/{comment_id}', 'CommentsController@deleteComment');

	/*Route::get('/categories/{goal_id}', 'CategoriesController@getCategoriesPerGoal');*/
	Route::get('/categories', 'CategoriesController@getAllCategories');
	Route::post('/categories', 'CategoriesController@postCategory');
	Route::delete('/categories/{category_id}', 'CategoriesController@deleteCategory');

	Route::get('/reviews', 'ReviewsController@getAllReviews');
/*	Route::get('/reviews/{marketplacegoal_id}', 'ReviewsController@getReviewsPerMarketgoal');*/

	Route::post('/reviews', 'ReviewsController@postReview');
	Route::delete('/reviews/{review_id}', 'ReviewsController@deleteReview');

	Route::get('/user/{user_id}', 'UsersController@getUser');
	Route::get('/user', 'UsersController@getUsersAll');
	Route::post('/user/edit/1', 'UsersController@editUser');
	Route::post('/user/post', 'UsersController@postUser');
});

/*for refreshing the database*/
if(App::environment('local')) {

    Route::get('/drop', function() {

        DB::statement('DROP database lifesmack');
        DB::statement('CREATE database lifesmack');

        return 'Dropped lifesmack; created lifesmack.';
    });


};
