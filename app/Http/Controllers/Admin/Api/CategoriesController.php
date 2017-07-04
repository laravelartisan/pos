<?php

namespace App\Http\Controllers\Admin\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    public function init()
    {
        return response()->json([
            'init'=>'init'
        ]);
    }
}
