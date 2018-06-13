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
import ActionDueDate from 'material-ui/svg-icons/action/date-range';
import PollIcon from 'material-ui/svg-icons/social/poll';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import logo from '../../../../../public/images/nice_background.jpeg';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import timerIcon from '../../../../../public/images/timer-sand-empty.png';
import difficultyIcon from '../../../../../public/images/difficulty icon.png';
import locationIcon from '../../../../../public/images/place.png';
import dueDateIcon from '../../../../../public/images/due date icon.png';
import SelectField from 'material-ui/SelectField';
import AddToCalendar from 'react-add-to-calendar';

import RaisedButton from 'material-ui/RaisedButton';

type Props = {
  taskName: String,
  taskID: Number,
  taskStatus: Boolean,
  taskScheduled: Date,
  commentText: String,
  categoryID1: Number,
  categoryID2: Number,
  categoryID3: Number,
  goalID: Number,
  complete: Boolean,
  type: String,
  open: Boolean,
  snackbar: Boolean,
  handleDeleteTask: () => Promise<any>,
  addGoal: () => Promise<any>,
  editTask: () => Promise<any>
}

const styles={
  cardMedia: {
    minWidth: '100%',
    maxWidth: '100%',
    width: '100%',
    display: 'inline-block',
    background: 'rgba(0, 0, 0, .6)' //not showing up
  },
  overlayContainerStyle: {
    height: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    display: 'inline-block',
  },
  iconButton: {
    position: 'absolute',
    display: 'flex'
  },
  selectStyle: {
    width: '130px'
  },
  contentStyle: {
    maxHeight: 'none',
    transform: 'none',
    width: '50%',
  },
  contentStyle2: {
    padding: '0px'
  },
  dropdownWidth: {
    width: '250px',
    textAlign: 'center',
    marginTop: '20px'
  },
  dateTextStyle: {
    width: '380px'
  },
  iconStyle: {
    position: 'relative',
    marginBottom: '35px'
  },
  completeStyle: {
    marginBottom: '-30px',
    marginTop: '30px',
    icon: {
      marginLeft: '50px'
    },
    label: {
      width: '225px'
    }
  },
  dropdownPos: {
    marginRight: '0%'
  },
  iconStylePoll: {
    position: 'relative',
    marginBottom: '15px'
  },
  iconStyleSched: {
    marginRight: '250px',
    position: 'relative',
    marginBottom: '-40px'
  },
  textStyle: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
}

class GoalCard extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        open: this.props.open,
        snackbar: true,
        snackbar2: false,
        duplicateID: null,
        deleteID: null,
        taskID: this.props.taskID,
        complete: this.props.complete,
        dateSelected: this.props.taskScheduled,
        valueDiff: this.props.categoryID1,
        valueTime: this.props.categoryID2,
        valueLoc: this.props.categoryID3,
        valueGoalID: this.props.goalID,
        valueName: this.props.taskName,
        event: {
          title: this.props.taskName,
          startTime: '2016-09-16T00:00:00-04:00',
          endTime: '2016-09-16T23:59:00-04:00',
          location: this.props.categoryID3
        }
      }
      this.openSnackbar2 = this.openSnackbar2.bind(this);
      this.openSnackbar = this.openSnackbar.bind(this);
      this.closeSnackbar = this.closeSnackbar.bind(this);
      this.onClose = this.onClose.bind(this);
      this.addGoal = this.addGoal.bind(this);
      this.completeTask = this.completeTask.bind(this);
      this.Duplicate = this.Duplicate.bind(this);
      this.handleDeleteTask = this.handleDeleteTask.bind(this);
      this.dateSelect = this.dateSelect.bind(this);
      this.handleChangeDiff = this.handleChangeDiff.bind(this);
      this.handeChangeTime = this.handleChangeTime.bind(this);
      this.handleChangeLoc = this.handleChangeLoc.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.editTask = this.editTask.bind(this);
    }

    completeTask(task_Id) {
      this.setState({
        complete: !this.state.complete
      });
      console.log(this.state.complete);
    }

    Duplicate(task_id) {
        if(null == task_id) {
            this.setState({duplicateID: null})
        }
            this.setState({duplicateID: task_id})
    }

    handleDeleteTask(task_Id) {
      const taskId = this.props.taskID;
      return this.props.handleDeleteTask(task_Id)
    }

    addGoal() {
      console.log(this.state.valueName);
      this.props.addGoal(
        this.state.valueName,
        this.state.valueTime
      );
        this.setState({snackbar: true});
      console.log("test2");
      console.log(this.state.snackbar);
    }

    editTask() {
      console.log("test");
      console.log(this.state.valueGoalID);
      this.props.editTask(
        this.state.taskID,
        this.state.valueName,
        this.state.valueDiff,
        this.state.valueTime,
        this.state.valueLoc,
        this.state.valueGoalID)
    }

    handleChangeDiff(event, index, value) {
      this.setState({
        valueDiff: value
      })
      this.props.editTask(
        3,
        this.state.valueDiff
      )
    }

    handleChangeTime = (event, index, value) =>
      this.setState({
        valueTime: value
      });

    handleChangeLoc = (event, index, value) =>
      this.setState({
        valueLoc: value
      });

  handleChangeName = (event, title) =>
    this.setState({
      valueName: title
    });

    dateSelect = (event, date) => {
      this.setState({
        dateSelected: date,
      });
    };


    closeSnackbar() {
      this.props.closeSnackbar();
      this.setState({
        snackbar: false,
      });
    };


    openSnackbar() {
      this.openSnackbar2();
      this.addTaskToGoal();
    };

    openSnackbar2() {
      this.setState({snackbar: true})
    }

    onClose() {
      this.setState({
        open: false
      })
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
        goalID,
        complete,
        onClose,
        openSnackbar,
        open,
        snackbar
      } = this.props;

      const newDate =  new Date();
      newDate.setFullYear(newDate.getFullYear() - 1);
      newDate.setHours(0, 0, 0, 0);


      const menuOptions =
      <div style={{marginTop:'-30px'}}>

      <ActionDueDate style={styles.iconStyleSched}/>
      <DatePicker
          onChange={this.dateSelect}
          style={styles.dateTextStyle}
            defaultDate={newDate}
            textFieldStyle={{paddingLeft:'30px'}}
          />
      <br style={{display: 'block', margin: '-5px 0'}}/>

      <br style={{display:'block', marginTop:'-15px'}}/>
      <ActionSchedule style={styles.iconStyle}/>
      <SelectField
        value={this.state.valueTime == null ? 0 : this.state.valueTime}
        style={styles.selectStyle}
        onChange={this.handleChangeTime}
        underlineStyle={styles.dropdownWidth}
        menuStyle={styles.dropdownWidth}
        style={styles.dropdownPos}
        hintText="Time Required"
      >
        <MenuItem value={0} primaryText="." />
        <MenuItem value={6} primaryText="Less than 6 months" />
        <MenuItem value={7} primaryText="Less than a year" />
        <MenuItem value={8} primaryText="Ongling" />
      </SelectField>
      <br style={{display:'block', marginTop:'-15px'}}/>
      </div>
      ;

      const taskCard2 =
      <div>
        <Dialog
          open={this.state.open}
          autoScrollBodyContent={true}
          onRequestClose={this.onClose}
          contentStyle={styles.contentStyle}
          bodyStyle={styles.contentStyle2}
        >
        {this.props.type == "addGoal" ? null :
          <div>

            <IconMenu style={styles.iconButton}
               iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
               anchorOrigin={{horizontal: 'left', vertical: 'top'}}
               targetOrigin={{horizontal: 'left', vertical: 'top'}}
             >
             <MenuItem primaryText="Duplicate" leftIcon={<DuplicateIcon />} onClick={() => this.duplicate()}/>
             <MenuItem primaryText="Delete" leftIcon={<DeleteIcon />} onClick={() => this.handleDeleteTask(taskID)}/>
           </IconMenu>
         </div>

         }
              <CardMedia
               overlay={

                 <TextField
                    defaultValue={this.props.taskName}
                    inputStyle={styles.textStyle}
                    fullWidth={true}
                    onChange={this.handleChangeName}

                />}
                overlayStyle={styles.overlayContainerStyle}
                 >
                  <img src={logo} style={styles.cardMedia}/>
              </CardMedia>
              <CardText>
                {menuOptions}
              </CardText>
              {this.props.type == "addGoal" ?
                <RaisedButton
                  label="ADD GOAL"
                  primary={true}
                  keyboardFocused={true}
                  onClick={this.addGoal}
                />

              :
              <RaisedButton
                label="SAVE"
                primary={true}
                keyboardFocused={true}
                onClick={this.editTask}
              />
              }
              {this.state.test}
              <div style={{paddingTop:'60px'}}/>
          </Dialog>
      </div>;

      const snackbarConst =
      <Snackbar
        open={this.state.snackbar}
        autoHideDuration={400000}
        message="Task added!"
        onRequestClose={this.closeSnackbar}
      />
      ;

        return (
          <div>
              {taskCard2}
              {snackbarConst}
          </div>
        )
    }
}

export default GoalCard;

/*https://jasonsalzman.github.io/react-add-to-calendar/*/
