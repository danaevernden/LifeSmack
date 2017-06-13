/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { green500, grey500 } from 'material-ui/styles/colors';
import MarketplaceComponent from '../../../components/Marketplace';
import NoResultsMessage from '../../../components/NoResults';
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
  }
}

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
      plans:true,
      packages:true,
      supplemental:true
    }
        this.togglePlans = this.togglePlans.bind(this);
        this.togglePackages = this.togglePackages.bind(this);
        this.toggleSupplemental = this.toggleSupplemental.bind(this);
  }

  updateFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  togglePlans() {
    this.setState({plans: !this.state.plans});
  }
  togglePackages() {
    this.setState({packages: !this.state.packages});
  }
  toggleSupplemental() {
    this.setState({supplemental: !this.state.supplemental});
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

    const listItems = marketplace.filter((item) => {
      if (this.state.plans) {
        if (this.state.packages) {
          if (this.state.supplemental) {
            return true;
          }
            return item.category !== "supplemental";
          }
          if (this.state.supplemental) {
            return item.category !== "package";
          }
            return item.category !== "package" && item.category !== "supplemental";
        }
        if (this.state.packages) {
          if (this.state.supplemental) {
              return item.category !== "plan";
          }
              return item.category !== "supplemental" && item.category !== "plan";
        }
          if (this.state.supplemental) {
              return item.category !== "plan" && item.category !== "package";
          }
              return false;
        }
      )
      .map((marketplace) =>
      <div>
        <MarketplaceComponent
        goalID={marketplace.goal_id}
        goalName={marketplace.goal_name}
        specialistID={marketplace.specialist_id}
        marketItemName={marketplace.name}
        category={marketplace.category}
        planDescription={marketplace.plan_description}
        rating={marketplace.rating}
        />
      </div>
      );

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
            <h2>Marketplace</h2>
              <MuiThemeProvider>
                <div>
                  <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
                  <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
                  <Toggle label = {"Supplemental"} defaultToggled={true} onToggle={this.toggleSupplemental} />
                  <Card>
                      {listItems}
                      {noResultsMessage}

                  </Card>
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
