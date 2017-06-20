import React from 'react';
import ScheduleButton from '../../components/ScheduleButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import ActionCommentOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import ActionComment from 'material-ui/svg-icons/communication/chat-bubble';
import Assignment from 'material-ui/svg-icons/action/assignment';
import DuplicateIcon from 'material-ui/svg-icons/content/content-copy';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ActionWarning from 'material-ui/svg-icons/alert/warning';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import { green500, grey500 } from 'material-ui/styles/colors';
import TaskMenu from '../../components/TaskMenu';
import CategoryItems from '../../components/CategoryItems';
import CommentItems from '../../components/CommentItems';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreMenu from 'material-ui/svg-icons/navigation/more-horiz';
import DialogComponent from '../Dialog';
import Dialog from 'material-ui/Dialog';
//test
//todo:
//textfield isn't updating when filter is changed, but H2 is
//same with comments etc
type Props = {
  taskName: String,
  taskID: Number,
  taskStatus: Boolean,
  taskScheduled: Date,
  commentText: String,
  categoryID1: Number,
  categoryID2: Number,
  categoryID3: Number,
  duplicateDialog: Boolean,
  openDuplicate: String
}

const styles={
  wrapper: {
    flexWrap: 'wrap',
    marginLeft: '20%',
    marginRight: '20%',
    maxWidth: '350px',
    display: 'inline-block',
    textAlign: 'left'
  },
  parentStyle: {
    display: 'inline-block',
    textAlign: 'left'
  },
  checkboxCompleted: {
    display: 'inline-block',
    height: '10px',
    position: 'absolute',
    paddingTop: '15px',
    marginLeft: '-20px'
  },
  inlineBlock2: {
    display:'inline-block'
  },
  textboxStyle: {
    display: 'inline-block',
    marginLeft: '20px'
  },
  textboxFontStyle: {
    fontSize: '14px'
  },
  chipStyle: {
  margin: 4},
  iconStyle: {
    minWidth: '40px',
    width: '40px'
  },
  divider: {
    color: 'rgb(0,0,0)'
  }
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
        taskStatusState: this.props.taskStatus,
        deleteDialog: false
      }
      this.completeTask = this.completeTask.bind(this);
      this.openComment = this.openComment.bind(this);
      this.openCategory = this.openCategory.bind(this);
      this.snackbarClose = this.snackbarClose.bind(this);
      this.openDelete = this.openDelete.bind(this);
    }

    openDelete() {
      this.setState({deleteDialog: true})
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
        this.setState({taskStatusState: false})
        this.setState({snackbarOpen: false})
      }
      this.setState({snackbarOpen: true})
      this.setState({taskStatusState: !this.state.taskStatusState})
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
        commentText,
        categoryID1,
        categoryID2,
        categoryID3,
        duplicateDialog,
        openDuplicate

      } = this.props;


      const today = new Date().toJSON();


      const taskCard =
      <div style={styles.wrapper}>

            <div style={styles.parentStyle}>
                <div style={styles.checkboxCompleted}>
                  <Checkbox checked={this.state.taskStatusState} onCheck={() =>this.completeTask(taskStatus)}/>
                </div>
                <div style={styles.inlineBlock2}>
                  <TextField
                  style={styles.textboxStyle}
                  inputStyle={styles.textboxFontStyle}
                  defaultValue={taskName}
                  multiLine={true}
                  rowsMax={4}
                  />

                </div>
            </div>
            <CardActions>
            <BottomNavigation>
                {this.state.commentOpen == taskID ?
                    <BottomNavigationItem style={styles.iconStyle} icon={<ActionCommentOutline />} onClick={() => this.openComment()} />
                :
                <BottomNavigationItem style={styles.iconStyle} icon={<ActionComment />} onClick={() => this.openComment(taskID)} />
                }
                {this.state.categoryOpen == taskID ?
                    <BottomNavigationItem style={styles.iconStyle} icon={<Assignment />} onClick={() => this.openCategory()}/>
                :
                    <BottomNavigationItem style={styles.iconStyle} icon={<Assignment  />} onlick={() => this.openCategory(taskID)}/>
                }
                {today > taskScheduled ?
                      <BottomNavigationItem style={styles.iconStyle} icon={<ActionWarning />} />
                  :
                      <ScheduleButton
                      scheduledDate= {taskScheduled}/>
                }
                <BottomNavigationItem style={styles.iconStyle} icon={<DuplicateIcon />} onTouchTap={this.props.openDuplicate}
                />
                <BottomNavigationItem style={styles.iconStyle} icon={<DeleteIcon/>} onClick={this.openDelete}/>
            </BottomNavigation>
            </CardActions>
            {this.state.commentOpen == taskID ?
            <CommentItems
            commentText = {commentText}
            /> : null }
            {this.state.categoryOpen == taskID ?
            <CategoryItems
            category_id_1= {categoryID1}
            category_id_2= {categoryID2}
            category_id_3= {categoryID3}
            /> : null }

          <Snackbar
            open={this.state.snackbarOpen}
            message="Nice work!"
            autoHideDuration={4000}
            action="undo"
            onActionTouchTap={this.completeTask}
            onRequestClose={this.snackbarClose}
          />
          <DialogComponent
            dialogText={'Would you like to duplicate this task?'}
            actionMore={'Duplicate'}
            actionClose={'Cancel'}
            dialogTitle={'Duplicate Task'}
            dialogOpen={this.props.duplicateDialog}
          />
          </div>

          ;

        return (
          <div>
              <Divider style={styles.divider}/>
              {taskCard}
          </div>
        )
    }
}


export default ListCard;
