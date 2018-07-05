import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red700 } from 'material-ui/styles/colors';
import '../old/app/style.css';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AppDrawerMenu from '../appDrawerMenu';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

type Props = {
  main: any,
  goalsForBar: String,
  username: String
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
    backgroundColor: 'rgb(250,250,250)',
    zIndex:'1'
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

class AppDrawer extends React.Component {
  props: Props

  constructor(props){
    super(props)
    this.state= {
      searchBarVisible: false
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
      username
    } = this.props;

    const searchBar = (
      <TextField hintText="Search" />
    );

    const rightButton = (
      <div>
        <SearchIcon style={styles.searchIconStyle}
          onTouchTap={this.openSearchBar}
        />
        {this.state.searchBarVisible === true ?
          <TextField hintText="Search"
            hintStyle={styles.whiteText}
            inputStyle={styles.whiteText}
            underlineFocusStyle={styles.whiteText} //not working
          /> :
        null }
      </div>
    );

    const rightButton2 =
    <div>
      <Link to="/login">
      <FlatButton style={styles.whiteText}>
        Logout
      </FlatButton>
      </Link>
    </div>

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
        <AppBar
          iconElementLeft={
            <AppDrawerMenu
              username={username}
              goalsForBar={goalsForBar}
              />}
          title={'LifeSmack'}
          titleStyle={styles.appBarTitle}
          style={styles.appBarStyle}
          iconElementRight={rightButton2}
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
