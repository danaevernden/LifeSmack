<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GoalsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getIndexOld() {
    return array(
      array("goal_id"=> 1,
            "goal_name"=> "build lifesmack",
            "due_date" =>  "2017-04-03T18:25:43.511Z"),
            #add image eventually
      array("goal_id"=> 2,
            "goal_name"=> "run 2017 NYC Marathon",
            "due_date" =>  "2017-04-03T18:25:43.511Z")
    );}

    public function getIndex() {
  /*   return $this->tasks; */
    $goals = \App\Goal::all();
      return $goals;
    }

}
