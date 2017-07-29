<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoriesController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }


  public function getIndexOld() {
    return array(
      array("category_id"=> 4,
            "goal_id"=> 1,
            "parent_cat"=>null,
            "text" => "project task type"),
      array("category_id"=> 1,
            "goal_id"=> 1,
            "parent_cat"=> 4,
            "text" => "UI"),
      array("category_id"=>2,
            "goal_id"=>1,
            "parent_cat"=>4,
            "text"=>"back end"),
      array("category_id"=>3,
            "goal_id"=>1,
            "parent_cat"=>4,
            "text"=>"user testing"),
      array("category_id"=>5,
            "goal_id"=>1,
            "parent_cat"=>null,
            "text"=>"effort estimation"),
      array("category_id"=>6,
            "goal_id"=>1,
            "parent_cat"=>5,
            "text"=>"low"),
      array("category_id"=>7,
            "goal_id"=>1,
            "parent_cat"=>5,
            "text"=>"medium"),
      array("category_id"=>8,
            "parent_cat"=>5,
            "goal_id"=>1,
            "text"=>"high"),
      array("category_id"=> 10,
            "goal_id"=> 1,
            "parent_cat"=>null,
            "text" => "test cat"),
      array("category_id"=> 11,
            "goal_id"=> null,
            "parent_cat"=>null,
            "text" => "task type"),
      array("category_id"=> 12,
            "goal_id"=> null,
            "parent_cat"=> 11,
            "text" => "supplemental"),
      array("category_id"=>13,
            "goal_id"=>null,
            "parent_cat"=>11,
            "text"=>"task"),
    );}

    public function getIndex() {
  /*   return $this->tasks; */
    $categories = \App\Category::all();
      return $categories;
    }


}
