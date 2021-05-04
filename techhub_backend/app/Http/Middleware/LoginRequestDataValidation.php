<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LoginRequestDataValidation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

            $request->validate([
                'email'=>'required',
                'email'=>'required | min:8'
                

            ]);
           return $next($request);
    }
}
