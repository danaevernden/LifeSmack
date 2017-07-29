import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../../../../public/images/LandingScreen.png';

const styles = {
 backgroundColor: 'rgb(213,0,0)',
 logo: {
   height: '600px',
 }
};

class Landing extends React.Component{

  render() {

    return (
      <body style={styles}>
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
              <div style={styles}>
                <img src={logo} style={styles.logo} />
              </div>
              </MuiThemeProvider>
            </div>
      </div>
      </body>
    );
  }
}

export default Landing;
