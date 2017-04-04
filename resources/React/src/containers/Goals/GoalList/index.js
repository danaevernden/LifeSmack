import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import Homepage from '../../../components/Homepage';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

//to do
//make it look pretty

//features
//logic is there for >3 goals to not have 'add goal' button appear
class GoalList extends React.Component{

  constructor(props){
    super(props)
    this.state= {
    }

    }
  render() {

    //errors if filtering on tasks
    const listItems = this.props.goals
    .map((goals) =>
    <div>
    <Divider />
    <a href={'/goal/' + goals.goal_id}>
      <CardTitle title={goals.goal_name} subtitle="X/Z tasks completed, Y scheduled"/>
    </a>
    </div>
    );

    const length = <div>{this.props.goals.length}</div>;

    const addGoal =
    <FlatButton label={"Add Goal"} linkButton={true} href={'/goals/add'} primary={true} />;
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
        <FlatButton label={"Add Goal"} linkButton={true} href={'/goals/add'} primary={true} />
        <br/>
        <br/>
      </div>;
    }

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <Homepage/>
            <h2>Goals</h2>
              <MuiThemeProvider>
                <div>
                  <Card>
                      {listItems}
                      {button}
                  </Card>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps
)(GoalList);
