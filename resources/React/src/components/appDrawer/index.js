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

import '../app/style.css';
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


class AppDrawer extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state= {
        drawerOpen: false
    }
    this.openDrawer = this.openDrawer.bind(this);
    this.drawerClose = this.drawerClose.bind(this);
  }

  openDrawer() {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }
  drawerClose() {
    this.setState({drawerOpen: false})
  }
  render() {

    const leftButton = (
      <div>
       <IconMenu
        iconButtonElement={
          <IconButton><Menu /></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        open={this.state.drawerOpen}
        onTouchTap={this.openDrawer}
      >
    </IconMenu>
    <Drawer
    docked={false}
    open={this.state.drawerOpen}
    >
      <MenuItem onTouchTap={this.drawerOpen} containerElement={<Link to="/profile" />} primaryText="Profile" />
      <MenuItem onTouchTap={this.drawerOpen} containerElement={<Link to="/marketplace" />} primaryText="Marketplace" />
    </Drawer>
</div>
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


export default AppDrawer;
