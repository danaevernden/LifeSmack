/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarRatingComponent from 'react-star-rating-component';

    //to do
//--subtitle href to click on specialist name, already have page for them
//--helpful button increments 'likes' on a review - started working on but haven't figured it out
//--if reviewcount = 0, message 'no reviews'
class MarketItem extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      likeButton: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment(id) {
      this.setState({likeButton: this.id})
      var likeButton = this.state.likeButton + 1;
      this.setState({likeButton: likeButton})
    };

  render() {

    const noReviews =
    <div></div>;
      var reviewsToCount = this.props.reviews.filter((item) => {
      return item.goal_id == this.props.route.marketItem;
    });
    var reviewsCount = reviewsToCount.length;
   //commented out for testing
//   let goalsCount = 3;
    let noReviewsMessage = null;
    if(reviewsCount <=0) {
      noReviewsMessage =
      <div>
        <Divider />
        <br/>
        <div>No reviews yet :( </div>
        <br/>
      </div>;
    }

    const marketplaceItems = this.props.marketplace.filter((item) => {
    return item.goal_id == this.props.route.marketItem;
    })
    .map((marketplace) =>
    <div>
      <FlatButton linkButton={true} href={'marketplace'}>Back</FlatButton>
      <h2>{marketplace.goal_name}</h2>
      <h4>{'by ' + marketplace.name}</h4>
      <CardText>
      Description: {marketplace.plan_description}
      <br/><br/>
      Rating:  <StarRatingComponent starCount={5} value={marketplace.rating}/>
      </CardText>
      <Divider />
    </div>
    );

    const listItems = this.props.reviews
    .filter((item) => {
    return item.goal_id == this.props.route.marketItem;})
    .map((reviews) =>
    <div>
    <CardText>Rating: <StarRatingComponent starCount={5} value={reviews.rating}/> <br/> {reviews.name}: {reviews.review}
    <br/>
    <FlatButton label="helpful?" id={reviews.helpful} onClick={this.increment}/>
    {this.state.likeButton}
    </CardText>
    <Divider />
    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <MuiThemeProvider>
              <div>
                <Card>
                    {marketplaceItems}
                </Card>
              </div>
            </MuiThemeProvider>
            <MuiThemeProvider>
              <div>
                <Card>
                    {listItems}
                    {noReviewsMessage}
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
)(MarketItem);
//connect merges objects into one and passes it into newsfeed as props
