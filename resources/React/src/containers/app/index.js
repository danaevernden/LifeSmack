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
import AppDrawer from '../../components/appDrawer';
import { mapStateToProps, mapDispatchToProps } from './connect';
import AppGoalsforBar from '../../components/app0';
import AppDrawerMenu from '../../components/appDrawerMenu';
//to do
//--get props to work and populate goals
//--get hyperlinks to work



type Props = {
  main: any,
  fetchGoalsFromActions: () => void,
  goals: Goal[],
};

const styles = {
  goals: {
    marginLeft: '65px',
  }
}

class App extends React.Component {
  static defaultProps: {
    goals: Goal[]
  };

  componentDidMount() {
    this.props.fetchGoalsFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
    }

    }
  render() {

    const {
      main,
      goals
    } = this.props;


    const goals2 = goals.map((goal) =>
    <div>
        <MenuItem
        style={styles.goals}
        containerElement={<Link to='/goal/1'/>} //need to update
        primaryText={goal.goal_name} />
    </div>
    );

    const AppComponent2 = (

        <AppDrawer
        goalsForBar={goals2}
        />
    );

    return (
      <MuiThemeProvider>
        <div className='App'>
          {AppComponent2}
          {main}
        </div>
      </MuiThemeProvider>
    )
  }
}
App.defaultProps ={
  goals: []
 };


export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
