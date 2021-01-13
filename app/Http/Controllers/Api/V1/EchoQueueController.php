<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EchoQueueController extends Controller
{
    public function runQueue(Request $request)
    {
        $loop = 10;
        foreach (range(0, $loop) as $index) {
            \App\Jobs\QueueProcess::dispatch($index);
        }
        return response([
            'count' => $loop
        ], 200);
    }

    public function runEcho(Request $request)
    {
        $loop = 5;
        foreach (range(0, $loop) as $index) {
            \App\Jobs\EchoProcess::dispatch($index);
        }
        return response([
            'count' => $loop
        ], 200);
    }
}
