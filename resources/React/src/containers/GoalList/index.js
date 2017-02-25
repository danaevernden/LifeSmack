import { connect } from 'react-redux';
import React from 'react';
import GoalNames from '../../components/GoalNames';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';

type Props = {
  areGoalsLoading: Bool,
  fetchGoals: () => void,
  goals: Goal[]
};
class GoalList extends React.Component {
  static defaultProps: { goals: Goal[] };

  componentDidMount() {
    this.props.fetchGoals();
  }

  props: Props

  render() {
    const {
      areGoalsLoading,
      goals,
    } = this.props;
    return (
      //    <h2>Goals</h2>
  //    <Homepage/>
      <p>{'Record line notes, track props, and manage your next production.'}</p>

  //        {areGoalsLoading}
  //        {goals.map(goal => <GoalNames
  //          id={goal.id}
  //          name={goal.name}
  //        />)}
    );
  }
}
GoalList.defaultProps = { goals: [] };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalList);
