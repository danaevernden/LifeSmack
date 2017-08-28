/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import Homepage from '../../components/Homepage';
import { mapStateToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class Marketplace extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      plans:true,
      packages:true,
      supplemental:true
    }
        this.togglePlans = this.togglePlans.bind(this);
        this.togglePackages = this.togglePackages.bind(this);
        this.toggleSupplemental = this.toggleSupplemental.bind(this);
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
  toggleSupplemental() {
    this.setState({plans: !this.state.supplemental});
  }

render () {

  const listItems = this.props.marketplace.filter((item) => {
    if (this.state.filter) {
      return item.marketplace.startsWith(this.state.filter);
    }
    else if ((this.state.plans) && (this.state.packages) && (this.state.supplemental)){
        return true;
      }
    else if ((!this.state.plans) && (this.state.packages) && (this.state.supplemental)){
      return item.category !== "plans";
    }
    return true;
    })
    .map((marketplace) =>
    <div>
        <a href={'/marketplace/' + marketplace.goal_id}>
          <CardTitle style={style} title={marketplace.goal_name} subtitle={'by' + marketplace.name} />
        </a>
      <CardText>Description: {marketplace.plan_description}
      <br/><br/>
      Rating: {marketplace.rating}
      </CardText>
      <CardActions>
        <FlatButton href={'/marketplace/reviews/' + marketplace.goal_id} label="Reviews" />
      </CardActions>
      <Divider />
    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <Homepage/>
            <h2>Marketplace</h2>
              <MuiThemeProvider>
                <div>
                  <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
                  <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
                  <Toggle label = {"Supplemental"} defaultToggled={true} onToggle={this.toggleSupplemental} />
                  <Card>
                      {listItems}
                  </Card>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Marketplace);
