/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper'

type Props = {
  favoritesItems: String,
  marketplaceItems: String
}

const styles = {
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
  paperStyle: {
    maxHeight: '300px',
    minHeight: '300px',
    overflow: 'auto'
  },
};

class MarketplaceLayout extends React.Component{

  props:Props

  render () {

    const {
      marketplaceItems,
      favoritesItems
    } = this.props;


    const topMenu = (
      <div >
          <Card style={styles.cardStyle}>
            <CardTitle
                title="Welcome to the Marketplace"
                subtitle="Social"
                style={styles.titleStyle}
                titleStyle={styles.titleStyleText}
            />
            <CardActions>
                <Tabs tabItemContainerStyle={styles.tabItemContainerStyle} inkBarStyle={{background: 'blue'}} style={styles.tabsStyle}>
                    <Tab label="Marketplace" buttonStyle={styles.buttonStyle}>
                        <Paper style={styles.paperStyle}>
                            {marketplaceItems}
                        </Paper>
                    </Tab>
                      <Tab label="Favorites" buttonStyle={styles.buttonStyle}>
                          {favoritesItems}
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
