<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  /**
  * Responds to requests to homepage
  */
  public function getIndex() {
      return view('about.show');
  }
}
