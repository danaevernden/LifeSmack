import React from 'react';
import CategoryItems from '../../components/CategoryItems';
import CommentItems from '../../components/CommentItems';
import Divider from 'material-ui/Divider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import PollIcon from 'material-ui/svg-icons/social/poll';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import {Card,CardText,CardActions} from 'material-ui/Card';
import TaskCard from '../TaskCard';

type Props = {
  taskName: String,
  taskID: Number,
  taskStatus: Boolean,
  taskScheduled: Date,
  commentText: String,
  categoryID1: Number,
  categoryID2: Number,
  categoryID3: Number,
  imageSrc: String,
  handleDeleteTask: () => Promise<any>,
}

const styles={
  wrapper: {
    flexWrap: 'wrap',
    maxWidth: '350px',
    display: 'inline-block',
    textAlign: 'left'
  },
  taskCardStyle: {
    width: '375px'
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


class ListCardMarketTasksNew extends React.Component {
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
        imageSrc
      } = this.props;

      const bottomNav =
      <div>
      <BottomNavigation>
          <BottomNavigationItem
          label={categoryID1}
          icon={<PollIcon />}
          />
          <BottomNavigationItem
          label={categoryID2}
          icon={<ActionSchedule/>}
          />
          <BottomNavigationItem
          label={categoryID3}
          icon={<PlaceIcon/>}
          />
      </BottomNavigation>
      </div>;

      const today = new Date().toJSON();

      const taskCard =
      <div style={styles.wrapper}>
              <Card style={styles.taskCardStyle}>
                  <CardText
                      onClick={() => this.openTaskCard(taskID)}>
                      {imageSrc}
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
                  categoryID2={categoryID2}
                  categoryID3={categoryID3}
                  taskScheduled={null}
                  />
                    :
                  null
                }
        </div>
          ;

        return (
          <div>
              {taskCard}
          </div>
        )
    }
}

export default ListCardMarketTasksNew;
