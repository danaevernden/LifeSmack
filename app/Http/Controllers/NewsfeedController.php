<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsfeedController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  /**
  * Responds to requests to homepage
  */

  public function getArray() {
    return $tasks = \App\Task::with('goal')->get();
  }
}
