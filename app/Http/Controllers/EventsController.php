<?php

namespace App\Http\Controllers;
use inertia\inertia;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function Index()
    {
        return inertia::render('events/index', []);
    }
}
