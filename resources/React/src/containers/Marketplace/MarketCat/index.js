/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MarketplaceComponent from '../../../components/MarketplaceComponent';
import NoResultsMessage from '../../../components/NoResults';
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
import MarketTypes from '../MarketTypes';
import MarketplaceLayout from '../../../components/MarketplaceLayout';
import {GridList, GridTile} from 'material-ui/GridList';
import ImgData2 from '../../../arrays';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
  },
}

type Props = {
  fetchMarketplacegoalsFromActions: () => void,
  marketplacegoals: Marketplacegoal[],
}

//old but could be useful someday
var id = 100;
var name = 'link';
var arr = [];
arr.push({id , name});

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

class MarketCat extends React.Component{

  static defaultProps: {
    marketplacegoals: Marketplacegoal[]
  };

  componentDidMount() {
    this.props.fetchMarketplacegoalsFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
      filter: "",
      shadow: 1
    }
    }

  onMouseOver = () => this.setState({ shadow: 3 });
  onMouseOut = () => this.setState({ shadow: 1 });


  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  render () {

    const {
      marketplacegoals
    } = this.props;

    const rightMenuItems = this.props.rightMenu.filter((item) => {
      return item.page_name == "marketplace";
    }).map((rightMenu) =>
    <div>
      {rightMenu.item_name}
    </div>
    );

    const listItems10 = <ImgData2 marketplacegoal_id={1}/>;

    const listItems4 =  marketplacegoals
    .filter((item) => { return item.category_id_1 === this.props.route.marketplacegoal_id })
    .map((marketplacegoal) =>
    <div>
    {imgData.filter((item) => {return item.id === marketplacegoal.marketplacegoal_id})
    .map((item) => (
      <div>
        <MarketplaceComponent
          goalID={marketplacegoal.marketplacegoal_id}
          goalName={marketplacegoal.goal_name}
          specialistID={marketplacegoal.specialist_id}
          marketItemName={marketplacegoal.name}
          planDescription={marketplacegoal.plan_description}
          rating={marketplacegoal.rating}
          imageID={<ImgData2 marketplacegoal_id={1}/>)
        />
      </div>
    ))}
    </div>
  );


    const listItems = marketplacegoals
    .filter((item) => { return item.category_id_1 === 3 })
    .map((marketplacegoal) =>
      <div>
        <MarketplaceComponent
          goalID={marketplacegoal.id}
          goalName={marketplacegoal.goal_name}
          specialistID={marketplacegoal.specialist_id}
          marketItemName={marketplacegoal.name}
          planDescription={marketplacegoal.plan_description}
          rating={marketplacegoal.rating}
          imageID={'logo'+ marketplacegoal.id}
        />
      </div>
    );

    const goalsList =
    <div style = {styles.root}>
    <GridList
      cellHeight={180}
      cols={1}
      titleBackground={styles.titleBackground}
      style={styles.gridList}
    >
        {listItems4}
    </GridList>
    </div>
    ;

    const favorites =(
      <div>
          favorites go here for real
      </div>);


    const topMenu = (
        <MarketplaceLayout
          marketplaceItems={goalsList}
          listTitle={this.props.route.marketCat}
        />
      )


    const noResults =  <div></div>;
    var resultsCount = listItems.length;
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
              <MuiThemeProvider>
                <div>
                    {topMenu}
                    <div >
                    </div>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

MarketCat.defaultProps ={
  marketplacegoals: []
 };

export default
connect(mapStateToProps, mapDispatchToProps)
(MarketCat);
