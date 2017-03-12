import {addGoalsTask} from '../../actions/goals';

export const mapStateToProps = (state) => ({
  goals: state.goals.goals
});

export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  addGoalsTask: (goal_name, task) => dispatch(addGoalsTask(goal_name, task))
});
