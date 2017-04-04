import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';


//selector for days you want to work on goal? not in database but can add it
//find an add in for material-ui that picks days of week instead of calendar days?
//or use a different menu instead

class AddGoal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    goalOpen: false
    }
  }

  goalOpen = () => {
    this.setState({goalOpen: true});
  }

  goalClose = () => {
    this.setState({goalOpen: false});
  }

  render () {

    const customGoalActions = [
      <div>
        <TextField hintText="Goal Name" /><br/>
        <RaisedButton
          label="Create goal"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.goalClose}
        />
        <RaisedButton
          label="Cancel"
          primary={false}
          keyboardFocused={true}
          onTouchTap={this.goalClose}
        />
      </div>
    ];

    return(
      <MuiThemeProvider>
          <div>
            <RaisedButton label={"I'm not interested, I'll write my own"} onTouchTap={this.goalOpen} />
            <Dialog
            title="Add goal"
            actions={customGoalActions}
            modal={false}
            open={this.state.goalOpen}
            onRequestClose={this.goalClose}>
            </Dialog>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default AddGoal;
