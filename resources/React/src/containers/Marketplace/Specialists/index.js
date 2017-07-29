/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import { green500, grey500 } from 'material-ui/styles/colors';


//to do
//--what filter options would be wanted on this page, if any?
//--helpful button increments 'likes' on a review

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '45%'
  }
}

class Specialist extends React.Component{

  constructor(props){
    super(props)
    this.state= {
    }

    }

  render() {

    const marketplaceItems = this.props.marketplace.filter((item) => {
    return item.name == this.props.route.name;
    })
    .map((marketplace) =>
    <div>
      <a href={'/marketplace/' + marketplace.goal_id}><h2>{marketplace.goal_name}</h2></a>
      <div style={styles.wrapper}>
          <Chip style={styles.chipStyle} backgroundColor={green500}>{marketplace.category}</Chip>
      </div>
      <div>Description: {marketplace.plan_description}</div>
      <br/>
      <Divider />
    </div>
    );


    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <FlatButton href={'/marketplace/'}>Back</FlatButton>
            <h2>{this.props.route.name}</h2>
            <MuiThemeProvider>
              <div>
                <Card>
                    {marketplaceItems}
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
)(Specialist);
//connect merges objects into one and passes it into newsfeed as props
