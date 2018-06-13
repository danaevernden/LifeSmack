<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Response;
use App\Goal;

class GoalsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

    public function getAllGoals() {
    $goals = \App\Goal::all();
    return $goals;
    }

    public function getOneGoal($goal_id) {
    $goals = \App\Goal::where('id','=',$goal_id)->get();
    return $goals;
    }

    public function postGoal(Request $request) {
    $data = $request->json()->all();
    $goal = new \App\Goal();
    $goal->goal_name = $data['goal_name'];
    $goal->goal_due_date = Carbon::now()->toDateTimeString();
    $goal->category_id_1 = $data['category_id_1'];
    $goal->save();
    return Response::json($goal);
    }

    public function deleteGoal($goalId) {
    $goal = \App\Goal::find($goalId);
    $goal->delete();
    return response('deleted goal', 204);
    }

}

/*
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
    */
