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

export const POST_DUP_TASK_REQUEST = 'POST_DUP_TASK_REQUEST';
export const POST_DUP_TASK_SUCCESS = 'POST_DUP_TASK_SUCCESS';
export const POST_DUP_TASK_FAILURE = 'POST_DUP_TASK_FAILURE';

export const POST_EDIT_TASK_REQUEST = 'POST_EDIT_TASK_REQUEST';
export const POST_EDIT_TASK_SUCCESS = 'POST_EDIT_TASK_SUCCESS';
export const POST_EDIT_TASK_FAILURE = 'POST_EDIT_TASK_FAILURE';
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

export function editTask(taskId, task_name, catid1, catid2, catid3, goal_id, complete) {
  console.log("calling edit", taskId, task_name, catid1, catid2, catid3, goal_id, complete)
  return {
    [CALL_API]: {
      endpoint: `/api/task/edit/${taskId}`,
      method: 'POST',
      types: [POST_EDIT_TASK_REQUEST, POST_EDIT_TASK_SUCCESS, POST_EDIT_TASK_FAILURE],
      body: JSON.stringify({
        taskId: taskId,
        task_name: task_name,
        category_id_1: catid1,
        category_id_2: catid2,
        category_id_3: catid3,
        goal_id: goal_id,
        complete: complete
      })
    },
  };
}


export function addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, parent_id) {
  console.log("calling add", taskname, catid1, catid2, catid3, goal_id, parent_id, is_child)
  return {
    [CALL_API]: {
      endpoint: `/api/task/post`,
      method: 'POST',
      types: [POST_TASK_REQUEST, POST_TASK_SUCCESS, POST_TASK_FAILURE],
      body: JSON.stringify({
        task_name: taskname,
        category_id_1: catid1,
        category_id_2: catid2,
        category_id_3: catid3,
        goal_id: goal_id,
        is_child: is_child,
        parent_id: parent_id
      })
    },
  };
}


export function duplicateTask() {
  console.log("calling duplicate")
  return {
    [CALL_API]: {
      endpoint: `/api/task/duplicate`,
      method: 'POST',
      types: [POST_DUP_TASK_REQUEST, POST_DUP_TASK_SUCCESS, POST_DUP_TASK_FAILURE],
      body: JSON.stringify({
        task_name2: 'testtask2',
        category_id_1: '1',
        category_id_2: '5',
        category_id_3: '9'
      })
    },
  };
}
