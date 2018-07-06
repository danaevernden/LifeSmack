import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import AppDrawer from '../../components/appDrawer';
import { mapStateToProps, mapDispatchToProps } from './connect';

type Props = {
  main: any,
  fetchGoalsFromActions: () => void,
  fetchProfileFromActions: () => void,
  goals: Goal[],
  users: User[]
};


const styles = {
  goals: {
    marginLeft: '65px',
  },
  mainStyle: {
    marginLeft: '300px',
  }
}

class App extends React.Component {
  static defaultProps: {
    goals: Goal[]
  };

  componentDidMount() {
    this.props.fetchGoalsFromActions();
    this.props.fetchProfileFromActions();
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
      users
    } = this.props;

    const goals2 = goals.map((goal) =>
    <div>
        <MenuItem
        key={goal.id}
        style={styles.goals}
        href={'/goal/' + goal.id}
        primaryText={goal.goal_name} />
    </div>
    );

    const profGrab =
    users.map((user) =>
    <div>
    {user.first_name} {user.last_name}
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
          <div style={styles.mainStyle}>
          {main}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.defaultProps ={
  goals: [],
  users: []
 };

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
