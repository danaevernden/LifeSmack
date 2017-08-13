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
    }
};

type Props = {
  fetchGoalsFromActions: () => void,
  goals: Goal[],
}

class GoalList extends React.Component{

  static defaultProps: {
    goals: Goal[]
  };

  componentDidMount() {
    this.props.fetchGoalsFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
    }

    }
  render() {

    const {
      goals
    } = this.props;
//http://andrewhfarmer.com/react-image-gallery/
    //errors if filtering on tasks

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

    const goalList =
    <div>
        {listItems}
        <Card>
            {button}
        </Card>
    </div>
    ;
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
      <Layout
      title={'Anna'}
      subtitle={"New York, NY"}
      leftContent={"dashboard"}
      tabOne={"Goals"}
      tabTwo={"Calendar"}
      tabThree={"All Tasks"}
      tabOneContent={listItems}
      tabTwoContent={"coming soon!"}
      tabThreeContent={"all tasks here"}
      />
    );
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
  goals: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(GoalList);
