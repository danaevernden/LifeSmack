<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Response;
use App\Review;

class ReviewsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

    public function getAllReviews() {
    $review = \App\Review::all();
    return $review;
    }

    public function getReviewsPerMarketgoal($marketplacegoal_id) {
    $review = \App\Review::where('marketplacegoal_id','=',$marketplacegoal_id)->get();
    return $review;
    }

    public function postReview(Request $request) {
    $data = $request->json()->all();
    $review = new \App\Review();
    $review->name = $data['name'];
    $review->review = $data['name'];
    $review->helpful = '1';
    $review->rating = '1';
    $review->marketplacegoal_id='1';
    $review->save();
    return Response::json($review);
    }

    public function deleteReview($reviewId) {
    $review = \App\Review::find($reviewId);
    $review->delete();
    return response('deleted review', 204);
    }

}
/*
public function getIndexOld() {
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

*/
