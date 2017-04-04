/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import Homepage from '../../../components/Homepage';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//to do
//--what filter options would be wanted on this page, if any?
//--helpful button increments 'likes' on a review
//--change rating to filling in 5 stars or with emojis

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
      <CardTitle href={'/marketplace/' + marketplace.goal_id} title={marketplace.goal_name} subtitle={'by' + marketplace.name} />
      <CardText>Description: {marketplace.plan_description}
      <br/><br/>
      Rating: {marketplace.rating}
      </CardText>
      <Divider />
    </div>
    );


    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <Homepage/>
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
