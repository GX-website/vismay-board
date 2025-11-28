<?php 

namespace App\Http\Controllers;
use inertia\inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller 
{
    public function Jobs()
    {
        return inertia::render('dashboard/jobs', []);
    }
    public function Events()
    {
        return inertia::render('events/index', []);
    }
    public function Department()
    {
        return inertia::render('dashboard/department', []);
    }
    public function Applicants()
    {
        return inertia::render('dashboard/applicants', []);
    }
    public function Employees()
    {
        return inertia::render('dashboard/employees', []);
    }
}
