/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import Homepage from '../../../components/Homepage';
import { mapStateToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import AddCustomGoal from '../../../components/AddCustomGoal';

//to do
//--populate stars with ratings or use emojis or something
//--search section seaches hashtags (not startWith, but something else in a string of hashtags)
//--make reviews page?
//--toggle logic isn't working, debug it with ryan
//--separate out marketplace into a component, want to update a constant that filters the list differently for the marketplace page vs the add goals page
class AddGoal extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      plans:true,
      packages:true
    }
        this.togglePlans = this.togglePlans.bind(this);
        this.togglePackages = this.togglePackages.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  togglePlans() {
    this.setState({plans: !this.state.plans});
  }
  togglePackages() {
    this.setState({plans: !this.state.packages});
  }

render () {

  const style ={

  };
  const listItems = this.props.marketplace.filter((item) => {
    if (this.state.filter) {
      return item.marketplace.startsWith(this.state.filter);
    }
      return item.category == "package" || item.category =="plan";
    })
    .map((marketplace) =>
    <div>
        <a href={'/marketplace/' + marketplace.goal_id}>
          <CardTitle style={style} title={marketplace.goal_name} subtitle={marketplace.name} />
        </a>
      <CardText>Description: {marketplace.plan_description}
      <br/><br/>
      Rating: {marketplace.rating}
      </CardText>
      <CardActions>
      <FlatButton href={'/marketplace/' + marketplace.goal_id} label="See more" />
      </CardActions>
      <Divider />
    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <Homepage/>
            <h2>Choose a goal from the marketplace</h2>
            Search:
            <input />
              <MuiThemeProvider>
                <div>
                  <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
                  <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
                  <Card>
                      {listItems}
                  </Card>
                  <br/>
                  <AddCustomGoal/>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(AddGoal);
