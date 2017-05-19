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
    display: 'inline-block',
    marginBottom: '10px'
  },
  floatingActionButton: {
      marginRight: 20,
      position: 'fixed',
      bottom: '5%',
      right: '5%'
    }
};

class AddTask extends React.Component {
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
    const addTaskActions =[
      <div>
      <TextField hintText="Task*" onChange={this.taskChange}/> <br/>
      <DatePicker hintText="Due Date" onChange={this.scheduleChange}/>
      <SelectField value={this.state.category2_value} floatingLabelText="Effort level" onChange={this.handleChange2}
      >
        <MenuItem value={6} primaryText="low" />
        <MenuItem value={7} primaryText="medium" />
        <MenuItem value={8} primaryText="high" />
      </SelectField> <br/>
      <SelectField value={this.state.category1_value} floatingLabelText="Task Type" onChange={this.handleChange}
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
