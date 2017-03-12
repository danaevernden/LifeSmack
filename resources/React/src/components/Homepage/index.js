/* eslint-disable */

import React, { Component } from 'react';
import logo from './LogoSmallCondensed.jpg';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red700 } from 'material-ui/styles/colors';
import { blue50 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Counter from '../Counter';
import './style.css';

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50,
  },
  IconMenu: {
    color: blue50,
  },
});


/* Component */
class Homepage extends Component {

  render() {


    const rightButton = (
      <FlatButton onClick={this.handleAuthClicked}>
        Profile
      </FlatButton>
    );
    const leftButton = (
      <IconMenu
        iconButtonElement={
          <IconButton><Menu /></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      >
      <a href='/profile'>
        <MenuItem primaryText="Profile" />
      </a>
      <a href='/marketplace'>
        <MenuItem primaryText="Marketplace" />
      </a>
      <a href='/newsfeed'>
        <MenuItem primaryText="Newsfeed"/>
      </a>
      </IconMenu>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar
      //  showMenuIconButton={false}
        iconElementLeft={leftButton}
        title= 'LifeSmack'
      />
      {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Homepage;
