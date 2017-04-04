import {addTaskToGoal} from '../../actions/tasks';

export const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  goals: state.goals.goals
});

export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  addTaskToGoal: (task_name, complete) => dispatch(addTaskToGoal(task_name, complete))
});
