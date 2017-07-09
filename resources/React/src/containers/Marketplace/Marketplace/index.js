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
    position: 'fixed',
    backgroundColor: 'rgb(255,255,255)',
    marginLeft: '-200px',
    marginTop: '40px'
  },
  titleStyle: {
    position: 'fixed'
  },
  titleStyleText: {
    fontSize: '24px',
    textAlign: 'center',
    marginLeft: '30px'
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
  }
};

type Props = {
  fetchMarketplaceFromActions: () => void,
  marketplace: Marketplace[],
}

class Marketplace extends React.Component{

  static defaultProps: {
    marketplace: Marketplace[]
  };

  componentDidMount() {
    this.props.fetchMarketplaceFromActions();
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
    marketplace
  } = this.props;

  const rightMenuItems = this.props.rightMenu.filter((item) => {
    return item.page_name == "marketplace";
  }).map((rightMenu) =>
  <div>
  {rightMenu.item_name}
  </div>
);

    const listItems = marketplace.map((marketplace) =>
      <div style={styles.topMenu}>
        <MarketplaceComponent
        goalID={marketplace.goal_id}
        goalName={marketplace.goal_name}
        specialistID={marketplace.specialist_id}
        marketItemName={marketplace.name}
        category={marketplace.category}
        planDescription={marketplace.plan_description}
        rating={marketplace.rating}
        image={marketplace.image}
        />
      </div>
      );


      const topMenu = (
        <div >
          <Card style={styles.cardStyle}>
            <CardTitle
            title="Welcome to the Marketplace"
            style={styles.titleStyle}
            titleStyle={styles.titleStyleText}
            />
            <CardActions>
            <Tabs tabItemContainerStyle={styles.tabItemContainerStyle} inkBarStyle={{background: 'blue'}} style={styles.tabsStyle}>
              <Tab label="Marketplace" buttonStyle={styles.buttonStyle}>
                {listItems}
              </Tab>
              <Tab label="Favorites" buttonStyle={styles.buttonStyle}>
                {favorites}
              </Tab>
            </Tabs>
            </CardActions>
          </Card>
        </div>);

        const favorites =
        (<div> favorites go here
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
  marketplace: []
 };


export default
connect(mapStateToProps, mapDispatchToProps)
(Marketplace);
//connect merges objects into one and passes it into newsfeed as props
