/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper'

type Props = {
  marketplaceItems: String,
  listTitle: String
}

const styles = {
  cardStyle: {
    width: '400px',
    display: 'inline-block',
    height: '120px',
    position: 'relative',
    backgroundColor: 'rgb(255,255,255)',
/*    marginLeft: '300px',*/
    marginTop: '40px'
  },
  titleStyle: {
    position: 'fixed'
  },
  titleStyleText: {
    fontSize: '18px',
    textAlign: 'center',
    marginLeft: '30px',
    marginBottom: '-30px'
  },
  subtitleStyleText: {
    textAlign: 'left',
    marginTop: '30px'
  }
  ,
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
  paperStyle: {
    maxHeight: '300px',
    minHeight: '300px',
    overflow: 'auto'
  },
  inkBarStyle: {
    background: 'rgb(127,242,185)'
  },
};

class MarketplaceLayout extends React.Component{

  props:Props

  render () {

    const {
      marketplaceItems,
      listTitle
    } = this.props;



    const topMenu = (
      <div >
          <Card style={styles.cardStyle}>
            <CardTitle
                title="Welcome to the Marketplace"
                subtitle="Expert tips at your fingertips, in a future release you will be able to copy goals from the marketplace into the list of your personal goals"
                style={styles.titleStyle}
                titleStyle={styles.titleStyleText}
                subtitleStyle={styles.subtitleStyleText}
            />
            <CardActions>
                <Tabs
                tabItemContainerStyle={styles.tabItemContainerStyle}
                inkBarStyle={styles.inkBarStyle}
                style={styles.tabsStyle}>
                    <Tab label={listTitle} buttonStyle={styles.buttonStyle}>
                            {marketplaceItems}
                    </Tab>
                </Tabs>
            </CardActions>
          </Card>
        </div>
      );

    return (
      <div>
          {topMenu}
      </div>
    );
  }
}

export default MarketplaceLayout;
