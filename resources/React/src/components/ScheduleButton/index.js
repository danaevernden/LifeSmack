import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';

class ScheduleButton extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      dialogOpen: false  }}

  dialogOpen = () => {
      this.setState({dialogOpen : true});
  }
  dialogClose = () => {
    this.setState({dialogOpen: false});
  }

  render() {

    const scheduleActions =[
      <RaisedButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.dialogClose}
      />,
    ];

    return (
      <div>
      <IconButton tooltip="schedule" onTouchTap={this.dialogOpen}>
        <ActionSchedule/>
      </IconButton>
      <Dialog title="Schedule this task"
      actions={scheduleActions}
      modal={false}
      open={this.state.dialogOpen}
      onRequestClose={this.dialogClose}>
      <DatePicker />
      </Dialog>
      </div>
    );
  }
}

export default ScheduleButton;
