import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../../../../public/images/welcome.png';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
 logo: {
   height: '400px',
 }
};

class Landing extends React.Component{

  render() {

    return (
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
              <div>
                <img role="presentation" src={logo} style={styles.logo} />
                <br/>
                <Link to="/login">
                  <FlatButton>Log In</FlatButton>
                </Link>
                <Link to="/signup">
                  <FlatButton>Sign Up</FlatButton>
                </Link>
              </div>
              </MuiThemeProvider>
            </div>
      </div>
    );
  }
}

export default Landing;
