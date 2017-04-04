import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionComment from 'material-ui/svg-icons/communication/chat-bubble';
import ActionCommentOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import RaisedButton from 'material-ui/RaisedButton';
import { green500, grey500 } from 'material-ui/styles/colors';
import { Field, reduxForm } from 'redux-form';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import TaskMenu from '../../components/TaskMenu';
import TaskListSortOptions from '../../components/TaskListSortOptions';
import ScheduleButton from '../../components/ScheduleButton';
import CheckboxButton from '../../components/CheckboxButton';
import AddTask from '../../components/AddTask';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import ManageCategories from '../../components/ManageCategories';
//to do
//search is working but buggy
//added snackbar but it's not working
//add if statement to change sortOption based on what button is clicked
//find out if there is a hierarchy material-ui or equivalent
//add sort functionality in task list
//add switch for showing scheduled dates
//--move checkbox to middle or different place
//--add a completeTask function to connect to change the value in the table from true to false for an item when it is checked complete
//other icons to use:
//--actions/schedule
//--actions/update
//--actions/watch-later
//--actions/add alert
//--actions/warning
//--actions/settings
import ActionWarning from 'material-ui/svg-icons/alert/warning';

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '30%'
  },
  parentStyle: {
    textAlign: 'left',
    marginLeft: '20%'
  },
};

class TaskList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter_complete: "true",
      filter: "",
      task_expanded: false,
      sortOption: "",
      checked: false,
      taskComplete: false
    }
    this.expandTask = this.expandTask.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.sortOptionSelection = this.sortOptionSelection.bind(this);
  }

  completeTask() {
    this.setState({taskComplete: true})
  }
  completeTaskClose() {
    this.setState({taskComplete: false})
  }
  sortOptionSelectionCat() {
    this.setState({sortOption: "Category"})
  }
  sortOptionSelectionPar() {
    this.setState({sortOption: "Parent"})
  }
  sortOptionSelection() {
    this.setState({sortOption: "TvS"})
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  expandTask() {
      this.setState({task_expanded: !this.state.task_expanded});
  }

  render() {

    const today = new Date().toJSON();

    const parentTaskItems = this.props.tasks.filter((item) => {
      return item.parent_task == null && item.goal_id == this.props.route.goalID;
      })
    .map((tasks) =>
      <div style={styles.parentStyle}>
        <TextField defaultValue={tasks.task_name}/>
        {tasks.complete =="true" ? <ActionDone /> : <CheckboxButton />}

      </div>
    );

    const commentItems =this.props.tasks.filter((item) => {
      if (this.state.task_expanded) {
        return true;
      }
        return false;
    })
    .map((tasks) =>
    <div>
        <ListItem  primaryText="hey" />
    </div>
  );


    const listItems = this.props.tasks.filter((item) => {
        if (this.state.checked) {
                if (this.state.filter) {
                  return item.parent_task!== null && item.goal_id ==this.props.route.goalID && item.task_name.startsWith(this.state.filter);
                }
                  return item.parent_task!== null && item.goal_id ==this.props.route.goalID;
              }
                if(this.state.filter) {
                  return item.parent_task !== null && item.complete == "false" && item.goal_id == this.props.route.goalID && item.task_name.startsWith(this.state.filter);
                }
                return item.parent_task !== null && item.complete == "false" && item.goal_id == this.props.route.goalID;
          })
    .map((tasks) =>
    <div>
    <div style={styles.wrapper}>
        {tasks.complete =="true" ? <ActionDone /> : <CheckboxButton onTouchTap={this.completeTask}/>}
        <TextField defaultValue={tasks.task_name} />
            {this.state.task_expanded ? <ActionCommentOutline onClick={this.expandTask}/> : <ActionComment onClick={this.expandTask}/>}
            {today > tasks.scheduled ? <ActionWarning /> : null}
                {tasks.task_type =="task" ?
                <Chip style={styles.chipStyle} backgroundColor={green500}>Task</Chip>
                :    <Chip backgroundColor={grey500}>Supplemental</Chip>
                }
                <TaskMenu />
                <ScheduleButton />
           </div>
        {commentItems}
        <Snackbar
          open={this.state.taskComplete}
          message="Nice work!"
          autoHideDuration={4000}
          onRequestClose={this.completeTaskClose}
        />

    </div>
    );



    const goalItems = this.props.goals.filter((item) => {
    return item.goal_id == this.props.route.goalID;
    })
    .map((goals) =>
    <div>{goals.goal_name}</div>
    );

//checkbox:
//https://facebook.github.io/jest/docs/tutorial-react.html
    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
          <Homepage/>
              <h2>Goal: {goalItems} </h2>
              Organize by:
                <MuiThemeProvider>
                <div>
                    <TaskListSortOptions/>
                    </div>
                </MuiThemeProvider>
                Search: <input onChange={this.updateFilter} value={this.state.filter}/>
                <br/>
                <br/>
                Show Completed Tasks?
                <CheckboxButton />
                <div>
                <MuiThemeProvider>
                  <Card>
                    <Divider />
                    {parentTaskItems}
                    {listItems}
                  </Card>
                </MuiThemeProvider>
                </div>
                <br/>
                <div>
                    <AddTask/>
                    <ManageCategories/>
                </div>
            </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
