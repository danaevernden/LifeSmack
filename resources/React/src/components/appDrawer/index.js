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
import '../old/app/style.css';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AppDrawerMenu from '../appDrawerMenu';
//to do
// get goalsForBar to work
//add notifications back in if part of MVP
//    <MenuItem leftIcon={<Flag />} onTouchTap={this.drawerOpen} containerElement={<Link to="/notifications" />} primaryText="Notifications" />

type Props = {
  main: any,
  goalsForBar: String,
  test: String
};

const muiTheme = getMuiTheme({
  appBar: {
    color: red700,
    height: 50
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


class AppDrawer extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state= {
      searchBarVisible: false,
      test: this.props.test
    }

  this.openSearchBar = this.openSearchBar.bind(this);
}
    openSearchBar() {
      this.setState({searchBarVisible: !this.state.searchBarVisible})
    }

  render() {
    const {
      main,
      goalsForBar,
      test
    } = this.props;


    const searchBar = (
      <TextField hintText="Search" />
    );

    const rightButton = (
      <div>
      <SearchIcon style={styles.searchIconStyle}
      onTouchTap={this.openSearchBar}/>
      {this.state.searchBarVisible == true ?
      <TextField hintText="Search"
      hintStyle={styles.whiteText}
      inputStyle={styles.whiteText}
      underlineFocusStyle={styles.whiteText} //not working
       /> : null }
      </div>
    );


    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
        <AppBar
          iconElementLeft={<AppDrawerMenu test={this.props.test} goalsForBar={goalsForBar}/>}
          title= {'LifeSmack'}
          titleStyle={styles.appBarTitle}
          style={styles.appBarStyle}
          iconElementRight={rightButton}
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
