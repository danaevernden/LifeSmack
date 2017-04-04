<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsfeedController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  /**
  * Responds to requests to homepage
  */
  public function getIndex() {
    return array(array("task_num"=>"1", "name"=>"Jane Doe",
    "task"=> "completed framework for site", "likes"=>2),
    array("task_num"=>"2", "name"=>"John Smith",
    "task"=> "ran 10 miles", "likes"=>23)
  );
  }

  public function getArray() {
    return $tasks = \App\Task::with('goal')->get();
  }
}
