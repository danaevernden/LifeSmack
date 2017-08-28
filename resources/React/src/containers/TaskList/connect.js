import {addTaskToGoal} from '../../actions/tasks';
import fetchTasks, {deleteTask} from '../../actions/tasks';
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
  addTaskToGoal: (task_name, complete) => dispatch(addTaskToGoal(task_name, complete))
});
