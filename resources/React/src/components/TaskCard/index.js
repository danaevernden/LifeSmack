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
import logo from '../../../../../public/images/running.jpg';
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
  handleDeleteTask: () => Promise<any>,
  addTaskToGoal: () => Promise<any>,
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
    textAlign: 'center'
  },
  dateTextStyle: {
    width: '380px'
  },
  iconStyle: {
    position: 'relative',
    marginBottom: '15px'
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

class TaskCard extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        open: this.props.open,
        duplicateID: null,
        deleteID: null,
        complete: this.props.complete,
        dateSelected: this.props.taskScheduled,
        valueDiff: this.props.categoryID1,
        valueTime: this.props.categoryID2,
        valueLoc: this.props.categoryID3,
        valueGoalID: this.props.goalID,
        valueName: null,
        event: {
          title: this.props.taskName,
          startTime: '2016-09-16T00:00:00-04:00',
          endTime: '2016-09-16T23:59:00-04:00',
          location: this.props.categoryID3
        }
      }
      this.addTaskToGoal = this.addTaskToGoal.bind(this);
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
        complete: true
      });
    }

    Duplicate(task_id) {
        if(null == task_id) {
            this.setState({duplicateID: null})
        }
            this.setState({duplicateID: task_id})
    }

    handleDeleteTask(task_Id) {
      const taskId = this.props.taskID;
      this.props.handleDeleteTask(task_Id)
      .then(() => {
        this.setState({
          deleteID: task_Id
        });
    });
    }

    editTask(task_Id) {
      this.props.editTask(task_Id,
        this.state.valueDiff,
        this.state.valueTime,
        this.state.valueLoc,
        this.state.complete)
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

    addTaskToGoal() {
      this.props.addTaskToGoal(
        this.state.valueName,
        this.state.valueDiff,
        this.state.valueTime,
        this.state.valueLoc,
        this.state.valueGoalID
      )
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
        open
      } = this.props;

      const newDate =  new Date();
      newDate.setFullYear(newDate.getFullYear() - 1);
      newDate.setHours(0, 0, 0, 0);


      const menuOptions =
      <div style={{marginTop:'-30px'}}>
      {this.props.type == "addTask" ? null :
          <Checkbox
            label="Complete?"
            checked={this.state.complete}
            style={styles.completeStyle}
            labelStyle={styles.completeStyle.label}
            iconStyle={styles.completeStyle.icon}
            onCheck={this.completeTask}
          />
      }
      <ActionDueDate style={styles.iconStyleSched}/>
      <DatePicker
          onChange={this.dateSelect}
          style={styles.dateTextStyle}
            defaultDate={newDate}
            textFieldStyle={{paddingLeft:'30px'}}
          />
      <br style={{display: 'block', margin: '-5px 0'}}/>
      <PollIcon style={styles.iconStylePoll}/>
      <SelectField
        value={this.state.valueDiff == null ? 0 : this.state.valueDiff}
        style={styles.selectStyle}
        onChange={this.handleChangeDiff}
        underlineStyle={styles.dropdownWidth}
        menuStyle={styles.dropdownWidth}
        style={styles.dropdownPos}
        hintText="Difficulty"
      >
        <MenuItem value={0} primaryText="." />
        <MenuItem value={1} primaryText="Easy" />
        <MenuItem value={2} primaryText="Medium" />
        <MenuItem value={3} primaryText="Hard" />
      </SelectField>
      <br style={{display:'block', marginTop:'-30px'}}/>
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
        <MenuItem value={6} primaryText="Less than 15 min" />
        <MenuItem value={7} primaryText="Less than 1 hour" />
        <MenuItem value={8} primaryText="1 - 4 hours" />
      </SelectField>
      <br style={{display:'block', marginTop:'-15px'}}/>
        <PlaceIcon style={styles.iconStyle}/>
      <SelectField
        value={this.state.valueLoc == null ? 0 : this.state.valueLoc}
        style={styles.selectStyle}
        onChange={this.handleChangeLoc}
        underlineStyle={styles.dropdownWidth}
        menuStyle={styles.dropdownWidth}
        style={styles.dropdownPos}
        hintText="Location"
      >
        <MenuItem value={0} primaryText="." />
        <MenuItem value={9} primaryText="At Home" />
        <MenuItem value={10} primaryText="While Commuting" />
        <MenuItem value={11} primaryText="While Doing Goal Activity" />
      </SelectField>

      </div>
      ;

      const taskCard2 =
      <div>
        <Dialog
          open={open}
          autoScrollBodyContent={true}
          onRequestClose={this.onClose}
          contentStyle={styles.contentStyle}
          bodyStyle={styles.contentStyle2}
          onRequestClose={onClose}
        >
        {this.props.type == "addTask" ? null :
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
              {this.taskType = "addTask" ?
                <RaisedButton
                  label="SAVE"
                  primary={true}
                  keyboardFocused={true}
                  onClick={this.addTaskToGoal}
                />
              :
                <RaisedButton
                  label="ADD TASK"
                  primary={true}
                  keyboardFocused={true}
                  onClick={this.editTask}
                />
              }
              {this.state.test}
              <div style={{paddingTop:'60px'}}/>
          </Dialog>
      </div>;

        return (
          <div>
              {taskCard2}
          </div>
        )
    }
}

export default TaskCard;

/*https://jasonsalzman.github.io/react-add-to-calendar/*/
