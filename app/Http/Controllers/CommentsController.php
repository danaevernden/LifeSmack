<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getIndex() {
    return array(
      array("comment_id"=> 1,
            "task_id"=> 1,
            "text"=>"need to ask ryan"),
      array("comment_id"=> 2,
            "task_id"=> 3,
            "text" => "check out this link"),
      array("comment_id"=> 3,
            "task_id"=> 4,
            "text" => "watch on train")
    );}

}
