<?php

namespace App\Http\Middleware;

use Closure;
use Response;

class Cors
{
     public function handle($request, Closure $next)
     {
        header("Access-Control-Allow-Origin: *");

       $headers = [
         'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
         'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin, Authorization'
       ];

       if($request->method() == "OPTIONS") {
         // The client-side application can set only headers allowed in Access-Control-Allow-Headers
         return Response::make('OK', 200, $headers);
       }

       $response = $next($request);
        foreach($headers as $key => $value)
          $response->header($key, $value);

        return $response;
     }
}
