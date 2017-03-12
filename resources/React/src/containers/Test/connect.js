/* eslint-disable */
import { isEmpty } from 'lodash';
import fetchGoals from '../../actions/goals';

export const mapStateToProps = state => ({
  areGoalsLoading: state.goals.isLoading,
  goals: state.goals.goals,
});

export const mapDispatchToProps = dispatch => ({
  fetchGoals: () => dispatch(fetchGoals()),
});
