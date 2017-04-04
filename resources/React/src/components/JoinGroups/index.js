import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

//to do
//--1. move JoinGroups to GroupsList in components
//--2. change settings to a small icon in the corner of the card
//--3. separate event_url and events subscribed to into another table? as one may
//--be subscribed to multiple events in a group
//--4. separate discussions followed and discussion pages into another table?

class JoinGroups extends React.Component{
  constructor(props) {
    super(props);
    }
    render () {
    //for testing purposes, remove when finished

    const style = {

    };

    const groupsJoin = this.props.groupthink
    .map((groupthink) =>
    <div>
        <a href={'/groupthink/' + groupthink.group_id}>
          <CardTitle style={style} title={groupthink.group_name} />
        </a>
      <CardText>{groupthink.discussion_groups}
      </CardText>
      <CardActions>
        <FlatButton label="Join" />
        <FlatButton label="See discussion groups and events" />
      </CardActions>
      <Divider />
    </div>
    );

    return (
      <div>
          <Card>
              <Divider />
              {groupsJoin}
          </Card>
      </div>
    )
  }
}



export default connect(
  mapStateToProps
)(JoinGroups);
