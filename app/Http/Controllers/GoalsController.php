<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GoalsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }



    public function getIndex() {
      return array(
        array("goal_id"=> 1,
              "goal_name"=> "build Lifesmack",
              "image"=> "images/LogoSmallCondensed.jpg"),
        array("goal_id"=> 2,
              "goal_name" => "run 2017 NYC marathon",
              "image" => "images/LogoSmallCondensed.jpg")
      );}


  /**
  * Responds to requests to homepage
  */
  //insert a goal
      public function create(Request $request) {
      	$goal = $request->input('goal');
      	$newGoal = new Goal;
      	$newGoal->goal = $goal;
      	$newGoal->save();
      }
      //retrieve all goals
      public function getall() {
      	return Goal::all();
      }
      //delete a specific goal
      public function delete(Request $request) {
      	$id = $request->input('id');
      	$spec = Goal::find($id);
      	$spec->delete();
      }
      //edit a goal
      public function edit(Request $request) {
      	$id = $request->input('id');
      	$editedgoal = $request->input('goal');
      	$spec = Goal::find($id);
      	$spec->goal = $editedgoal;
      	$spec->save();
      }





/*******************************old******************************/
/*
  public function getIndex() {
    $goals = \App\Goal::orderBy('id','DESC')->get();
      return view('goals.index')->with(['goals'=>$goals]);
  }
*/
  public function getshow($id = null) {
    $goals = \App\Goal::where('id','=',$id)->get();
    $tasks = \App\Task::where('goal_id','=',$id)->get();
    $comments = \App\Comment::orderBy('id','DESC')->get();
    return view('goals.getShow')->with(['tasks'=>$tasks,'goals'=>$goals, 'comments'=>$comments]);
  }

  /**
   * Responds to requests to GET /goals/create
   */
  public function getCreate() {
      return view('goals.create');
  }

  /**
   * Responds to requests to POST /goals/create
   */
  public function postCreate() {
      return view('goals.create');
  }
}
