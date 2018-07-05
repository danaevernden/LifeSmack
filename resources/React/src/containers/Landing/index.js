import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../../../../public/images/LandingScreen.png';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
 backgroundColor: 'rgb(213,0,0)',
 logo: {
   height: '400px',
 },
 body: {
   height: '100%',
   backgroundColor: 'rgb(213,0,0)',
 }
};

class Landing extends React.Component{

  render() {

    return (
      <body style={styles.body}>
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
              <div style={styles}>
                <img src={logo} style={styles.logo} />
                <br/>
                <Link to="/login">
                  <FlatButton>Login</FlatButton>
                </Link>
                <Link to="/signup">
                  <FlatButton>Sign Up</FlatButton>
                </Link>
              </div>
              </MuiThemeProvider>
            </div>
      </div>
      </body>
    );
  }
}

export default Landing;
