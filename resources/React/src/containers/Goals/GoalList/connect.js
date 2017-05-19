import fetchGoals from '../../../actions/goals';
import editGoals from '../../../actions/goals';

export const mapStateToProps = (state) => ({
  goals: state.goals.goals
});

export const mapDispatchToProps = (dispatch) => ({
  fetchGoalsFromActions: () => dispatch(fetchGoals()),
  editGoalsFromActions: () => dispatch(editGoals())
});
