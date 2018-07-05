/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}


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

class LoginOld extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      first_name: this.props.first_name,
      email: this.props.email
    }
    this.saveFB = this.saveFB.bind(this);
  }


saveFB(response) {
  console.log(response);
  this.setState({
      first_name: response.name,
      email: response.email
});
console.log(this.state.email);
console.log(this.state.first_name)
}

render () {

    return (
      <body>
      <div className = 'App-page'>
          <div className = 'App-content'>
              <MuiThemeProvider>
                <div style={styles.topMenu}>
                <br/>
                <TextField hintText="Email"/>
                <br/>
                    <TextField type="password" hintText="password"/>
                    <br/>
                    <RaisedButton label="Log in"/>
                    <br/><br/>
                    <Link to="/signup">
                    <RaisedButton label="Sign up" />
                    </Link>
                    <br/>
                    <a>Forgot your password?</a>
                    <br/><br/>
                    <br/><br/>
                    <FacebookLogin
                      appId="415568495608709"
                      autoLoad={true}
                      fields="name,email"
                      callback={this.saveFB} />
                </div>
              </MuiThemeProvider>
          </div>
      </div>
      </body>
    );
  }
}

//field not used: picture
export default LoginOld;
