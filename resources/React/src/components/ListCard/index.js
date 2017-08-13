import React from 'react';
import CardActions from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import ActionCommentOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import ActionComment from 'material-ui/svg-icons/communication/chat-bubble';
import Assignment from 'material-ui/svg-icons/action/assignment';
import DuplicateIcon from 'material-ui/svg-icons/content/content-copy';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ActionWarning from 'material-ui/svg-icons/alert/warning';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import CategoryItems from '../../components/CategoryItems';
import CommentItems from '../../components/CommentItems';
import Divider from 'material-ui/Divider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import RaisedButton from 'material-ui/RaisedButton';
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
  handleDeleteTask: () => Promise<any>,
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
    width: '40px',
    zIndex: 'unset'
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
        deleteDialog: null,
        duplicateDialog: null,
        schedulerDialog: null,
        dialogName: null
      }
      this.completeTask = this.completeTask.bind(this);
      this.openComment = this.openComment.bind(this);
      this.openCategory = this.openCategory.bind(this);
      this.snackbarClose = this.snackbarClose.bind(this);
      this.openDelete = this.openDelete.bind(this);
      this.openDuplicate = this.openDuplicate.bind(this);
      this.openScheduler = this.openScheduler.bind(this);
      this.closeDialog = this.closeDialog.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    closeDialog(actionName) {
      if(actionName == "delete") {
        this.setState({deleteDialog: false});
      }
      if(actionName == "scheduler") {
        this.setState({schedulerDialog: false});
      }
      if(actionName == "duplicate") {
        this.setState({duplicateDialog: false});
      }
    }

    openScheduler(task_id) {
        if(null == task_id) {
            this.setState({schedulerDialog: null})
        }
            this.setState({schedulerDialog: task_id})
            this.setState({dialogName: "scheduler"})
    }
    openDuplicate(task_id) {
        if(null == task_id) {
            this.setState({duplicateDialog: null})
        }
            this.setState({duplicateDialog: task_id})
            this.setState({dialogName: "duplicate"})
    }
    openDelete(task_id) {
        if(null == task_id) {
            this.setState({deleteDialog: null})
        }
            this.setState({deleteDialog: task_id})
            this.setState({dialogName: "delete"})
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
      if(taskStatusPass === true) {
        this.setState({taskStatusState: false})
        this.setState({snackbarOpen: false})
      }
      this.setState({snackbarOpen: true})
      this.setState({taskStatusState: !this.state.taskStatusState})
    }
    snackbarClose() {
      this.setState({snackbarOpen: false})
    }
    handleDelete() {
      this.props.handleDeleteTask
      .then(() => {
        this.setState({
          deleteDialog: false,
        });
    });
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

      } = this.props;


      const today = new Date().toJSON();

      const dialogActions =[
        <RaisedButton
          label="OK"
          primary={true}
          keyboardFocused={true}
          onTouchTap={() => this.handleDelete}
        />,
        /*this isn't working*/
        <RaisedButton
          label="Cancel"
          primary={true}
          keyboardFocused={true}
          onTouchTap={() => this.closeDialog(this.state.dialogName)}
        />,
      ];

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
                  {taskScheduled}
                </div>
            </div>
            <CardActions>
            <BottomNavigation>
                {this.state.commentOpen === taskID ?
                    <BottomNavigationItem style={styles.iconStyle} icon={<ActionCommentOutline />} onClick={() => this.openComment()} />
                :
                <BottomNavigationItem style={styles.iconStyle} icon={<ActionComment />} onClick={() => this.openComment(taskID)} />
                }
                {this.state.categoryOpen === taskID ?
                    <BottomNavigationItem style={styles.iconStyle} icon={<Assignment />} onClick={() => this.openCategory()}/>
                :
                    <BottomNavigationItem style={styles.iconStyle} icon={<Assignment  />} onlick={() => this.openCategory(taskID)}/>
                }

                {this.state.schedulerDialog === taskID ?
                    [(today > taskScheduled ?
                      <BottomNavigationItem style={styles.iconStyle} icon={<ActionWarning />} onClick={() => this.openScheduler()} />
                      :
                      <BottomNavigationItem style={styles.iconStyle} icon={<ActionSchedule />} onClick={() => this.openScheduler()} />
                    )]
                :
                    [(today > taskScheduled ?
                      <BottomNavigationItem style={styles.iconStyle} icon={<ActionWarning />} onClick={() => this.openScheduler(taskID)} />
                      :
                      <BottomNavigationItem style={styles.iconStyle} icon={<ActionSchedule />} onClick={() => this.openScheduler(taskID)} />
                    )]
                }
                {this.state.duplicateDialog === taskID ?
                    <BottomNavigationItem style={styles.iconStyle} icon={<DuplicateIcon />} onClick={() => this.openDuplicate()} />
                :
                    <BottomNavigationItem style={styles.iconStyle} icon={<DuplicateIcon />} onClick={() => this.openDuplicate(taskID)} />
                }
                {this.state.deleteDialog === taskID ?
                    <BottomNavigationItem style={styles.iconStyle} icon={<DeleteIcon />} onClick={() => this.openDelete()} />
                :
                    <BottomNavigationItem style={styles.iconStyle} icon={<DeleteIcon />} onClick={() => this.openDelete(taskID)} />
                }
            </BottomNavigation>
            </CardActions>
            {this.state.commentOpen === taskID ?
            <CommentItems
            commentText={commentText}
            /> : null }
            {this.state.categoryOpen === taskID ?
            <CategoryItems
            category_id_1={categoryID1}
            category_id_2={categoryID2}
            category_id_3={categoryID3}
            /> : null }

          <Snackbar
            open={this.state.snackbarOpen}
            message="Nice work!"
            autoHideDuration={4000}
            action="undo"
            onActionTouchTap={this.completeTask}
            onRequestClose={this.snackbarClose}
          />

          <Dialog title="Schedule this task"
          actions={dialogActions}
          modal={false}
          open={this.state.schedulerDialog}
          onRequestClose={() => this.closeDialog("scheduler")}>
          <DatePicker/>
          </Dialog>

          <Dialog title="Are you sure you want to delete this task?"
          actions={dialogActions}
          modal={false}
          open={this.state.deleteDialog}
          onRequestClose={() => this.closeDialog("delete")}>
          </Dialog>

          <Dialog title="Are you sure you want to duplicate this task?"
          actions={dialogActions}
          modal={false}
          open={this.state.duplicateDialog}
          onRequestClose={() => this.closeDialog("duplicate")}>
          </Dialog>

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
