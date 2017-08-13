<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MarketplacegoalsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getMarketgoalsWithTasks() {
  $goals = \App\Marketplacegoal::with('markettask')->get();
  return $goals;
  }

  public function getAllMarketgoals() {
  $goals = \App\Marketplacegoal::all();
  return $goals;
  }

}

/*

  public function getIndexOld() {
    return array(
      array("goal_id"=> 1,
            "name"=> "Joan Rivers",
            "specialist_id"=>1,
            "goal_name"=> "Get your first gig as a comedian",
            "rating"=> 2,
            "plan_description"=> "weeks 1-3: bit writing, weeks 4-6: performing with friends, weeks 7-9: hustling for your first gig",
            "image"=>"https://i.ytimg.com/vi/O4EyvdTTnWY/maxresdefault.jpg"
            ),
      array("goal_id"=> 2,
            "name"=> "Meb",
            "specialist_id"=> 2,
            "goal_name"=> "PR on your next 10K race",
            "rating"=> 4,
            "plan_description" => "week 1: 2 mi tempo, 3 mi run, 2 mi easy. week 2: 1 mi speedwork, 4 mi easy, 2 mi run",
            "image"=> "http://www.blogcdn.com/slideshows/images/slides/255/643/9/S2556439/slug/l/118th-boston-marathon-1.jpg"
            ),
      array("goal_id"=> 3,
            "name"=> "David Ortiz",
            "specialist_id"=> 3,
            "goal_name"=> "Tips on improving your batting average",
            "rating"=> 3,
            "plan_description"=> "watch David Ortiz discuss his secrets for improving his batting average",
            "image"=>"http://mediad.publicbroadcasting.net/p/shared/npr/201312/241567553.jpg"
          )
          );}
*/
