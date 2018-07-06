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
import Paper from 'material-ui/Paper';
import { includes } from 'lodash';
import {groupBy,values,sortBy} from 'lodash';
import TextField from 'material-ui/TextField';
import ListCard from '../../../components/ListCard';
import redComTask from '../../../../../../public/images/marketplace task icon.png';
import social from '../../../../../../public/images/social.jpeg';
import HobbyPic from '../../../../../../public/images/hobby.jpg';
import ConfidencePic from '../../../../../../public/images/confidence.jpg';
import BattingPic from '../../../../../../public/images/batting.jpg';
import DancePic from '../../../../../../public/images/davidDance.jpeg';
import FoodPic from '../../../../../../public/images/food.jpg';
import FoisGrasPic from '../../../../../../public/images/foisGras.jpg';
import IllustratorPic from '../../../../../../public/images/illustrator.jpeg';
import PhotographyPic from '../../../../../../public/images/photography.jpeg';
import VeganPic from '../../../../../../public/images/vegan.jpg';
import VolunteerPic from '../../../../../../public/images/volunteer.jpg';
import AbroadPic from '../../../../../../public/images/abroad.jpeg';
import ComedyPic from '../../../../../../public/images/comedy.jpg';
import RunningPic from '../../../../../../public/images/running.jpg';
import WeddingPic from '../../../../../../public/images/wedding.jpeg';
import WorkPic from '../../../../../../public/images/work.jpeg';
import GamePic from '../../../../../../public/images/game.jpeg';

const imgData = [

  { id: 1,
    img: <img src={ComedyPic}/>
  },
  { id: 2,
    img: <img src={RunningPic}/>
  },
  { id: 3,
    img: <img src={BattingPic}/>
  },
  { id: 4,
    img: <img src={DancePic}/>
  },
  { id: 5,
    img: <img src={VolunteerPic}/>
  },
  { id: 6,
    img: <img src={PhotographyPic}/>
  },
  { id: 7,
    img: <img src={ConfidencePic}/>
  },
  { id: 8,
    img: <img src={WeddingPic}/>
  },
  { id: 9,
    img: <img src={FoisGrasPic}/>
  },
  { id: 10,
    img: <img src={VeganPic}/>
  },
  { id: 11,
    img: <img src={AbroadPic}/>
  },
  { id: 12,
    img: <img src={WorkPic}/>
  },
  { id: 13,
    img: <img src={GamePic}/>
  },
  { id: 14,
    img: <img src={HobbyPic}/>
  },
  { id: 15,
    img: <img src={IllustratorPic}/>
  },
]

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
  },
  paperStyle: {
    height: '400px',
    overflow: 'auto'
  },
  backButtonStyle: {
    marginRight: '100px',
    position: 'absolute',
    zIndex: '3',
    marginTop: '150px'
  },
  descStyle: {
    marginLeft: '12px'
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

    const listItems = reviews
    .filter((item) => {return item.marketplacegoal_id === this.props.route.marketItem})
    .map((review) =>
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

      const backButton =
      <div>
        <a href="/marketplace">
        <FlatButton style={styles.backButtonStyle}
          >
          ◄ back
        </FlatButton>
        </a>
      </div>

    const marketplaceDesc = marketplacegoals
    .filter((item) => {return item.marketplacegoal_id === this.props.route.marketItem})
        .map((marketplacegoal) =>
        <div style={styles.descStyle}>
        <br/><br/>
        <b>
          {marketplacegoal.plan_description}
        </b>
        <br/><br/>
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

    const descAndTasks =
    <div>
      {marketplaceDesc}
      <Paper style={styles.paperStyle}>
        {goalPlan2}
      </Paper>
    </div>
    ;

    const listItem = markettasks.filter((markettask) => {
        return markettask.marketplacegoal_id == this.props.route.marketItem;
    })
        .map((markettask) =>
            <div>
                {markettask.task_name}
            </div>
        );

    const marketplaceItems = marketplacegoals.filter((marketplacegoal) => {
        return marketplacegoal.marketplacegoal_id == this.props.route.marketItem;
        })
        .map((marketplacegoal) =>
            <div>
            {imgData.filter((item) => {return item.id === marketplacegoal.marketplacegoal_id})
            .map((item) => (
              <div>
                <Layout
                    title={marketplacegoal.goal_name}
                    subtitle={marketplacegoal.name}
                    leftContent={"marketitem"}
                    tabOne={"Tasks"}
                    tabTwo={"Reviews"}
                    tabOneContent={descAndTasks}
                    tabTwoContent={listItems}
                    imageID={item.img}
                />
                </div>
              ))}
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
              {backButton}
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
