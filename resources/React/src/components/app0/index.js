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

//to do
//--get props to work and populate goals
//--get hyperlinks to work
//--get title from route via props and populate appBar title


type Props = {
  main: any,
  title: String,
  goal_name: String,
  goal_id: Number
};


class App2 extends React.Component {
  props: Props

  render() {
    const {
      title,
      main,
      goal_name,
      goal_id
    } = this.props;

    const menuItems =
          <div>
            <MenuItem containerElement={<Link to={"/goals/1"} />} primaryText={goal_name} />
          </div>
          ;

    return (
      <MuiThemeProvider>
        <div>
          {menuItems}
        </div>
      </MuiThemeProvider>
    )
  }
}


export default App2;
