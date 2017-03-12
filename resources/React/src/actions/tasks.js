export const ADD_TASK_TO_GOAL = 'ADD_TASK_TO_GOAL';

export const addTaskToGoal = (task) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: ADD_TASK_TO_GOAL,
    TaskToGoal: {
      task
    }
  };
}
addTaskToGoal
