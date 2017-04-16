import { connect } from 'react-redux';
import React from 'react';
import { sortBy } from 'lodash';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionComment from 'material-ui/svg-icons/communication/chat-bubble';
import ActionCommentOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Assignment from 'material-ui/svg-icons/action/assignment';
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
import FlatButton from 'material-ui/FlatButton';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ManageCategories from '../../components/ManageCategories';
import Checkbox from 'material-ui/Checkbox';

//to do
//search is working but buggy
//fix taskMenu position - position:fixed isn't working
//added snackbar but it's not working
//add if statement to change sortOption based on what button is clicked
//find out if there is a hierarchy material-ui or equivalent
//add sort functionality in task list
//align checkbox with task
//get up/down arrow on parent task to collapse/expand tasks underneath
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
    flexWrap: 'wrap',
    marginBottom: '20px',
    marginLeft: '20%',
    marginRight: '20%',
    maxWidth: '600px'
  },
  parentStyle: {
    display: 'inline-block',
    textAlign: 'left'
  },
  checkboxCompleted: {
    display: 'inline-block',
    width: '10%'
  },
  CompTasksGrouper: {
    textAlign: 'center',
    display: 'flex'
  },
  background: {
    backgroundColor: 'rgb(233,235,238)'
  },
  parentTaskItems: {
    flexWrap: 'wrap',
    marginBottom: '20px',
    marginLeft: '10%',
    marginRight: '30%'
  },
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block'
  },
  inlineBlock: {
    display: 'inline-block',
    marginBottom: '10px'
  },
  goalItem: {
    marginBottom: '5px'
  },
  TaskListSortOptions: {
    marginTop: '-20px'
  }
};

class TaskList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      commentsExpanded: false,
      sortOption: "Category",
      taskComplete: false,
      expandParentTask: true,
      showCompletedTasks: false
    }
    this.expandComments = this.expandComments.bind(this);
    this.expandParentTask = this.expandParentTask.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.showCompletedTasks = this.showCompletedTasks.bind(this);
    this.sortOptionSelection = this.sortOptionSelection.bind(this);
  }
//get this to work, test it first?
  sortBy(field) {
      this.setState({
        tasks: sortBy(this.state.tasks, field)
      })
  }

  showCompletedTasks() {
    this.setState({showCompletedTasks: !this.state.showCompletedTasks})
  }
  expandParentTask() {
    this.setState({expandParentTask: !this.state.expandParentTask})
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

  expandComments() {
      this.setState({commentsExpanded: !this.state.commentsExpanded});
  }

  render() {

    const today = new Date().toJSON();

    const parentTaskItems = this.props.tasks.filter((item) => {
      return item.parent_task == null && item.goal_id == this.props.route.goalID;
      })
    .map((tasks) =>
    <div style={styles.parentTaskItems}>
    <Card>
      <div style={styles.parentStyle}>
        <div style={styles.checkboxCompleted}>
            {tasks.complete == true ? <ActionDone /> : <CheckboxButton />}
        </div>
        <TextField defaultValue={tasks.task_name}/>
      </div>
      {this.state.expandParentTask ? <ExpandLess onTouchTap={this.expandParentTask} /> : <ExpandMore onTouchTap={this.expandParentTask}/>}
      </Card>
      </div>
    );

    const commentItems =this.props.tasks.filter((item) => {
      if (this.state.commentsExpanded) {
        return true;
      }
        return false;
    })
    .map((tasks) =>
    <div>
        <ListItem primaryText="hey" />
    </div>
  );

    const listItems = this.props.tasks.filter((item) => {
        if (this.state.showCompletedTasks) {
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
      <Card>
          <div style={styles.parentStyle}>
          <div style={styles.checkboxCompleted}>
            {tasks.complete =="true" ? <ActionDone /> : <CheckboxButton onTouchTap={this.completeTask}/>}
          </div>
          <div  style={styles.completeTask}>
            <TextField defaultValue={tasks.task_name} />
          </div>
          </div>
          <CardActions>
            {this.state.commentsExpanded ?
              <FlatButton icon={<ActionCommentOutline/>}
                  label="comment"
                  onClick={this.expandComments}/>
              :
              <FlatButton icon={<ActionComment/>}
                  label="comment"
                  onClick={this.expandComments}/>
            }
          <TaskMenu />
          <FlatButton icon={<Assignment />} label="categories"/>
          {today > tasks.scheduled ? <ActionWarning /> : <ScheduleButton />}

          </CardActions>
          {tasks.task_type =="task" ?
            <Chip style={styles.chipStyle} backgroundColor={green500}>Task</Chip>
            :    <Chip backgroundColor={grey500}>Supplemental</Chip>
          }
        {commentItems}
        </Card>

        <Snackbar
          open={this.state.taskComplete}
          message="Nice work!"
          autoHideDuration={4000}
          onRequestClose={this.completeTaskClose}
        />
    </div>
    </div>
    );

    const goalItems = this.props.goals.filter((item) => {
    return item.goal_id == this.props.route.goalID;
    })
    .map((goals) =>
    <div>{goals.goal_name}</div>
    );

    let expandParentTaskVar = null;
    if(this.state.expandParentTask) {
      expandParentTaskVar =
      <div>
      <MuiThemeProvider>
        <Card style={styles.background}>
          <Divider />
          {listItems}
        </Card>
      </MuiThemeProvider>
      </div>;
    }

//checkbox:
//https://facebook.github.io/jest/docs/tutorial-react.html
    return (
      <div className = 'App-page' >
        <div className = 'App-content'>
          <div className='Top-menu' style={styles.topMenu} >
              <h2 style={styles.goalItem}>Goal: {goalItems} </h2>
              <div style={styles.inlineBlock}>
                <MuiThemeProvider>
                  <div style={styles.TaskListSortOptions}>
                    <TaskListSortOptions/>
                    </div>
                </MuiThemeProvider>
              </div>
              <div style={styles.inlineBlock}>
                Search: <input onChange={this.updateFilter} value={this.state.filter}/>
              </div>
              <div style={styles.inlineBlock}>
                <div style={styles.CompTasksGrouper}>
                  <div><Checkbox checked={this.state.showCompletedTasks} onCheck={this.showCompletedTasks} /></div>
                    Show Completed Tasks?
                  </div>
                  <div>
                  <FlatButton onClick={this.sortBy.bind(this, 'task_id')}>
                      sort by id
                  </FlatButton>
                </div>
                </div>
                <div>
                <div style={styles.inlineBlock}>
                  <AddTask/>
                  <ManageCategories/>
                </div>
              </div>
            </div>
              <MuiThemeProvider>
                <Card style={styles.background}>
                  <Divider />
                  {parentTaskItems}
                </Card>
              </MuiThemeProvider>
              </div>
              {expandParentTaskVar}
          <br/>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
