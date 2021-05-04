<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class userController extends Controller
{
    //

    function loginCheck(Request $request)
    {
          
        return $request->input();


    }
}
