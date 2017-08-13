import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AppDrawer from '../../components/appDrawer';
import { mapStateToProps, mapDispatchToProps } from './connect';
//to do
//--get props to work and populate goals
//--get hyperlinks to work



type Props = {
  main: any,
  fetchGoalsFromActions: () => void,
  fetchProfileFromActions: () => void,
  goals: Goal[],
  profile: Profile[]
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
      goals,
      profile
    } = this.props;


    const goals2 = goals.map((goal) =>
    <div>
        <MenuItem
        style={styles.goals}
        href={'/goal/' + goal.id}
        primaryText={goal.goal_name} />
    </div>
    );

    const profGrab =
    profile.map((profile) =>
    <div>
    {profile.first_name} {profile.last_name}
    </div>
    );

    const AppComponent2 = (

        <AppDrawer
        goalsForBar={goals2}
        username={profGrab}
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
  goals: [],
  profile: []
 };


export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
