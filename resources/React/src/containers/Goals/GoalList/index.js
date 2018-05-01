import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Running from '../../../../../../public/images/running.jpg';
import Calendar from '../../Calendar';
import Layout from '../../Layout';
import ListCard from '../../../components/ListCard';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import ComedyPic from '../../../../../../public/images/comedy.jpg';
import Programming from '../../../../../../public/images/programming.jpg';
import logo from '../../../../../../public/images/running.jpg';
import AddGoal from '../../../components/AddGoal';

const imgData = [

  { id: 1,
    img: Running
  },
  { id: 2,
    img: Programming
  },
]

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
    cardStyle: {
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

    }
  render() {

    const {
      goals,
      tasks,
      users
    } = this.props;


//http://andrewhfarmer.com/react-image-gallery/
    //errors if filtering on tasks
    const allTasks = tasks.filter((item) => {
      return item.parent_id !== null;
    })
    .map((task) =>
    <div>
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


  const avatarLogo =
        <Avatar src={logo}/>
  ;

    const listItems = goals.map((goal) =>
    <div>
      <Divider />
      <Card style={styles.cardStyle}>
      <a href={'/goal/' + goal.id}>
        <CardMedia style={styles.logo}>
            <img src={logo} role='presentation'/>
            <CardTitle
                titleStyle={styles.goalList}
                title={goal.goal_name}
            />
        </CardMedia>
          </a>
      </Card>
    </div>
    );


    const listItems2 = (
      <div style={styles.root}>
        <GridList
          cols={1}
          cellHeight={180}
          style={styles.gridList}
        >
        {goals.map((goal) => (

          <a href={'/goal/' + goal.id}>
            <GridTile
              key={goal.id}
              title={goal.goal_name}
            >
            {goal.id === 1?
              <img src={Programming} />
              :
              <img src={Running} />
            }
          </GridTile>
        </a>
        ))}
        </GridList>
      </div>
    );
    const length = <div>{this.props.goals.length}</div>;

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
/>
;
    const layout = (
      users.map((user) =>
      <div>
        <Layout
          title={user.first_name}
          subtitle={user.city+','+user.state}
          leftContent={"dashboard"}
          tabOne={"Goals"}
          tabTwo={"All Tasks"}
          tabOneContent={listItems2}
          tabTwoContent={allTasks}
          imageID={<img src={ComedyPic}/>}
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
