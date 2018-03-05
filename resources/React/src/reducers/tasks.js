import {ADD_TASK_TO_GOAL} from '../actions/tasks';

import {POST_DUP_TASK_SUCCESS, POST_EDIT_TASK_SUCCESS, FETCH_TASKS_SUCCESS, DELETE_TASK_SUCCESS} from '../actions/tasks';



const tasks = (state = {}, action) => {
  switch(action.type) {
    case DELETE_TASK_SUCCESS:
    case POST_EDIT_TASK_SUCCESS:
    case POST_DUP_TASK_SUCCESS:
    case FETCH_TASKS_SUCCESS: {
      console.log('CHECK IT OUT, TASKS!', action);
      return {
        ...state,
        tasks: action.payload
      };
    }

    default:
      return state;
  }
}

export default tasks;
