import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import Moment from 'moment';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import BottomNavigationItem from 'material-ui/BottomNavigation';

type Props = {
  scheduledDate: Date
}


const styles={
  iconStyle: {
    minWidth: '40px',
    width: '40px'
  }
}

//get datepicker to show default date (momentDate)
class ScheduleButton extends React.Component {
  props:Props
  constructor(props){
    super(props)
    this.state= {
      dialogOpen: false,
      scheduledDate: this.props.scheduledDate
    }}

  dialogOpen = () => {
      this.refs.dp.openDialog();
  }
  dialogClose = () => {
    this.setState({dialogOpen: false});
  }

  render() {

    const {
      scheduledDate
    } = this.props;


    const scheduleActions =[
      <RaisedButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.dialogClose}
      />,
    ];

    Moment.locale('en');
    var dt = {scheduledDate};

    const momentDate =
    Moment(dt).format('YYYY-MM-DD');

    return (
      <div>
      <h2>{scheduledDate}</h2>
      <Dialog title="Schedule this task"
      actions={scheduleActions}
      modal={false}
      open={this.state.dialogOpen}
      onRequestClose={this.dialogClose}>
      <DatePicker/>
      </Dialog>
      <ActionSchedule onTouchTap={this.dialogOpen}/>
      <DatePicker ref='dp'/>
      </div>
    );
  }
}

export default ScheduleButton;
