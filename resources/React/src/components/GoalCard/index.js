import React from 'react';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ActionDueDate from 'material-ui/svg-icons/action/date-range';
import {CardText, CardMedia} from 'material-ui/Card';
import logo from '../../../../../public/images/nice_background.jpeg';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';

type Props = {
  taskName: String,
  taskID: Number,
  taskScheduled: Date,
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
    textAlign: 'center'
  },
  iconStyle: {
    position: 'relative',
    marginBottom: '-37px'
  },
  checkboxStyle: {
    marginBottom: '-20px',
    marginTop: '30px',
    marginLeft: '7px',
    position: 'relative',
    display: 'inline-block',

    label: {
      width: '85px'
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
  textFieldStyle: {
    paddingLeft:'10px',
    display: 'inline-block',
    width: '230px'
  }
}

class GoalCard extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        open: this.props.open,
        snackbar: false,
        duplicateID: null,
        deleteID: null,
        taskID: this.props.taskID,
        complete: this.props.complete,
        dateSelected: this.props.taskScheduled,
        valueTime: 0,
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
      this.handleDeleteTask = this.handleDeleteTask.bind(this);
      this.dateSelect = this.dateSelect.bind(this);
      this.handeChangeTime = this.handleChangeTime.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.editTask = this.editTask.bind(this);
    }

    completeTask(task_Id) {
      this.setState({
        complete: !this.state.complete
      });
      console.log(this.state.complete);
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
        this.setState({open: false});
      console.log("test2");
      console.log(this.state.snackbar);
      console.log(this.state.valueTime);
    }

    editTask() {
      console.log("test");
      console.log(this.state.valueGoalID);
      this.props.editTask(
        this.state.taskID,
        this.state.valueName,
        this.state.valueTime,
        this.state.valueGoalID)
    }

    handleChangeTime = (event, index, value) =>
      this.setState({
        valueTime: value
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
        taskScheduled,
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
        value={this.state.valueTime === null ? 0 : this.state.valueTime}
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
        {this.props.type === "addGoal" ? null :
          <div>

            <IconMenu style={styles.iconButton}
               iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
               anchorOrigin={{horizontal: 'left', vertical: 'top'}}
               targetOrigin={{horizontal: 'left', vertical: 'top'}}
             >
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
                  <img role="presentation" src={logo} style={styles.cardMedia}/>
              </CardMedia>
              <CardText>
                {menuOptions}
              </CardText>
              {this.props.type === "addGoal" ?
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
        message="Goal added!"
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
