import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionEvent from 'material-ui/svg-icons/action/event';
import ActionForum from 'material-ui/svg-icons/communication/forum';

//to do
//--1. move JoinGroups to GroupsList in components
//--2. change settings to a small icon in the corner of the card
//--3. separate event_url and events subscribed to into another table? as one may
//--be subscribed to multiple events in a group
//--4. separate discussions followed and discussion pages into another table?
//--5. if user isn't part of any groups, give message for suggesting to join one
class MyGroups extends React.Component{
  constructor(props) {
    super(props);
    }
    render () {
    //for testing purposes, remove when finished


    const style = {

    };

    const groupList = this.props.mygroups
    .map((mygroups) =>
    <div>
        <a href={'/groupthink/' + mygroups.group_id}>
          <CardTitle style={style} title={mygroups.group_name} />
        </a>
      <CardText>Discussions followed: {mygroups.discussions_followed}
      <br/><br/>
      Upcoming Events: <a href={'/groupthink/' + mygroups.event_url}>{mygroups.events}</a>
      </CardText>
      <CardActions>
        <FlatButton icon={<ActionSettings />} />
        <FlatButton icon={<ActionEvent />} label="See all upcoming events" />
        <FlatButton icon={<ActionForum />} label="Forums I'm following" />
      </CardActions>
      <Divider />
    </div>
    );

    return (
      <div>
          <Card>
              <Divider />
              {groupList}
          </Card>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(MyGroups);
