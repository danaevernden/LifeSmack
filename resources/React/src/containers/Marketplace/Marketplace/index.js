/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { green500, grey500 } from 'material-ui/styles/colors';


//to do
//--separate out marketplace into a component, want to update a constant that filters the list differently for the marketplace page vs the add goals page

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '45%'
  }
}

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
    this.setState({packages: !this.state.packages});
  }
  toggleSupplemental() {
    this.setState({supplemental: !this.state.supplemental});
  }

render () {
  const style = {

  };


  const listItems = this.props.marketplace.filter((item) => {
    if (this.state.plans) {
      if (this.state.packages) {
        if (this.state.supplemental) {
          return true;
        }
          return item.category !== "supplemental";
        }
        if (this.state.supplemental) {
          return item.category !== "package";
        }
          return item.category !== "package" && item.category !== "supplemental";
      }
      if (this.state.packages) {
        if (this.state.supplemental) {
            return item.category !== "plan";
        }
            return item.category !== "supplemental" && item.category !== "plan";
      }
        if (this.state.supplemental) {
            return item.category !== "plan" && item.category !== "package";
        }
            return false;
      }
    )
    .map((marketplace) =>
    <div>
      <a href={'/marketplace/' + marketplace.goal_id}><h2>{marketplace.goal_name}</h2></a>
      <a href={'/marketplace/specialist/' + marketplace.specialist_id}><h4>by {marketplace.name}</h4></a>
      <div style={styles.wrapper}>
          <Chip style={styles.chipStyle} backgroundColor={green500}>{marketplace.category}</Chip>
      </div>
      <div>Description: {marketplace.plan_description}</div>
      <br/>
        <FlatButton href={'/marketplace/' + marketplace.goal_id} label="See more" />
      <Divider />
    </div>
    );


    const noResults =  <div></div>;
    var resultsCount = listItems.length;
   //commented out for testing
  //   let goalsCount = 3;
    let noResultsMessage = null;
    if(resultsCount <=0) {
      noResultsMessage =
      <div>
        <Divider />
        <br/>
        <div>No results for your seach:( </div>
        <br/>
      </div>;
    }
    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <h2>Marketplace</h2>
              <MuiThemeProvider>
                <div>
                  <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
                  <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
                  <Toggle label = {"Supplemental"} defaultToggled={true} onToggle={this.toggleSupplemental} />
                  <Card>
                      {listItems}
                      {noResultsMessage}
                  </Card>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Marketplace);
//connect merges objects into one and passes it into newsfeed as props
