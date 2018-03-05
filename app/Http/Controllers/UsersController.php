<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
  public function __construct() {
      # Put anything here that should happen before any of the other actions
  }

  public function getUser($user_id) {
  $users = \App\User::where('id','=',$user_id)->get();
  return $users;
  }

  public function getUsersAll() {
  $users = \App\User::all();
  return $users;
  }

  public function editUser(Request $request) {
  $data = $request->json()->all();
  $user_id = 1;
  $user = \App\User::find($user_id);
  $user->first_name = $data['first_name'];
  $user->city = $data['city'];
  $user->city = $data['state'];
  $user->city = $data['country'];
  $user->save();
  //return Response::json($user);
  }
}
