/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


//to do
//--populate stars with ratings or use emojis or something
//--search section seaches hashtags (not startWith, but something else in a string of hashtags)
//--make reviews page?
//--toggle logic isn't working, debug it with ryan
//--separate out marketplace into a component, want to update a constant that filters the list differently for the marketplace page vs the add goals page
class CustomGoal extends React.Component{

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

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <h2>Write your own goal</h2>
          </div>
      </div>
    );
  }
}

export default CustomGoal;
