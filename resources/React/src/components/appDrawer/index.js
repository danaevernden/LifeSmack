import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red700 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Flag from 'material-ui/svg-icons/content/flag';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ProfilePic from '../../../../../public/images/comedy.jpg';
import '../app/style.css';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

//to do
// get goalsForBar to work
//add notifications back in if part of MVP
//    <MenuItem leftIcon={<Flag />} onTouchTap={this.drawerOpen} containerElement={<Link to="/notifications" />} primaryText="Notifications" />

type Props = {
  main: any,
  title:String,
  goalsForBar: String,
  test: String
};

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50,
  },
});

const styles = {
  goals: {
    marginLeft: '65px',
  },
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
  main: {
    paddingLeft: '350px',
    paddingRight: '5%'
  },
  appbar: {
    paddingLeft: '350px'
  },
  whiteText: {
    color: 'rgb(255,255,255)'
  }
};


class AppDrawer extends React.Component {
  props: Props

  render() {
    const {
      title,
      main,
      goalsForBar,
      test
    } = this.props;


    const testerie =
      <div>
      <MenuItem
      style={styles.goals}
      onTouchTap={this.drawerOpen}
      containerElement={<Link to="/goal/1" />}
      primaryText={test} />
      </div>
    ;

    const leftButton = (
      <div>

    <Drawer
        open='true'
        width={'300px'}
        containerStyle={styles.drawer}
    >
      <Card style={styles.card}>
      <CardHeader
        title='username here'
        avatar={ProfilePic}
        titleStyle={styles.card} />
      </Card>
      <MenuItem leftIcon={<CheckBox />} onTouchTap={this.drawerOpen} containerElement={<Link to="/" />} primaryText="Goals" />
      <MenuItem leftIcon={<ShoppingCart />} onTouchTap={this.drawerOpen} containerElement={<Link to="/marketplace" />} primaryText="Marketplace" />
        <Divider style={styles.divider}/>
      <MenuItem leftIcon={<AccountIcon />} style={styles.secondMenu} onTouchTap={this.drawerOpen} containerElement={<Link to="/account" />} primaryText="Account" />
      <MenuItem  leftIcon={<SettingsIcon />} style={styles.secondMenu} onTouchTap={this.drawerOpen} containerElement={<Link to="/settings" />} primaryText="Settings" />
      <MenuItem  leftIcon={<InfoIcon />} style={styles.secondMenu} onTouchTap={this.drawerOpen} containerElement={<Link to="/about" />} primaryText="About" />
      <MenuItem style={styles.secondMenu} onTouchTap={this.drawerOpen} containerElement={<Link to="/logoff" />} primaryText="Log off" />
      {testerie}
    </Drawer>
    </div>
    );

    const searchBar = (
      <TextField hintText="Search" />
    );

    const rightMenu = (
      <div>
      <SearchIcon style={styles.whiteText} />
       <IconMenu iconStyle={styles.whiteText}
        iconButtonElement={
          <IconButton><Menu /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem containerElement={<Link to="/profile" />} primaryText={"Manage Categories (HC)"} />
        <MenuItem containerElement={<Link to="/marketplace" />} primaryText="Settings (HC)" />
      </IconMenu>
      </div>
    );


    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
        <AppBar
          iconElementLeft={leftButton}
          title= {'LifeSmack'}
          titleStyle={styles.appbar}
        />

          <div style={styles.main}>
              {main}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}


export default AppDrawer;
