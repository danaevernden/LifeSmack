/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {Card} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
import StarRatingComponent from 'react-star-rating-component';
import MarketplaceComponent from '../../../components/MarketplaceComponent';

type Props = {
  fetchMarketplaceFromActions: () => void,
  marketplace: Marketplace[],
}

class AddGoal extends React.Component{

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
      packages:true
    }
    this.togglePlans = this.togglePlans.bind(this);
    this.togglePackages = this.togglePackages.bind(this);
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
    this.setState({plans: !this.state.packages});
  }

render () {

  const {
    marketplace
  } = this.props;


    const listItems = marketplace.filter((item) => {
      if (this.state.filter) {
        return item.marketplace.startsWith(this.state.filter);
      }
        return item.category == "package" || item.category =="plan";
      })
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
      marketplaceFlag={false}
      />
      </div>
      );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
            <h2>Choose a goal from the marketplace</h2>
            Search:
            <input />
              <MuiThemeProvider>
                <div>
                  <Toggle label = {"Plans"} defaultToggled={true} onToggle={this.togglePlans} />
                  <Toggle label = {"Packages"} defaultToggled={true} onToggle={this.togglePackages} />
                  <Card>
                      {listItems}
                  </Card>
                  <br/>
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

AddGoal.defaultProps ={
  marketplace: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(AddGoal);
