import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red700 } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import Divider from 'material-ui/Divider';
import {Card, CardHeader} from 'material-ui/Card';
import ProfilePic from '../../../../../public/images/comedy.jpg';

type Props = {
  goalsForBar: String,
  username: String,
  test: String
};

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50
  },
});

const styles = {
  drawer: {
    textAlign: 'left',
    fontSize: '200%',
    backgroundColor: 'rgb(250,250,250)'
  },
  divider: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  card: {
    backgroundColor: 'rgb(207,37,37)',
    marginBottom: '15px',
    color: 'rgb(255,255,255)',
  },
  secondMenu: {
    marginLeft: '15px'
  },
  appBarTitle: {
    paddingLeft: '350px'
  },
  appBarStyle: {
    position: 'fixed'
  },
  searchIconStyle: {
    color: 'rgb(255,255,255)',
    marginTop: '10px'
  },
  whiteText: {
    color: 'rgb(255,255,255)'
  }
};

class AppDrawerMenu extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state= {
      test: this.props.test
    }
  }

  render() {
    const {
      goalsForBar,
      username
    } = this.props;

    const leftButton = (
      <div>

        <Drawer
            open={true}
            width={300}
            containerStyle={styles.drawer}
        >
          <Card style={styles.card}>
          <CardHeader
              title={username}
              avatar={ProfilePic}
              titleStyle={styles.card}
          />
          </Card>
          <MenuItem leftIcon={<CheckBox />}
            onTouchTap={this.drawerOpen}
            containerElement={<Link to="/" />}
            primaryText="Goals"
          />
          {goalsForBar}
          <MenuItem
            leftIcon={<ShoppingCart />}
            onTouchTap={this.drawerOpen}
            containerElement={<Link to="/marketplace" />}
            primaryText="Marketplace"
          />
          <Divider style={styles.divider}/>
          <MenuItem
            leftIcon={<SettingsIcon />}
            style={styles.secondMenu}
            onTouchTap={this.drawerOpen}
            containerElement={<Link to="/settings" />}
            primaryText="Settings"
          />
          <MenuItem
            leftIcon={<InfoIcon />}
            style={styles.secondMenu}
            onTouchTap={this.drawerOpen}
            containerElement={<Link to="/about" />}
            primaryText="About"
          />
        </Drawer>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
              {leftButton}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppDrawerMenu;
