/* eslint-disable */
import fetchNewsfeed from '../../actions/newsfeed';

export const mapStateToProps = state => ({
  areGoalsLoading: state.goals.isLoading,
  goals: state.goals.goals,
  comments: state.comments.comments,
  tasks: state.tasks.tasks
});

export const mapDispatchToProps = dispatch => ({
  fetchNewsfeedFromActions: () => dispatch(fetchNewsfeed()),
})
