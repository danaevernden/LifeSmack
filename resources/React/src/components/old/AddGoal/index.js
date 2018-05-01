import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
    addCatOpen: false,
    addSubCat: false,
    category1_value: 1,
    category2_value: 6,
    name: "",
    scheduled: null
  };

  taskChange = (event, name) =>
  {this.setState({name})};
  scheduleChange = (event, scheduled) => this.setState({scheduled});
  handleChange = (event, index, category1_value) => this.setState({category1_value})
  handleChange2 = (event, index, category2_value) => this.setState({category2_value})

  addSubCat = () => {
    this.setState({addSubCat: true});
  }

  addTaskOpen = () => {
    this.setState({addTaskOpen: true});
  }

  addCatOpen = () => {
    this.setState({addCatOpen: true});
  }

  dialogOpen = () => {
      this.refs.dp.openDialog();
  }

  addTaskClose = () => {
    this.setState({addTaskOpen: false});
  }

  addCatClose = () => {
    this.setState({addCatOpen: false});
  }

  addTaskSubmit = () => {
      this.props.addTaskSubmit(this.state.name, this.state.task);
      this.setState({
        name: "",
        task: ""
      })
  }

  render() {

    const addCategoryActions = [
      <div>
        <TextField
        style={styles.textStyle}
        hintText="Recommended Category: Location"
        />
        {this.state.addSubCat === true ?
          <TextField
          style={styles.textStyle}
          hintText="add subcategory"
          onChange={this.taskChange}
          />
          :<div></div>
        }
        <RaisedButton
        label="Add subcategory"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addSubCat}
      />
        <RaisedButton
        label="Add categories"
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

    const addTaskActions =[
      <div>
      <RaisedButton
      label="Add photo"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.addTaskClose}
    />

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
        label="Add categories"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addCatOpen}
      />
      <br/><br/>
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
        <Dialog
          title="Add Categories"
          actions={addCategoryActions}
          modal={false}
          contentStyle={styles.addTask}
          open={this.state.addCatOpen}
          onRequestClose={this.addCatClose}>
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default AddGoal;
