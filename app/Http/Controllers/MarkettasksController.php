<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MarkettasksController extends Controller
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
                  "task_id"=> 1,
                  "parent_task"=>null,
                  "task_type"=>"task",
                  "task_name"=>"bit writing",
                  "complete"=>false,
                  "scheduled"=> null),
            array("goal_id"=> 1,
                  "task_id"=> 2,
                  "parent_task"=> null,
                  "task_type"=> "task",
                  "task_name"=> "performing",
                  "complete"=> false,
                  "scheduled"=>  null),
            array("goal_id"=> 1,
                  "task_id"=> 3,
                  "parent_task"=> null,
                  "task_type"=> "task",
                  "task_name"=> "getting gigs",
                  "complete"=> false,
                  "scheduled"=> null),
            array("goal_id"=> 1,
                  "task_id"=> 4,
                  "parent_task"=> 1,
                  "task_type"=> "task",
                  "task_name"=> "write a bit about a topic that makes you laugh uncontrollably whenever you think about it",
                  "complete"=> false,
                  "scheduled"=> null),
            array("goal_id"=> 1,
                  "task_id"=> 5,
                  "parent_task"=> 2,
                  "task_type"=> "supplemental",
                  "task_name"=> "video: setting up your first performance",
                  "complete"=> false,
                  "scheduled"=> null),
            array("goal_id"=> 1,
                  "task_id"=> 6,
                  "parent_task"=> 3,
                  "task_type"=> "task",
                  "task_name"=> "cold call your favorite bar and ask them about open mic nights",
                  "complete"=> false,
                  "scheduled"=> null),
            array("goal_id"=> 1,
                  "task_id"=> 7,
                  "parent_task"=> 3,
                  "task_type"=> "supplemental",
                  "task_name"=> "video: Joan River's first gigs",
                  "complete"=> false,
                  "scheduled"=> null),
            array("goal_id"=> 2,
                  "task_id"=> 8,
                  "parent_task"=> null,
                  "task_type"=> "task",
                  "task_name"=> "batting practice",
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
