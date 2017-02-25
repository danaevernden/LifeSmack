import { connect } from 'react-redux';
import React from 'react';
//change to goals vvvvv
import GoalNames from '../../components/GoalNames'; //change
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Hompeage';

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
          <h2>Goals</h2>
          {areGoalsLoading}
          {goals.map(goal => <GoalNames
            id={goal.id}
            name={goal.name}
          />)}
        </div>
      </div>
    );
  }
}
GoalList.defaultProps = { goals: [] };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalList);
