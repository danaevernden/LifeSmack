import React from 'react';

type Props = {
  name: String
}

const styles={
  goalItem: {
    marginBottom: '5px'
  },
};

class GoalName extends React.Component{
    props: Props

    render () {
        const {
          name,
        } = this.props;

        const goalItems =
        <div>{name}</div>
        ;
    return (
      <h2 style={styles.goalItem}>Goal: {goalItems} </h2>
    )
  }
}

export default GoalName;
