/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import profilePic from '../../../../../public/images/comedy.jpg';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


type Props = {
  updateProfileInfo: (first_name) => void,
  users: User[],
  id: Number,
  first_name: String,
  city: String,
  state: String,
  country: String
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

  componentDidMount() {
    this.props.fetchProfileFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
      id: this.props.user_id,
      first_name: this.props.first_name,
      city: this.props.city,
      country: this.props.country,
      region: this.props.region,
      state: this.props.state,
      country: this.props.country,
      email: this.props.email,
      password: this.props.password,

    }
      this.editName = this.editName.bind(this);
      this.editLoc = this.editLoc.bind(this);
  }

  editName(){
    this.setState({
        editName: !this.state.editName
  });
  }

  save(){
    this.props.updateProfileInfo(
      this.state.first_name,
      this.state.city,
      this.state.state,
      this.state.country,
    )
    .then(() => {
      this.setState({
        editName: false
      });
    })
  }

  newFirstName = (event) => {
    this.setState({
      first_name: event.target.value
    });
  }

  newCity = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  newState = (event) => {
    this.setState({
      state: event.target.value
    });
  }

  newCountry = (event) => {
    this.setState({
      country: event.target.value
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


  editLoc(){
    this.setState({
        editLoc: !this.state.editLoc
    })
  }



  selectCountry (val) {
      this.setState({ country: val });
    }

    selectRegion (val) {
      this.setState({ region: val });
    }

  render() {

    const {
      users
    } = this.props;

    const listItems =
    users.map((user) =>
    <div>

        <br/>
            <TextField
              placeholder="Name"
              value={this.state.first_name}
              onChange={this.newFirstName}
            />

                <br/>
                <CountryDropdown
                  value={this.state.country}
                  onChange={(val) => this.selectCountry(val)}
                />
                <br/>
                <br/>
                <RegionDropdown
                  country={this.state.country}
                  value={this.state.region}
                  onChange={(val) => this.selectRegion(val)}
                />
                <br/>

                  <TextField
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.newEmail}
                  />
                  <TextField
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.newPassword}
                  />
                  <TextField
                    placeholder="Reenter Password"
                    value={this.state.reenterPassword}
                    onChange={this.newreenterPassword}
                  />

                  <FlatButton
                  style={styles.labelStyle}
                  onClick={this.saveProfPic}
                  >
                    Submit
                  </FlatButton>
      </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
          <div style={styles.topMenu}>

                <div style={styles.listItems}>
                  <h3>Sign Up</h3>
                  {listItems}
                </div>
              </div>
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
