
import fetchTasks, {deleteTask, duplicateTask, editTask, addTaskToGoal} from '../../actions/tasks';
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
  addTaskToGoal: (taskname, catid1, catid2, catid3, goal_id, is_child, parent_id) => dispatch(addTaskToGoal(taskname, catid1, catid2, catid3, goal_id, is_child, parent_id)),
  editTask: (task_id, taskname, catid1, catid2, catid3, goal_id, complete) => dispatch(editTask(task_id, taskname, catid1, catid2, catid3, goal_id, complete)),
  duplicateTask: (task_id, catid1, catid2, catid3, complete) => dispatch(editTask(task_id, catid1, catid2, catid3, complete))
});
