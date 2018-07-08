import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Layout from '../../Layout';
import ListCard from '../../../components/ListCard';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import ComedyPic from '../../../../../../public/images/comedy.jpg';
import Running from '../../../../../../public/images/running.jpg';
import Programming from '../../../../../../public/images/programming.jpg';
import NiceBackground from '../../../../../../public/images/nice_background.jpeg';
import logo from '../../../../../../public/images/running.jpg';
import AddGoal from '../../../components/AddGoal';


const styles = {
    background: {
        backgroundColor: 'rgb(233,235,238)'
    },
    goalList: {
      textAlign:'left',
      height:'14px',
      fontSize: '14px',
      padding: '0px'
    },
    cardStyle: {
        flexWrap: 'wrap',
        marginLeft: '20%',
        marginRight: '20%',
        maxWidth: '350px',
        display: 'inline-block',
        textAlign: 'left'
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 400,
      overflowY: 'auto',
    },
    cardStyle2: {
      boxSizing: 'border-box',
      padding: '2px',
      height: '184px'
    },
    addGoalButton: {

    }
};

type Props = {
  fetchGoalsFromActions: () => void,
  goals: Goal[],
  fetchTasksFromActions: () => void,
  tasks: Task[],
  fetchProfileFromActions: () => void,
  users: User[]
}

class GoalList extends React.Component{

  static defaultProps: {
    goals: Goal[],
    tasks: Task[],
    users: User[]
  };

  componentDidMount() {
    this.props.fetchGoalsFromActions();
    this.props.fetchTasksFromActions();
    this.props.fetchProfileFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
    }
    this.addGoal = this.addGoal.bind(this);
    }

    addGoal(goalname, catid1) {
      this.props.addGoal(goalname, catid1)
    }

  render() {

    const {
      goals,
      tasks,
      users
    } = this.props;

    const avatarLogo =
          <Avatar src={logo}/>
    ;

//http://andrewhfarmer.com/react-image-gallery/
    //errors if filtering on tasks
    const allTasks = tasks.filter((item) => {
      return item.parent_id !== null;
    })
    .map((task) =>
    <div key={task.id} >
      <ListCard
        taskID={task.id}
        taskName={task.task_name}
        taskStatus={task.complete}
        taskScheduled={task.scheduled}
        imageSrc={avatarLogo}
        categoryID1={task.category_id_1}
        categoryID2={task.category_id_2}
        categoryID3={task.category_id_3}
      />
    </div>
  );

    const listItems2 = (
      <div style={styles.root}>
        <GridList
          cols={1}
          cellHeight={180}
          style={styles.gridList}
        >
        {goals.filter((item) => {
          return item.user_id === 1;
        })
          .map((goal) => (

          <a key={goal.id} href={'/goal/' + goal.id}>
            <GridTile
              key={goal.id}
              title={goal.goal_name}
            >
            {goal.id === 1?
              <img key={goal.id} role="presentation" src={Programming} />
              : [goal.id === 2 ?
                <img key={goal.id} role="presentation" src={Running} />
                : <img key={goal.id} role="presentation" src={NiceBackground} />
                ]
            }
          </GridTile>
        </a>
        ))}
        </GridList>
      </div>
    );

    var goalsToCount = this.props.goals;
    var goalsCount = goalsToCount.length;
    let button = null;
    if(goalsCount <=2) {
      button =
      <div>
        <Divider />
        <br/>
          <FlatButton label={"Add Goal"} href={'/goals/add'} primary={true} />
        <br/>
        <br/>
      </div>;
    }

const addGoal =
<AddGoal
type="addGoal"
addGoal={this.addGoal}
/>
;
    const layout = (
      users.map((user) =>
      <div key={user.id} >
        <Layout
          key={user.id}
          title={user.first_name}
          subtitle={user.email}
          leftContent={"dashboard"}
          tabOne={"Goals"}
          tabTwo={"All Tasks"}
          tabOneContent={listItems2}
          tabTwoContent={allTasks}
          imageID={<img role="presentation" src={ComedyPic}/>}
        />
      </div>
    ));
//removed layout, still shows margin at top
    return (
      <div className='App-page'>
        <div className='App-content'>
          <MuiThemeProvider>
            <div>
              {layout}
              {addGoal}
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
GoalList.defaultProps ={
  goals: [],
  tasks: [],
  users: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(GoalList);
