/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '100px'
  },
  contactUs: {
    color: 'rgb(207,37,37)',
    fontWeight: 'bold'
  }
}

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state= {
    }
  }

render () {

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <MuiThemeProvider>
                <div style={styles.topMenu}>
                    <TextField hintText="email"/>
                    <TextField hintText="password"/>
                    <br/>
                    <RaisedButton label="Log in"/>
                    <br/><br/>
                    <RaisedButton label="Sign up"/>
                    <br/>
                    <a>Forgot your password?</a>
                    <br/><br/>
                    google login here
                    <br/><br/>
                    facebook login here
                </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

export default Login;
