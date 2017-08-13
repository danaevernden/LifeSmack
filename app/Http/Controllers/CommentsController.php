<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Response;
use App\Comment;

class CommentsController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

    public function getAllComments() {
    $comment = \App\Comment::all();
      return $comment;
    }

    public function postComment(Request $request) {
    $data = $request->json()->all();
    $comment = new \App\Comment();
    $comment->text = $data['name'];
    $comment->task_id = '1';
    $comment->save();
    return Response::json($comment);
    }

    public function deleteComment($commentId) {
    $comment = \App\Comment::find($commentId);
    $comment->delete();
    return response('deleted comment', 204);
    }

}

/*
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
*/
