import {ADD_TASK_TO_GOAL} from '../actions/tasks';

import {FETCH_TASKS_SUCCESS} from '../actions/tasks';



const tasks = (state = {}, action) => {
  switch(action.type) {
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
