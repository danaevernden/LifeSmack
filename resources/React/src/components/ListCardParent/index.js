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
  goalID: Number,
  imageSrc: String
}

const styles={
  wrapper: {
    flexWrap: 'wrap',
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


class ListCardParent extends React.Component {
    props: Props

    constructor(props){
      super(props)
      this.state= {
        taskName: this.props.taskName,
        taskStatusState: this.props.taskStatus,
        }
      }


    render() {
      const {
        taskName,
        taskID,
        goalID,
        imageSrc
      } = this.props;

      const taskCard =
      <div style={styles.wrapper}>
            <div style={styles.parentStyle}>
            <a href={'/goal/' + goalID + '/' + taskID}>
              <Card
                style={styles.taskCardStyle}
              >
                  <CardText>
                      <img src={imageSrc} />
                      <div style={styles.inlineBlock2}>
                          {taskName}
                      </div>
                    </CardText>
                </Card>
                </a>
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


export default ListCardParent;

//old code
//        <Divider style={styles.divider}/>
