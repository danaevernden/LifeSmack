import {ADD_TASK_TO_GOAL} from '../actions/tasks';

import {FETCH_NEWSFEED_SUCCESS} from '../actions/newsfeed';

const DEFAULT_STATE = {
  tasks:
  [
  {goal_id: 1, task_id: 5, parent_task: null, task_type: "task", task_name: "app MVP", complete: "false", scheduled:  "2017-04-03T18:25:43.511Z"},
  {goal_id: 1, task_id: 1, parent_task: 5, category_id_1:2, category_id_2:8, task_type: "task", task_name: "complete framework for site", complete: true, scheduled:  "2017-05-02T18:25:43.511Z"},
  {goal_id: 1, task_id: 2, parent_task: 5, category_id_1:4, category_id_2:7, task_type: "task", task_name: "build out UI", complete: false, scheduled: "2017-05-02T18:25:43.511Z"},
  {goal_id: 1, task_id: 3, parent_task: 5, category_id_1:3, category_id_2:6, task_type: "task", task_name: "add clear button to newsfeed", complete: false},
  {goal_id: 2, task_id: 4, parent_task: 6, category_id_1:10, category_id_2:null, task_type: "supplemental", task_name: "video: running form with Meb", complete: false, scheduled: "2017-03-31T18:25:43.511Z"},
  {goal_id: 2, task_id: 6, parent_task: null, category_id_1:10, category_id_2:null, task_type: "task", task_name: "running education", complete: false}

  ]
}

const tasks = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_TASK_TO_GOAL: {
      return {
        ...state, //copies everything from the existing state into the new state
        tasks: state.tasks.concat([action.TaskToGoal])
      };
    }
    case FETCH_NEWSFEED_SUCCESS: {
      console.log('CHECK IT OUT!', action);
      /*return {
        ...state,
        tasks: action.payload
      };*/
      return state;
    }

    default:
      return state;
  }
}

export default tasks;
