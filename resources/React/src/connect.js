import fetchGoals from '../../../actions/goals';

export const mapStateToProps = (state) => ({
  goals: state.goals.goals,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
});
