import React from 'react';
import ActionWarning from 'material-ui/svg-icons/alert/warning';
import ScheduleButton from '../../components/ScheduleButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import ActionCommentOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import ActionComment from 'material-ui/svg-icons/communication/chat-bubble';
import Assignment from 'material-ui/svg-icons/action/assignment';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import { green500, grey500 } from 'material-ui/styles/colors';
import TaskMenu from '../../components/TaskMenu';
import CategoryItems from '../../components/CategoryItems';
import CommentItems from '../../components/CommentItems';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

//todo:
//textfield isn't updating when filter is changed, but H2 is
//same with comments etc
type Props = {
  taskName: String,
  taskID: Number,
  taskStatus: Boolean,
  taskScheduled: Date,
  taskType: String,
  commentText: String,
  categoryID1: Number,
  categoryID2: Number
}

const styles={
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
    width: '10%',
    height: '10px',
    marginBottom: '10px'
  },
  inlineBlock2: {
    display:'inline-block'
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
}


class ListCard extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        snackbarOpen: false,
        commentOpen: null,
        categoryOpen: null,
        taskName: this.props.taskName,
        taskStatus: this.props.taskStatus
      }
      this.completeTask = this.completeTask.bind(this);
      this.openComment = this.openComment.bind(this);
      this.openCategory = this.openCategory.bind(this);
      this.snackbarClose = this.snackbarClose.bind(this);
    }


    openComment(task_id) {
      if(null == task_id) {
      this.setState({commentOpen: null})
    }
      this.setState({commentOpen: task_id})
    }
    openCategory(task_id) {
      if(null == task_id) {
      this.setState({categoryOpen: null})
    }
      this.setState({categoryOpen: task_id})
    }
    completeTask(taskStatusPass) {
      if(taskStatusPass == true) {
        this.setState({taskStatus: false})
        this.setState({snackbarOpen: false})
      }
      this.setState({snackbarOpen: true})
      this.setState({taskStatus: !this.state.taskStatus})
    }
    snackbarClose() {
      this.setState({snackbarOpen: false})
    }

    render() {
      const {
        taskName,
        taskID,
        taskStatus,
        taskScheduled,
        taskType,
        commentText,
        categoryID1,
        categoryID2

      } = this.props;


      const today = new Date().toJSON();

      const taskCard =
      <div style={styles.wrapper}>
        <Card>
            <div style={styles.parentStyle}>
                <div style={styles.checkboxCompleted}>
                  <Checkbox checked={this.state.taskStatus} onCheck={() =>this.completeTask(taskStatus)}/>
                </div>
                <div style={styles.inlineBlock2}>
                <h2>{taskName}</h2>

                  <TextField style={styles.inlineBlock2} defaultValue={taskName} />
                </div>
            </div>
            <CardActions>
            {this.state.commentOpen == taskID ?
                <FlatButton icon={<ActionCommentOutline />} onClick={() => this.openComment()}
                    label="comment"
                />
            :
                <FlatButton icon={<ActionComment />} onClick={() =>this.openComment(taskID)}
                    label="comment"
                />
            }
                <TaskMenu />
            {this.state.categoryOpen == taskID ?
                <FlatButton icon={<Assignment />} label="categories" onClick={() => this.openCategory()}/>
            :
                <FlatButton icon={<Assignment />} label="categories" onClick={() => this.openCategory(taskID)}/>
            }
            {today > taskScheduled ?
              <IconButton tooltip={taskScheduled}>
                <ActionWarning/>
              </IconButton>
              : <ScheduleButton
              scheduledDate= {taskScheduled}/>
            }
            </CardActions>
            {
               "task" == taskType ?
              <Chip style={styles.chipStyle} backgroundColor={green500}>Task</Chip>
              :    <Chip backgroundColor={grey500}>Supplemental</Chip>
            }
            {this.state.commentOpen == taskID ?
            <CommentItems
            commentText = {commentText}
            /> : null }
            {this.state.categoryOpen == taskID ?
            <CategoryItems
            category_id_1= {categoryID1}
            category_id_2= {categoryID2}
            /> : null }
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
          ;

        return (
          <div>
              <Divider />
              {taskCard}
          </div>
        )
    }
}


export default ListCard;
