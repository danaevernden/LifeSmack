/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MarketplaceComponent from '../../../components/MarketplaceComponent';
import NoResultsMessage from '../../../components/NoResults';
import ComedyPic from '../../../../../../public/images/comedy.jpg';
import MarketTypes from '../MarketTypes';
import MarketplaceLayout from '../../../components/MarketplaceLayout';
import {GridList, GridTile} from 'material-ui/GridList';


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

    const listItems = marketplacegoals
    .filter((item) => { return item.category_id_1 === 3 })
    .map((marketplacegoal) =>
      <div>

      //push to a variable, variable includes logo?
      // or have table where lodash can be used to find the image for the ID
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
    <div
      style = {styles.root}>
    <GridList
      cellHeight={180}
      cols={1}
      titleBackground={styles.titleBackground}
      style={styles.gridList}
    >
        {listItems}
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
