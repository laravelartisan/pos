<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{


    public function index()
    {
        $pageInfo = [
            'breadcrumb' => 'Dashboard',
            'title' => 'reports & statistics',
        ];
        return view('backend.index')->with($pageInfo);
    }


}
