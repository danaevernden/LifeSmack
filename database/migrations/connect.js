
import fetchTasks, {deleteTask, editTask, addTaskToGoal} from '../../actions/tasks';
import fetchComments from '../../actions/comments';
import fetchCategories from '../../actions/categories';
import fetchGoals from '../../actions/goals';

export const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  comments: state.comments.comments,
  categories: state.categories.categories,
  categories2: state.categories.categories,
  goals: state.goals.goals,
  rightMenu: state.rightMenu.rightMenu
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTasksFromActions: () => dispatch(fetchTasks()),
  fetchCommentsFromActions: () => dispatch(fetchComments()),
  fetchCategoriesFromActions: () => dispatch(fetchCategories()),
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
  handleDeleteTask: (task_id) => dispatch(deleteTask(task_id)),
  addTaskToGoal: (taskname, catid1, catid2, catid3) => dispatch(addTaskToGoal(taskname, catid1, catid2, catid3)),
  editTask: (task_id, catid1) => dispatch(editTask(task_id, catid1))
});
