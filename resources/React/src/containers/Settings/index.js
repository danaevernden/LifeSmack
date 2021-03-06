import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mapStateToProps, mapDispatchToProps } from './connect';
import { connect } from 'react-redux';
import Profile from '../Profile';

type Props = {
  users: User[],
  fetchProfileFromActions: () => void,
  }

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '40px'
  },
}

class Settings extends React.Component {

  static defaultProps: {
    users: User[],
  };

  componentDidMount() {
    this.props.fetchProfileFromActions();
  }
  props:Props

  render () {

    const {
      users
    } = this.props;

      const profile =
      users.map((user) =>
        <Profile
          first_name={user.first_name}
          user_id={user.id}
          email={user.email}
        />
      )
      ;


    return(
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
                <div style={styles.topMenu}>
                  {profile}
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    )
  }
}

Settings.defaultProps ={
  users: []
 };

 export default connect(
   mapStateToProps, mapDispatchToProps
 )(Settings);
