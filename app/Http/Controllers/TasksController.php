<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Response;
use App\Task;
use Carbon\Carbon;

class TasksController extends Controller
{
   var $tasks = array(
   array("goal_id"=> 1,
         "task_id"=> 5,
         "parent_task"=>null,
         "category_id_3"=> 12,
         "task_name"=>"app MVP",
         "complete"=>false,
         "scheduled"=>  "2017-04-03T18:25:43.511Z"),
   array("goal_id"=> 1,
         "task_id"=> 1,
         "parent_task"=> 5,
         "category_id_1"=> 2,
         "category_id_2"=> 8,
         "category_id_3"=> 12,
         "task_name"=> "complete framework for site",
         "complete"=> true,
         "scheduled"=>  "2017-05-02T18:25:43.511Z"),
   array("goal_id"=> 1,
         "task_id"=> 2,
         "parent_task"=> 5,
         "category_id_1"=> 4,
         "category_id_2"=> 7,
         "category_id_3"=> 12,
         "task_name"=> "build out UI",
         "complete"=> false,
         "scheduled"=> "2017-05-02T18:25:43.511Z"),
   array("goal_id"=> 1,
         "task_id"=> 3,
         "parent_task"=> 5,
         "category_id_1"=> 3,
         "category_id_2"=> 6,
         "category_id_3"=> 12,
         "task_name"=> "add clear button to newsfeed",
         "complete"=> false,
         "scheduled"=> null),
   array("goal_id"=> 2,
         "task_id"=> 4,
         "parent_task"=> 6,
         "category_id_1"=> 1,
         "category_id_2"=> null,
         "category_id_3"=> 13,
         "task_name"=> "video: running form with Meb",
         "complete"=> false,
         "scheduled"=> "2017-03-31T18:25:43.511Z"),
   array("goal_id"=> 2,
         "task_id"=> 6,
         "parent_task"=> null,
         "category_id_1"=> 2,
         "category_id_2"=> null,
         "category_id_3"=> 12,
         "task_name"=> "running education",
         "complete"=> false,
         "scheduled"=> null),
     );

    public function __construct() {
        # Put anything here that should happen before any of the other actions
    }


    /**
     * Responds to requests to GET /goals/{id}/tasks
     */
    /* public function getIndex() {
         $tasks = \App\Task::with('goal')->get();
         return view('goaltemplates.show')->with(
         ['tasks'=>$tasks]);
       }
*/

        public function getIndex() {
      /*   return $this->tasks; */
        $tasks = \App\Task::all();
          return $tasks;
        }

        public function getIndexWithComments() {
      /*   return $this->tasks; */
        $tasks = \App\Task::with('comment')->get();
          return $tasks;
        }

        

        public function deleteTask($taskId) {
            $filterFunction =  function($task) use ($taskId) {
              return $task['task_id'] != $taskId;
            };
            return array_filter($this->tasks, $filterFunction);
          }

          public function deleteTaskPHP($taskId) {
              $task = \App\Task::find($taskId);
              $task->delete();
              return response('deleted task', 204);
            }

        public function postTask(Request $request) {
            $data = $request->json()->all();
            $task = new \App\Task();
            $task->task_name = $data['name'];
            $task->status_id = '1';
            $task->order_id = '1';
            $task->priority_id = '1';
            $task->archived_flag = '1';
            $task->task_due_date = Carbon::now()->toDateTimeString();
            $task->goal_id='1';
            $task->save();
            return Response::json($task);
        }

        public function getTasksTable(Request $request) {
            $tasks = \App\Task::all();
        }

    /**
     * Responds to requests to GET /goals/{id}/create
     */
    public function getCreate() {
        return 'Form to create a new task';
    }

    /**
     * Responds to requests to POST /goals/{id}/create
     */
    public function postCreate() {
        return 'Process adding new task';
    }
}
