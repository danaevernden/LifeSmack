import {addTaskToGoal} from '../../actions/tasks';

export const mapStateToProps = (state) => ({
  goals: state.goals.goals
});

export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  addTaskToGoal: (task) => dispatch(addTaskToGoal(task))
});
