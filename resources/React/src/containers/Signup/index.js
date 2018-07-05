/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mapDispatchToProps, mapStateToProps } from './connect';
import profilePic from '../../../../../public/images/comedy.jpg';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FacebookLogin from 'react-facebook-login';
import { browserHistory } from 'react-router';

type Props = {
  createProfile: (first_name, email) => Promise<any>
}

const styles = {
  listItems: {
    marginTop: '40px',
    display: 'inline-block',
    position: 'fixed',
    marginLeft: '80px'
  },
  labelStyle: {
    fontSize: '12px',
    color: 'red',
    marginLeft: '-20px'
  },
  topMenu: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'inline-block',
    marginTop: '40px'
  },
}

class Signup extends React.Component{

  static defaultProps: {
    users: User[]
  };

  props:Props

  constructor(props){
    super(props)
    this.state= {
      first_name: '',
      email: '',
      password: '',
      editName: '',
      editName: false

    }
      this.saveProfile = this.saveProfile.bind(this);
      this.editName = this.editName.bind(this);
      this.saveFB = this.saveFB.bind(this);
      this.newName = this.newName.bind(this);
      this.newEmail = this.newEmail.bind(this);
      this.newPassword = this.newPassword.bind(this);
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


  editName(){
    this.setState({
        editName: !this.state.editName
  });
  }

  saveProfile(){
    console.log("hi");
    this.props.createProfile(
      this.state.first_name,
      this.state.email
    )
    browserHistory.push('/');
  }


  newName = (event) => {
    this.setState({
      first_name: event.target.value
    });
  }

  newEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  newPassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }


  render() {

    const {
      users,
      createProfile
    } = this.props;

    const listItems =
    <div>

        <br/>
            <TextField
              placeholder="Name"
              value={this.state.first_name}
              onChange={this.newName}
            />
                  <TextField
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.newEmail}
                  />
                  <TextField
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.newPassword}
                  />
                  <TextField
                    type="password"
                    placeholder="Reenter Password"
                    value={this.state.reenterPassword}
                    onChange={this.newreenterPassword}
                  />

                  <FlatButton
                  style={styles.labelStyle}
                  onClick={this.saveProfile}
                  >
                    Submit
                  </FlatButton>
                  <br/>
                  OR
                  <br/>
                  <FacebookLogin
                    appId="415568495608709"
                    autoLoad={true}
                    fields="name,email"
                    callback={this.saveFB} />
      </div>;

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
          <MuiThemeProvider>
                <div style={styles.topMenu}>
                <div style={styles.listItems}>
                  <h3>Sign Up</h3>
                  {listItems}
                </div>
              </div>
              </MuiThemeProvider>
          </div>
      </div>
    );
  }
}

Signup.defaultProps ={
  users: []
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);


//old code
//                    {this.state.editMode ?
//                    <div>First Name: <input value={this.state.first_name}/>
//                    <br/>Last Name <input value={this.state.last_name}/>
//                    <br/>City <input value={this.state.city}/>
//                    <br/>State <input value={this.state.state}/>
//                    </div>: }
