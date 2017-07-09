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
            "goal_name"=> "build lifesmack"),
      array("goal_id"=> 2,
            "goal_name"=> "run 2017 NYC Marathon")
    );}

}
