import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


//add logic if there are no categories
//pull in category table

type Props = {
  name: String,
  scheduled: Date,
  catValue: String
}

class AddTask extends React.Component {
  props : Props
  state = {
    addTaskOpen: false,
    catValue: 1,
    name: "",
    scheduled: null
  };

//figure out how to pass task, schedule, category back to main index page
  taskChange = (event, name) => this.setState({name});
  scheduleChange = (event, scheduled) => this.setState({scheduled});
  catChange = (event, index, value) => this.setState({value});

  addTaskOpen = () => {
    this.setState({addTaskOpen: true});
  }

  addTaskClose = () => {
    this.setState({addTaskOpen: false});
  }

  render() {
    const addTaskActions =[
      <div>
      <TextField hintText="Task*" onChange={this.taskChange}/> <br/>
      <DatePicker hintText="Due Date" onChange={this.scheduleChange}/>
      <SelectField value={this.state.value} floatingLabelText="Category" onChange={this.catChange}
      >
        <MenuItem value={1} primaryText="UI" />
        <MenuItem value={2} primaryText="Back End" />
        <MenuItem value={3} primaryText="User Testing" />
      </SelectField> <br/>
      <RaisedButton
        label="Add task"
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
      ,
    ];

    return(
      <MuiThemeProvider>
      <div>
        <RaisedButton label={"Add Task"} onTouchTap={this.addTaskOpen} />
        <Dialog
        title="Add a task"
        actions={addTaskActions}
        modal={false}
        open={this.state.addTaskOpen}
        onRequestClose={this.addTaskClose}>
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default AddTask;
