/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './connect';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NoResultsMessage from '../../../components/NoResults';
import ComedyPic from '../../../../../../public/images/comedy.jpg';
import MarketTypes from '../MarketTypes';
import MarketplaceLayout from '../../../components/MarketplaceLayout';

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '50px'
  },
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

  const favorites =
    (<div> favorites go here now
    </div>);


  const topMenu = (
      <MarketplaceLayout
        marketplaceItems={<MarketTypes/>}
        favoritesItems={favorites}
      />
  )

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
