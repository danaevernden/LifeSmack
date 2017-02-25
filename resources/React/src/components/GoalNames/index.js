import React from 'react';

type Props = {
  id: String,
  name: String
};
class GoalNames extends React.Component {
  props: Props

  render() {
    const {
      id,
      name,
    } = this.props;
    return (
      <h2 key={id}>
     <p>{'Test Test Goal Names.'}
      </p>

        <h1 title={name} subtitle='Upcoming' />
      </h2>
    );
  }
}

export default GoalNames;
