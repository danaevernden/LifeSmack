import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import logo from '../../../../../public/images/marketplace task icon.png';


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
class Logout extends React.Component{

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

  render() {

    return (
      <body style={styles.body}>
      <div className='App-page'>
          <div className='App-content'>
              <MuiThemeProvider>
              <div style={styles.topMenu}>
                <h3>You are Logged Out</h3>
                <br/>
                <img role="presentation" src={logo}/>
                <br/><br/>
                <h5>We are sad to see you go!</h5>
              </div>
              </MuiThemeProvider>
            </div>
      </div>
      </body>
    );
  }
}

export default Logout;
