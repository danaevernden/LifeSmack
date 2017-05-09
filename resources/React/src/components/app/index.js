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

import './style.css';
//to do
// get goalsForBar to work

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50,
  },
});

type Props = {
  main: any,
  title: string,
  goalsForBar: String
};

const style = {
  backgroundColor: 'blue'
};


class App extends React.Component {
  props: Props

  render() {

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
            {goalsForBar}
          </div>
        ]}
      />
        <MenuItem containerElement={<Link to="/profile" />} primaryText="Profile" />
        <MenuItem containerElement={<Link to="/marketplace" />} primaryText="Marketplace" />
        {goalsForBar}
      </IconMenu>
    );

    const {
      title,
      main,
      goalsForBar
    } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
        <AppBar
          iconElementLeft={leftButton}
          title= {'LifeSmack'}
        />
          {goalsForBar}
          {main}
        </div>
      </MuiThemeProvider>
    )
  }
}


export default App;
