<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function __construct() {
        # Put anything here that should happen before any of the other actions
    }


    /**
     * Responds to requests to GET /goals/{id}/tasks
     */
    /* public function getIndex() {
         $tasks = \App\Task::with('goal')->get();
         return view('goaltemplates.show')->with(
         ['tasks'=>$tasks]);
       }
*/
        public function getIndex() {
          return array(
            array("goal_id"=> 1,
                  "task_id"=> 5,
                  "parent_task"=>null,
                  "task_type"=>"task",
                  "task_name"=>"app MVP",
                  "complete"=>false,
                  "scheduled"=>  "2017-04-03T18:25:43.511Z"),
            array("goal_id"=> 1,
                  "task_id"=> 1,
                  "parent_task"=> 5,
                  "category_id_1"=> 2,
                  "category_id_2"=> 8,
                  "task_type"=> "task",
                  "task_name"=> "complete framework for site",
                  "complete"=> true,
                  "scheduled"=>  "2017-05-02T18:25:43.511Z"),
            array("goal_id"=> 1,
                  "task_id"=> 1,
                  "parent_task"=> 5,
                  "category_id_1"=> 4,
                  "category_id_2"=> 7,
                  "task_type"=> "task",
                  "task_name"=> "build out UI",
                  "complete"=> false,
                  "scheduled"=> "2017-05-02T18:25:43.511Z"),
            array("goal_id"=> 1,
                  "task_id"=> 3,
                  "parent_task"=> 5,
                  "category_id_1"=> 3,
                  "category_id_2"=> 6,
                  "task_type"=> "task",
                  "task_name"=> "add clear button to newsfeed",
                  "complete"=> false,
                  "scheduled"=> null),
            array("goal_id"=> 2,
                  "task_id"=> 4,
                  "parent_task"=> 6,
                  "category_id_1"=> 1,
                  "category_id_2"=> null,
                  "task_type"=> "supplemental",
                  "task_name"=> "video: running form with Meb",
                  "complete"=> false,
                  "scheduled"=> "2017-03-31T18:25:43.511Z"),
            array("goal_id"=> 2,
                  "task_id"=> 6,
                  "parent_task"=> null,
                  "category_id_1"=> 2,
                  "category_id_2"=> null,
                  "task_type"=> "task",
                  "task_name"=> "running education",
                  "complete"=> false,
                  "scheduled"=> null),
              );}


    /**
     * Responds to requests to GET /goals/{id}/create
     */
    public function getCreate() {
        return 'Form to create a new task';
    }

    /**
     * Responds to requests to POST /goals/{id}/create
     */
    public function postCreate() {
        return 'Process adding new task';
    }
}
