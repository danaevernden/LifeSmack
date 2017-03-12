export const ADD_GOALS_TASK = 'ADD_GOALS_TASK';

export const addGoalsTask = (goal_name) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: ADD_GOALS_TASK,
    goalTask: {
      goal_name
    }
  };
}
addGoalsTask
