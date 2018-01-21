<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Response;
use App\Task;
use Carbon\Carbon;

class TwilioController extends Controller
{
    public function getTwilio() {
        # Put anything here that should happen before any of the other actions
        return view('twilio.index');

}
}
