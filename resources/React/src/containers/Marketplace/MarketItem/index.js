/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarRatingComponent from 'react-star-rating-component';
import Layout from '../../Layout';
import { includes } from 'lodash';
import {groupBy,values,sortBy} from 'lodash';
import ListCard from '../../../components/ListCard';
    //to do
//--subtitle href to click on specialist name, already have page for them
//--helpful button increments 'likes' on a review - started working on but haven't figured it out
//--if reviewcount = 0, message 'no reviews'

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '150px',
  },
  cardStyle: {
    width: '400px',
    display: 'inline-block'
  }
};

type Props = {
  fetchMarketplaceFromActions: () => void,
  fetchReviewsFromActions: () => void,
  fetchMarkettasksFromActions: () => void,
  fetchCommentsFromActions: () => void,
  marketplace: Marketplace[],
  reviews: Review[],
  comments: Comment[],
  markettasks: Markettask[],
}
class MarketItem extends React.Component{

  static defaultProps: {
    marketplace: Marketplace[],
    reviews: Review[],
    markettasks: Markettask[],
    comments: Comment[]
  };

  componentDidMount() {
    this.props.fetchMarketplaceFromActions();
    this.props.fetchReviewsFromActions();
    this.props.fetchMarkettasksFromActions();
    this.props.fetchCommentsFromActions();

  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
      likeButton: this.props.reviews.helpful,
      include: window.location.href
        }
        this.increment = this.increment.bind(this);
    }

    increment(id) {
      this.setState({likeButton: id})
      var likeButton = this.state.likeButton + 1;
      this.setState({likeButton: likeButton})
    };

  render() {

    const {
      marketplace,
      reviews,
      markettasks,
      comments
    } = this.props;

    const noReviews =
    <div></div>;
      var reviewsToCount = reviews.filter((item) => {
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

//includes(this.state.include, '/marketplace/1/reviews') == true


          const listItems = reviews.filter((item) => {
          return item.goal_id == this.props.route.marketItem;})
          .map((review) =>
          <div>
          <CardText>Rating: <StarRatingComponent starCount={5} value={review.rating}/> <br/> {review.name}: {review.review}
          <br/>
          <FlatButton label="helpful?" id={review.helpful} onClick={() => this.increment(review.helpful)}/>
          {this.state.likeButton}
          </CardText>
          <Divider />
          </div>
          );

          const marketplaceDesc = marketplace.filter((item) => {
          return item.goal_id == this.props.route.marketItem;
          })
          .map((marketplace) =>
          <div>
          {marketplace.plan_description}
          {marketplace.rating}
          </div>
          );
          const commentsByTask = groupBy(values(comments), (comment) => comment.task_id);

          const goalPlan = markettasks.filter((item) => {
            return item.goal_id == this.props.route.marketItem;})
            .map((markettask) =>
            <div>
              {(commentsByTask[markettask.task_id] || [])
                .map((comment) =>
                <div>
                    <ListCard
                    taskID={markettask.task_id}
                    taskName={markettask.task_name}
                    taskStatus={markettask.complete}
                    taskScheduled={markettask.scheduled}
                    taskType={markettask.task_type}
                    commentText={comment.text}
                    categoryID1={markettask.category_id_1}
                    categoryID2={markettask.category_id_2}
                    />
                </div>
              )}
          </div>
          );

    const marketplaceItems = marketplace.filter((item) => {
    return item.goal_id == this.props.route.marketItem;
    })
    .map((marketplace) =>
      <div>
          <Layout
            title={marketplace.goal_name}
            subtitle={marketplace.name}
            buttonTitle={"add goal"}
            buttonAction={"/marketplace/" + marketplace.goal_id + "/reviews"}
            leftContent={"marketitem"}
            tabOne={"Tasks"}
            tabTwo={"Categories"}
            tabThree={"Reviews"}
            tabOneContent={goalPlan}
            tabTwoContent={"test2"}
            tabThreeContent={listItems}
            />
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
          </div>
      </div>
    );
  }
}
MarketItem.defaultProps ={
  marketplace: [],
  reviews: [],
  markettasks: [],
  comments: []
 };


export default connect(
  mapStateToProps, mapDispatchToProps
)(MarketItem);
//connect merges objects into one and passes it into newsfeed as props
