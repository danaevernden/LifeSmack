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
import TextField from 'material-ui/TextField';
import ListCard from '../../../components/ListCard';
import redComTask from '../../../../../../public/images/marketplace task icon.png';

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
  fetchMarketplacegoalsFromActions: () => void,
  fetchReviewsFromActions: () => void,
  fetchMarkettasksFromActions: () => void,
  fetchCommentsFromActions: () => void,
  marketplacegoals: Marketplacegoal[],
  reviews: Review[],
  comments: Comment[],
  markettasks: Markettask[],
}
class MarketItem extends React.Component{

  static defaultProps: {
    marketplacegoals: Marketplacegoal[],
    reviews: Review[],
    markettasks: Markettask[],
    comments: Comment[]
  };

  componentDidMount() {
    this.props.fetchMarketplacegoalsFromActions();
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
        this.handlemarkettasks = this.handlemarkettasks.bind(this);
    }

    increment(id) {
      this.setState({likeButton: id})
      var likeButton = this.state.likeButton + 1;
      this.setState({likeButton: likeButton})
    };

    handlemarkettasks(marketplacegoal_id) {
      this.props.fetchMarkettasks(marketplacegoal_id).map((markettask) =>
      <div>
        {markettask.task_name}
      </div>)
    }

  render() {

    const {
      marketplacegoals,
      reviews,
      markettasks,
      comments
    } = this.props;

    const noReviews =
    <div></div>;
      var reviewsToCount = reviews.filter((review) => {
      return review.goal_id == this.props.route.marketItem;
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

    const listItems = reviews.map((review) =>
      <div>
          <Card>
              <CardText>Rating: <StarRatingComponent starCount={5} value={review.rating}/> <br/> {review.name}: {review.review}
              <br/>
              <FlatButton label="helpful?" id={review.helpful} onClick={() => this.increment(review.helpful)}/>
              {this.state.likeButton}
              </CardText>
          </Card>
          <Divider />
      </div>
      );

    const marketplaceDesc = marketplacegoals.filter((marketplacegoal) => {
        return true;
        })
        .map((marketplacegoal) =>
        <div>
          {marketplacegoal.plan_description}
          {marketplacegoal.rating}
        </div>
        );

    const goalPlan2 = markettasks
    .filter((item) => {return item.marketplacegoal_id === this.props.route.marketItem})
    .map((markettask) =>
        <div>
            <ListCard
                taskID={markettask.task_id}
                taskStatus={true}
                taskName={markettask.task_name}
                categoryID1={markettask.category_id_1}
                imageSrc={<img src={redComTask}/>}
                taskType={"marketplaceTask"}
            />
        </div>
    );

    const listItem = markettasks.filter((markettask) => {
        return markettask.marketplace_id == this.props.route.marketItem;
    })
        .map((markettask) =>
            <div>
                {markettask.task_name}
            </div>
        );

    const marketplaceItems = marketplacegoals.filter((marketplacegoal) => {
        return marketplacegoal.id == this.props.route.marketItem;
        })
        .map((marketplacegoal) =>
            <div>
                <Layout
                    title={marketplacegoal.goal_name}
                    subtitle={marketplacegoal.name}
                    leftContent={"marketitem"}
                    tabOne={"Tasks"}
                    tabTwo={"Reviews"}
                    tabOneContent={goalPlan2}
                    tabTwoContent={listItems}
                />
            </div>
      );

    const marketplaceItems2 =marketplacegoals.map((marketplacegoal) =>
      <div>
          <Layout
            title={marketplacegoal.goal_name}
            subtitle={marketplacegoal.name}
            tabOne={"Tasks"}
            tabTwo={"Categories"}
            tabThree={"Reviews"}
            tabOneContent={goalPlan2}
            tabTwoContent={"howdy"}
            tabThreeContent={listItems}
        />
      </div>
    );

    const goalPlan3 = markettasks.map((markettask) =>
      <div style={styles.topMenu}>
        {markettask.task_name}
          </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <MuiThemeProvider>
              <div>
                  {marketplaceItems}
              </div>
            </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

MarketItem.defaultProps ={
  marketplacegoals: [],
  reviews: [],
  markettasks: [],
  comments: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(MarketItem);
