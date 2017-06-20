import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';

//add logic if there are no categories
//pull in category table

type Props = {
  name: String,
  scheduled: Date,
  catValue1: Number,
  catValue2: Number
}

const styles = {
  addTask : {
    marginBottom: '10px',
    width: '400px',
  },
  floatingActionButton: {
      marginRight: 20,
      position: 'fixed',
      bottom: '5%',
      right: '5%'
    },
    floatingLabel: {
      color: 'black'
    },
    textStyle: {
      display:'inline-block',
      width: '350px',
      float: 'left'
    },
    labelStyle: {
    marginRight: '10%'
  },
  scheduleStyle: {
    float:'left'
  }
};

class AddGoal extends React.Component {
  props : Props
  state = {
    addTaskOpen: false,
    category1_value: 1,
    category2_value: 6,
    name: "",
    scheduled: null
  };


//figure out how to pass task, schedule, category back to main index page
  taskChange = (event, name) => this.setState({name});
  scheduleChange = (event, scheduled) => this.setState({scheduled});
  handleChange = (event, index, category1_value) => this.setState({category1_value})
  handleChange2 = (event, index, category2_value) => this.setState({category2_value})

  addTaskOpen = () => {
    this.setState({addTaskOpen: true});
  }

  dialogOpen = () => {
      this.refs.dp.openDialog();
  }

  addTaskClose = () => {
    this.setState({addTaskOpen: false});
  }

  addTaskSubmit = () => {
      this.props.addTaskSubmit(this.state.name, this.state.task);
      this.setState({
        name: "",
        task: ""
      })
  }

  render() {

    const items = [
      <MenuItem key={1} value={11} primaryText="Never" />
    ];

    const addTaskActions =[
      <div>
      <TextField
      style={styles.textStyle}
      hintText="Goal Name*"
      onChange={this.taskChange}
      multiLine={true}
      rowsMax={4}
      /> <br/>
      <br/>
      <DatePicker
      hintText="add due date"
      textFieldStyle={styles.textStyle}/>

        <RaisedButton
        label="Add goal"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addTaskClose}
      />
      <RaisedButton
        label="Cancel"
        primary={false}
        keyboardFocused={true}
        onTouchTap={this.addTaskClose}
      />

      </div>
    ];

    const AddTaskButton =
    <div>
      <FloatingActionButton
      style={styles.floatingActionButton}
      onTouchTap={this.addTaskOpen}
      >
          <ContentAdd />
      </FloatingActionButton>
    </div>
    ;
    return(
      <MuiThemeProvider>
      <div>
        {AddTaskButton}
        <Dialog
            title="Add a Goal"
            actions={addTaskActions}
            modal={false}
            contentStyle={styles.addTask}
            open={this.state.addTaskOpen}
            onRequestClose={this.addTaskClose}>
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default AddGoal;
