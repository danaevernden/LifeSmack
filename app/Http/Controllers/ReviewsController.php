<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getIndex() {
    return array(
      array("goal_id"=> 1,
            "review_id"=> 1,
            "name"=>"Jane Doe",
            "review"=>"hilarious and fun to work on, I was able to book my own gig at the Comedy Cellar after!",
            "helpful"=>4,
            "rating"=>5
            ),
      array("goal_id"=> 1,
            "review_id"=> 2,
            "name"=>"Stacey Gray",
            "review"=>"could use a section on cross training, I had to define that myself",
            "helpful"=>3,
            "rating"=>3
            )
    );}

}
