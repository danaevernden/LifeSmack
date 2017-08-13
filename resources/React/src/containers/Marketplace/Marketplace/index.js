/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import MarketplaceComponent from '../../../components/Marketplace';
import NoResultsMessage from '../../../components/NoResults';
import ComedyPic from '../../../../../../public/images/comedy.jpg';
import {Tabs, Tab} from 'material-ui/Tabs';
import {blue50} from 'material-ui/styles/colors';
import MarketTypes from '../MarketTypes';
import Paper from 'material-ui/Paper';
//to do
//--figure out how to put this back in:
//<NoResultsMessage
//itemsCount={listItems.length}
//message={"No results match your search :("}
///>

const styles = {
  chipStyle: {
  margin: 4},
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '45%'
  },
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '50px'
  },
  cardStyle: {
    width: '400px',
    display: 'inline-block',
    height: '120px',
    position: 'relative',
    backgroundColor: 'rgb(255,255,255)',
    marginLeft: '300px',
    marginTop: '40px'
  },
  titleStyle: {
    position: 'fixed',
    width: '400px'
  },
  titleStyleText: {
    fontSize: '24px',
    textAlign: 'center'
  },
  tabsStyle : {
    width: '400px',
    display: 'inline-block',
    position: 'fixed',
    marginLeft: '-200px',
    marginTop: '100px'
  },
  tabItemContainerStyle : {
    backgroundColor: 'white'
  },
  buttonStyle : {
    color: 'black'
  },
  contentContainerStyle: {
    height: '1000px'
  },
  paperStyle: {
    maxHeight: '300px',
    minHeight: '300px',
    overflow: 'auto'
  }
};

type Props = {
  fetchMarketplacegoalsFromActions: () => void,
  marketplacegoals: Marketplacegoal[],
}

class Marketplace extends React.Component{

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

    const listItems = marketplacegoals.map((marketplacegoal) =>
      <div style={styles.topMenu}>
        <MarketplaceComponent
        goalID={marketplacegoal.id}
        goalName={marketplacegoal.goal_name}
        specialistID={marketplacegoal.specialist_id}
        marketItemName={marketplacegoal.name}
        planDescription={marketplacegoal.plan_description}
        rating={marketplacegoal.rating}
        />
      </div>
      );

    const favorites =
    (<div> favorites go here
    </div>);

      const topMenu = (
        <div >
          <Card style={styles.cardStyle}>
            <CardTitle
            title="Welcome to the Marketplace"
            subtitle="Plans and tips at your fingertips. Find your next goal here or save a goal for later."
            style={styles.titleStyle}
            titleStyle={styles.titleStyleText}
            />
            <CardActions>
            <Tabs tabItemContainerStyle={styles.tabItemContainerStyle} inkBarStyle={{background: 'blue'}} style={styles.tabsStyle}>
              <Tab label="Marketplace" buttonStyle={styles.buttonStyle}>
                <div>
                  <Paper style={styles.paperStyle}>
                    <MarketTypes/>
                  </Paper>
                </div>
              </Tab>
              <Tab label="Favorites" buttonStyle={styles.buttonStyle}>
                <div>
                  <Paper style={styles.paperStyle}>
                    {favorites}
                  </Paper>
                </div>
              </Tab>
            </Tabs>
            </CardActions>
          </Card>
        </div>);


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
Marketplace.defaultProps ={
  marketplacegoals: []
 };


export default
connect(mapStateToProps, mapDispatchToProps)
(Marketplace);
//connect merges objects into one and passes it into newsfeed as props
