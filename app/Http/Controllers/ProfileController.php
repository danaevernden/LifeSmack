<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getIndex() {
    return array(
      array("first_name"=> "Jane",
            "last_name"=> "Doe",
            "city"=>"New York",
            "region"=> "New York",
            "country"=> "USA")
          );}
}
