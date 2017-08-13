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
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import logo from '../../../../../public/images/running.jpg';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import timerIcon from '../../../../../public/images/timer-sand-empty.png';
import difficultyIcon from '../../../../../public/images/difficulty icon.png';
import placeIcon from '../../../../../public/images/place.png';
import dueDateIcon from '../../../../../public/images/due date icon.png';

import SelectField from 'material-ui/SelectField';
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
  open: Boolean,
}

const styles={
  taskCard: {
  },
  cardMedia: {
    minWidth: '60%',
    maxWidth: '60%',
    display: 'inline-block',
    background: 'rgba(0, 0, 0, .6)' //not showing up
  },
  overlayContainerStyle: {
    height: '150px',
    minWidth: '60%',
    maxWidth: '60%',
    display: 'inline-block',
  },
  iconButton: {
    position: 'relative'
  },
  selectStyle: {
    width: '150px'
  }
}


class TaskCard extends React.Component {
    props: Props


    constructor(props){
      super(props)
      this.state= {
        open: this.props.open,
        duplicateID: null
      }
      this.Duplicate = this.Duplicate.bind(this);
      this.Delete = this.Delete.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
      this.setState({open:false})
    }
    Duplicate(task_id) {
        if(null == task_id) {
            this.setState({duplicateID: null})
        }
            this.setState({duplicateID: task_id})
    }

    Delete(task_id) {
        if(null == task_id) {
            this.setState({deleteID: null})
        }
            this.setState({deleteID: task_id})
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
        open
      } = this.props;

      const menuOptions =
      <div>
      <img src={dueDateIcon}/>
      {this.props.taskScheduled}
      <br/>
      <img src={difficultyIcon}/>
      <SelectField
        value={this.props.categoryID1}
        style={styles.selectStyle}
      >
        <MenuItem value={1} primaryText="Easy" />
        <MenuItem value={2} primaryText="Medium" />
        <MenuItem value={3} primaryText="Hard" />
      </SelectField>
      <br/>
      <img src={timerIcon}/>
      <SelectField
        value={this.props.categoryID2}
        style={styles.selectStyle}
      >
        <MenuItem value={1} primaryText="Less than 15 min" />
        <MenuItem value={2} primaryText="Less than 1 hour" />
        <MenuItem value={3} primaryText="1 - 4 hours" />
      </SelectField>
      <br/>
      <img src={placeIcon}/>
      <SelectField
        value={this.props.categoryID2}
        style={styles.selectStyle}
      >
        <MenuItem value={1} primaryText="At Home" />
        <MenuItem value={2} primaryText="While Commuting" />
        <MenuItem value={3} primaryText="While Doing Goal Activity" />
      </SelectField>
      </div>
      ;

      const taskCard2 =
      <div>
        <Dialog
          open={this.state.open}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
        >
          <IconMenu
     iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
     anchorOrigin={{horizontal: 'left', vertical: 'top'}}
     targetOrigin={{horizontal: 'left', vertical: 'top'}}
   >
     <MenuItem primaryText="Duplicate" leftIcon={<DuplicateIcon />} onClick={() => this.duplicate()}/>
     <MenuItem primaryText="Delete" leftIcon={<DeleteIcon />} onClick={() => this.delete()}/>
   </IconMenu>
          <Card style={styles.taskCard}>
              <CardMedia
               overlay={
                 <CardTitle
                    title={this.props.taskName}
                />}
                overlayStyle={styles.overlayContainerStyle}
               >
                  <img src={logo} style={styles.cardMedia}/>
              </CardMedia>
              <CardText>
                {menuOptions}
              </CardText>
          </Card>
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
