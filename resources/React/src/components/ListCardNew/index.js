import React from 'react';
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
import {Card,CardText,CardActions} from 'material-ui/Card';
import incomTask from '../../../../../public/images/incomplete task icon.png';
import ComTask from '../../../../../public/images/completed task icon.png';
import TaskCard from '../TaskCard';
import difficultyIcon from '../../../../../public/images/difficulty icon.png';
import placeIcon from '../../../../../public/images/place.png';
import dueDateIcon from '../../../../../public/images/due date icon.png';

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
  taskCardStyle: {
    width: '400px'
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


class ListCardNew extends React.Component {
    props: Props


    constructor(props){
      super(props)
      this.state= {
        taskName: this.props.taskName,
        taskStatusState: this.props.taskStatus,
        taskCard: null
      }
      this.openTaskCard = this.openTaskCard.bind(this);
      }

    openTaskCard(task_id) {
        if(null == task_id) {
            this.setState({taskCard: null})
        }
            this.setState({taskCard: task_id})
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

      const bottomNav =
      <div>
      <BottomNavigation>
          <BottomNavigationItem
          label={'hard'}
          icon={<difficultyIcon />}
          />
          <BottomNavigationItem
          label={'less than 1 hour'}
          icon={<timerIcon/>}
          />
          <BottomNavigationItem
          label={'at home'}
          icon={<placeIcon/>}
          />
      </BottomNavigation>
      </div>;

      const taskCard =
      <div style={styles.wrapper}>

            <div style={styles.parentStyle}>
              <Card style={styles.taskCardStyle}>
                  <CardText
                  onClick={() => this.openTaskCard(taskID)}>
                      <img src={incomTask} checked={this.state.taskStatusState} onClick={() =>this.completeTask(taskStatus)}/>
                      <div style={styles.inlineBlock2}>
                          {taskName}
                      </div>
                    </CardText>
                    <CardActions>
                        {bottomNav}
                    </CardActions>
                </Card>
                {this.state.taskCard === taskID ?
                  <TaskCard
                  open={this.state.taskCard}
                  taskName={taskName}
                  categoryID1={categoryID1}
                  categoryID2={categoryID1}
                  categoryID3={categoryID1}
                  taskScheduled={'Thursday December 1'}
                  />
                    :
                null
                }
            </div>
          </div>
          ;

        return (
          <div>
              {taskCard}
          </div>
        )
    }
}


export default ListCardNew;

//old code
//        <Divider style={styles.divider}/>
