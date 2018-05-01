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
import redIncomTask from '../../../../../public/images/incomplete marketplace task icon.png';

type Props = {
  taskName: String,
  taskID: Number,
  goalID: Number,
  taskStatus: Boolean,
  taskScheduled: Date,
  commentText: String,
  categoryID1: Number,
  categoryID2: Number,
  categoryID3: Number,
  complete: Boolean,
  taskType: String,
  handleDeleteTask: () => Promise<any>,
  editTask: () => Promise<any>
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
  taskLabelStyle: {
    display:'ruby-text-container'
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

    onClose = () => {
          this.setState({taskCard: null})
    }
    render() {
      const {
        handleDeleteTask,
        editTask,
        taskName,
        taskType,
        taskID,
        goalID,
        taskStatus,
        taskScheduled,
        commentText,
        categoryID1,
        categoryID2,
        categoryID3,
        complete
      } = this.props;

      const CatID1 =
      <div>
      {this.props.categoryID1 == 2?
        <div>medium</div>:
        [this.props.categoryID1 == 1?
          <div>low</div>:
          [this.props.categoryID1 == 3 ?
          <div>high</div>:<div></div>]
        ]
      }
      </div>;

      const CatID2 =
      <div>
      {this.props.categoryID2 == 6?
        <div>>15 min</div>:
        [this.props.categoryID2 == 7?
          <div>1 hour</div>:
          [this.props.categoryID2 == 8?
          <div>1-4 hours</div>:<div></div>
          ]
        ]
      }
      </div>;

      const CatID3 =
      <div>
      {this.props.categoryID3 == 9?
        <div>at home</div>:
        [this.props.categoryID3 == 10?
          <div>while out</div>:
          [this.props.categoryID3 == 11?
            <div>doing the thing</div>:<div></div>
          ]
        ]
      }

      </div>;

      const bottomNav =
      <div>
      {this.props.taskType === "marketplaceTask" ?
      null :
      <BottomNavigation>
          <BottomNavigationItem
          label={CatID1}
          icon={<PollIcon />}
          />
          <BottomNavigationItem
          label={CatID2}
          icon={<ActionSchedule/>}
          />
          <BottomNavigationItem
          label={CatID3}
          icon={<PlaceIcon/>}
          />
      </BottomNavigation>
    }
      </div>;

      const today = new Date().toJSON();

      const taskCard =
      <div style={styles.wrapper}>
              <Card style={styles.taskCardStyle}
              onClick={() => this.openTaskCard(taskID)}>
                  <CardText>
                    <img src={redIncomTask} style={{paddingRight:'20px'}} />
                    <div style={styles.taskLabelStyle}>
                        {taskName}
                    </div>
                  </CardText>
                  <CardActions>
                      {bottomNav}
                  </CardActions>
                </Card>
                {this.state.taskCard === taskID ?
                  <TaskCard
                  taskID={taskID}
                  goalID={this.props.goalID}
                  open={this.state.taskCard}
                  onClose={this.onClose}
                  taskName={taskName}
                  complete={this.props.complete}
                  categoryID1={this.props.categoryID1}
                  categoryID2={this.props.categoryID2}
                  categoryID3={this.props.categoryID3}
                  complete={this.props.complete}
                  taskScheduled={null}
                  taskType={"existingTask"}
                  handleDeleteTask={handleDeleteTask}
                  editTask={editTask}
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

export default ListCard;
