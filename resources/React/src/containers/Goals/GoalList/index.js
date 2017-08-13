import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import logo from '../../../../../../public/images/running.jpg';
import Calendar from '../../Calendar';
import Layout from '../../Layout';
import ListCardNew from '../../../components/ListCardNew';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';

//to do
//make it look pretty

//features
//logic is there for >3 goals to not have 'add goal' button appear
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
      height: 450,
      overflowY: 'auto',
    },
    cardStyle: {
      boxSizing: 'border-box',
      padding: '2px',
      height: '184px'
    },
};

type Props = {
  fetchGoalsFromActions: () => void,
  goals: Goal[],
  fetchTasksFromActions: () => void,
  tasks: Task[],
  fetchProfileFromActions: () => void,
  profile: Profile[]
}

class GoalList extends React.Component{

  static defaultProps: {
    goals: Goal[],
    tasks: Task[],
    profile: Profile[]
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
      profile
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
    <div>
    <ListCardNew
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
            <img src={logo} />
          </GridTile>
        </a>
        ))}
        </GridList>
      </div>
    );
    const length = <div>{this.props.goals.length}</div>;

    const addGoal =  <FlatButton style={styles.goalList} label={"Add Goal"} href={'/goals/add'} primary={true} />;
    var goalsToCount = this.props.goals;
    var goalsCount = goalsToCount.length;
   //commented out for testing
//   let goalsCount = 3;
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

    const layout = (
      profile.map((profile) =>
      <div>
      <Layout
      title={profile.first_name}
      subtitle={profile.city+','+profile.region}
      leftContent={"dashboard"}
      tabOne={"Goals"}
      tabTwo={"Calendar"}
      tabThree={"All Tasks"}
      tabOneContent={listItems2}
      tabTwoContent={"coming soon!"}
      tabThreeContent={allTasks}
      />
      </div>
    ));

    return (
      <div className='App-page'>
          <div className='App-content'>
            <h2>Goals</h2>
              <MuiThemeProvider>
                <div>
                {layout}
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
  profile: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(GoalList);
