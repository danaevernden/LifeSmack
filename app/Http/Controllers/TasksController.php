<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasksController extends Controller
{
  class GoalsController extends Controller
  {
    public function __construct() {
        # Put anything here that should happen before any of the other actions
    }


    /**
     * Responds to requests to GET /goals/{id}/tasks
     */
     public function getIndex() {
         $tasks = \App\Task::with('goal')->get();
         return view('goaltemplates.show')->with(
         ['tasks'=>$tasks]);
       }

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
