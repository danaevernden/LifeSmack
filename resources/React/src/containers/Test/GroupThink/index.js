import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyGroups from '../../../components/MyGroups';
import JoinGroups from '../../../components/JoinGroups';

//to do
//--1. move JoinGroups to GroupsList in components
//--2. change settings to a small icon in the corner of the card
//--3. separate event_url and events subscribed to into another table? as one may
//--be subscribed to multiple events in a group
//--4. separate discussions followed and discussion pages into another table?



class GroupThink extends React.Component{

  constructor(props){
    super(props);
  }

  render() {


    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>GroupThink</h2>
              <h3>My Groups</h3>
              <MuiThemeProvider>
                <div>
                  <MyGroups />
                </div>
              </MuiThemeProvider>
              <h3>Join Groups</h3>
              <br/>
              <MuiThemeProvider>
                <div>
                  <JoinGroups />
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps
)(GroupThink);
