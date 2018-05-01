import fetchGoals, {addGoal} from '../../../actions/goals';
import fetchTasks from '../../../actions/tasks';
import fetchProfile from '../../../actions/profile';
export const mapStateToProps = (state) => ({
  goals: state.goals.goals,
  tasks: state.tasks.tasks,
  users: state.users.users
});

export const mapDispatchToProps = (dispatch) => ({
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
  fetchTasksFromActions: () => dispatch(fetchTasks()),
  fetchProfileFromActions: () => dispatch(fetchProfile()),
  addGoal: (goalname, catid1) => dispatch(addGoal(goalname, catid1)),
});
