<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class userController extends Controller
{
    //

    function loginCheck(Request $request)
    {

        $user=User::where([['email',$request->email],['password',$request->password]])->get();
          
        return $user;


    }
}
