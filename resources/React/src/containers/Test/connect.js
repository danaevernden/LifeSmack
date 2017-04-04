/* eslint-disable */


export const mapStateToProps = state => ({
  areGoalsLoading: state.goals.isLoading,
  goals: state.goals.goals,
  comments: state.comments.comments,
  tasks: state.tasks.tasks
});
