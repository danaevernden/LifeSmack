import { CALL_API } from 'redux-api-middleware';
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export const POST_TASK_REQUEST = 'POST_TASK_REQUEST';
export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
export const POST_TASK_FAILURE = 'POST_TASK_FAILURE';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1
export default function fetchTasks() {
    return {
      [CALL_API]: {
          endpoint: '/api/tasks',
          method: 'GET',
          types: [FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE]
      },
    };
}


export function deleteTask(taskId) {
  console.log("calling delete", taskId)
  return {
    [CALL_API]: {
      endpoint: `/api/task/delete/${taskId}`,
      method: 'DELETE',
      types: [DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE]
    },
  };
}

export function addTaskToGoal(taskname, catid1) {
  console.log("calling add", taskname, catid1)
  return {
    [CALL_API]: {
      endpoint: `/api/task/post`,
      method: 'POST',
      types: [POST_TASK_REQUEST, POST_TASK_SUCCESS, POST_TASK_FAILURE],
      body: JSON.stringify({
        task_name: taskname,
        category_id_1: catid1
      })
    },
  };
}
//taskName, dueDate
export function addTaskToGoalOld(taskId) {
console.log("why won't this work". taskId)
  return {
    [CALL_API]: {
      endpoint: `/api/task/post`,
      method: 'POST',
      types: [POST_TASK_REQUEST, POST_TASK_SUCCESS, POST_TASK_FAILURE],
      body: JSON.stringify({
        task_name: "testname",
        category_id_1: 1
                // dueDate: dueDate
      })
    },
  };
}
