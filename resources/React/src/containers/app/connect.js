import fetchGoals from '../../actions/goals';
import fetchProfile from '../../actions/profile';

export const mapStateToProps = (state) => ({
  goals: state.goals.goals,
  users: state.users.users
});

export const mapDispatchToProps = (dispatch) => ({
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
  fetchProfileFromActions: () => dispatch(fetchProfile()),
});
