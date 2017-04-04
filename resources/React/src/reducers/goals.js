import {ADD_GOALS_TASK} from '../actions/goals';


const DEFAULT_STATE = {
  goals:
  [
  {goal_id: 1, goal_name: "Run 2017 NYC Marathon", task: "completed framework for site"},
  {goal_id: 2, goal_name: "Build Lifesmack", task:["build out UI, ", "add clear button to newsfeed"]}
  
  ]
}

const goals = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
      case ADD_GOALS_TASK: {
      return {
        ...state, //copies everything from the existing state into the new state
        goals: state.goals.concat([action.goalTask])
      };
    }
      default:
      return state;
  }
}

export default goals;
