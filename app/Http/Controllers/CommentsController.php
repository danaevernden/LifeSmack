<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getIndexOld() {
    return array(
      array("comment_id"=> 1,
            "task_id"=> 1,
            "text"=>"need to ask ryan"),
      array("comment_id"=> 2,
            "task_id"=> 3,
            "text" => "check out this link"),
      array("comment_id"=> 4,
            "task_id"=> 1,
            "text" => "second line of comment"),
      array("comment_id"=> 3,
            "task_id"=> 4,
            "text" => "watch on train")
    );}

    public function getIndex() {
  /*   return $this->tasks; */
    $comment = \App\Comment::all();
      return $comment;
    }


}
