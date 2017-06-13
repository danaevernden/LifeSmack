import fetchGoals from '../../../actions/goals';

export const mapStateToProps = (state) => ({
  goals: state.goals.goals,
  rightMenu: state.rightMenu.rightMenu
});

export const mapDispatchToProps = (dispatch) => ({
  fetchGoalsFromActions: () => dispatch(fetchGoals())
});
