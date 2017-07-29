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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import GoalName from '../../components/GoalName';

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
  background: {
    backgroundColor: 'rgb(233,235,238)'
  },
  checkboxCompleted: {
    display: 'inline-block',
    width: '10%',
    height: '10px',
    marginBottom: '10px'
  },
  chipStyle: {
  margin: 4},
  wrapper: {
    flexWrap: 'wrap',
    marginBottom: '20px',
    marginLeft: '20%',
    marginRight: '20%',
    maxWidth: '600px'
  },
  CompTasksGrouper: {
    textAlign: 'center',
    display: 'flex'
  },
  inlineBlock: {
    display: 'inline-block',
    marginBottom: '10px'
  },
  inlineBlock2: {
    display:'inline-block'
  },
  parentStyle: {
    display: 'inline-block',
    textAlign: 'left'
  },
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block'
  },
};

class TaskList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      commentsExpanded: false,
      sortOption: "Category",
      taskComplete1: false,
      showCompletedTasks: true,
      snackbarOpen: false,
      categoriesExpanded: false
    }
    this.expandComments = this.expandComments.bind(this);
    this.expandCategories = this.expandCategories.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.snackbarClose = this.snackbarClose.bind(this);
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

  completeTask() {
    this.setState({taskComplete1: !this.state.taskComplete1})
    this.setState({snackbarOpen: !this.state.snackbarOpen})
  }

  snackbarClose() {
    this.setState({snackbarOpen: false})
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
      if(this.state.categoriesExpanded) {
      this.setState({categoriesExpanded: false})
    }
  }

  expandCategories() {
      this.setState({categoriesExpanded: !this.state.categoriesExpanded});
      if(this.state.commentsExpanded) {
        this.setState({commentsExpanded: false})
      }
  }

  render() {

    const today = new Date().toJSON();

    let commentItems = null;
    //this map doesn't work
    if (this.state.commentsExpanded) {
      commentItems =
          <TextField floatingLabelText="Add New Comment" />
          this.props.comments.map((comments) =>
          <div>
              <TextField defaultValue={comments.text} />
          </div>
    )};

  let categoryItems = null;
  //loop this for multiple categories
  if (this.state.categoriesExpanded) {
  categoryItems =
  <div>
    <div style={styles.inlineBlock2}>
      <Chip style={styles.chipStyle} backgroundColor={green500}>Difficulty</Chip>
    </div>
    <div style={styles.inlineBlock2}>
      <SelectField value="low"
      >
            <MenuItem value={1} primaryText="low" />
            <MenuItem value={2} primaryText="medium" />
            <MenuItem value={3} primaryText="high" />
      </SelectField>
    </div>
  </div>;
}

    const listItems = this.props.tasks.filter((item) => {
        if (this.state.showCompletedTasks) {
//this isn't working
        return item.parent_task!== null && item.goal_id ==this.props.route.goalID;

    }
       return item.parent_task!== null && item.complete == false && item.goal_id ==this.props.route.goalID;
          })
    .map((tasks) =>
    <div>
    <div style={styles.wrapper}>
      <Card>
          <div style={styles.parentStyle}>
              <div style={styles.checkboxCompleted}>
                {tasks.complete ? <Checkbox checked={true} /> : <Checkbox checked={false} onCheck={this.completeTask}/>}
              </div>
              <div style={styles.inlineBlock2}>
                <TextField style={styles.inlineBlock2} defaultValue={tasks.task_name} />
              </div>
          </div>
          <CardActions>
            {this.state.commentsExpanded ?
              <FlatButton icon={<ActionCommentOutline />}
                  label="comment"
                  onClick={this.expandComments}/>
              :
              <FlatButton icon={<ActionComment />}
                  label="comment"
                  onClick={this.expandComments}/>
            }
          <TaskMenu />
          <FlatButton icon={<Assignment />} label="categories" onClick={this.expandCategories}/>
          {today > tasks.scheduled ? <ActionWarning /> : <ScheduleButton />}

          </CardActions>
          {tasks.task_type =="task" ?
            <Chip style={styles.chipStyle} backgroundColor={green500}>Task</Chip>
            :    <Chip backgroundColor={grey500}>Supplemental</Chip>
          }
        {commentItems}
        {categoryItems}
        </Card>

        <Snackbar
          open={this.state.snackbarOpen}
          message="Nice work!"
          autoHideDuration={4000}
          action="undo"
          onActionTouchTap={this.completeTask}
          onRequestClose={this.snackbarClose}
        />
    </div>
    </div>
    );

    const goalNameFromComponent = this.props.goals.filter((item) => {
      return item.goal_id == this.props.route.goalID;
    })
    .map((goals) => <GoalName name={goals.goal_name} />
    );
//checkbox:
//https://facebook.github.io/jest/docs/tutorial-react.html
    return (
      <div className = 'App-page' >
        <div className = 'App-content'>
          <div className='Top-menu' style={styles.topMenu} >
              {goalNameFromComponent}
              <TaskListSortOptions />
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
              </div>
              <div>
              <MuiThemeProvider>
                <Card style={styles.background}>
                  <Divider />
                  {listItems}
                </Card>
              </MuiThemeProvider>
              </div>
          <br/>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
