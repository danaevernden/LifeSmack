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

//to do
//--add link to lifesmack logo

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50,
  },
  IconMenu: {
    color: blue50,
  },
});

type Props = {
  main:any,
};

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
      <a href='/'>
        <MenuItem primaryText="Goals" />
      </a>
      <a href='/profile'>
        <MenuItem primaryText="Profile" />
      </a>
      <a href='/marketplace'>
        <MenuItem primaryText="Marketplace" />
      </a>
      </IconMenu>
    );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar
        iconElementLeft={leftButton}
        title= 'LifeSmack'
      />
      </MuiThemeProvider>
    );
  }
}

export default Homepage;
