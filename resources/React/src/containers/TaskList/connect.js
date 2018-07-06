
import fetchTasks, {deleteTask, duplicateTask, editTask, addTaskToGoal} from '../../actions/tasks';
import fetchCategories from '../../actions/categories';
import fetchGoals from '../../actions/goals';

export const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  categories: state.categories.categories,
  categories2: state.categories.categories,
  goals: state.goals.goals,
  rightMenu: state.rightMenu.rightMenu
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTasksFromActions: () => dispatch(fetchTasks()),
  fetchCategoriesFromActions: () => dispatch(fetchCategories()),
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
  handleDeleteTask: (task_id) => dispatch(deleteTask(task_id)),
  addTaskToGoal: (taskname, catid1, catid2, catid3, goal_id, is_child, parent_id) => dispatch(addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, parent_id)),
  editTask: (task_id, taskname, catid1, catid2, catid3, goal_id, complete) => dispatch(editTask(task_id, taskname, catid1, catid2, catid3, goal_id, complete)),
});
