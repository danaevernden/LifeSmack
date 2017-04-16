import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { mapStateToProps } from './connect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red700 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Link } from 'react-router';


import './style.css';
//to do
//--get props to work and populate goals
//--get hyperlinks to work
//--get title from route via props and populate appBar title

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50,
  },
});

type Props = {
  main: any,
};

const style = {
  backgroundColor: 'blue'
};

const leftButton = (

   <IconMenu
    iconButtonElement={
      <IconButton><Menu /></IconButton>
    }
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
  <MenuItem
    primaryText="Goals"
    rightIcon={<ArrowDropRight />}
    menuItems={[
      <div>
        <MenuItem containerElement={<Link to="/goal/1" />} primaryText="Run 2017 NYC Marathon" />
        <MenuItem containerElement={<Link to="/goal/2" />} primaryText="Build LifeSmack" />
      </div>
    ]}
  />
  <a href='/profile'>
    <MenuItem primaryText="Profile" />
  </a>
  <a href='/marketplace'>
    <MenuItem primaryText="Marketplace" />
  </a>
  </IconMenu>
);


const App = (props: Props) => (


  <MuiThemeProvider muiTheme={muiTheme}>
    <div className='App'>
    <AppBar
      iconElementLeft={leftButton}
      title= 'LifeSmack'
    />
      {props.main}
    </div>
  </MuiThemeProvider>
);

export default App;
