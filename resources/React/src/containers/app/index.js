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
