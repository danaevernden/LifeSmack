import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardTitle } from 'material-ui/Card';

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
      <h2>
     <p>{'Test Test Goal Names.'}
      </p>
      </h2>
    );
  }
}

export default GoalNames;
