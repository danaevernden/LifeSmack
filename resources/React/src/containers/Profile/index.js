/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import profilePic from '../../../../../public/images/comedy.jpg';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

type Props = {
  fetchProfileFromActions: () => void,
  updateProfileInfo: (first_name) => void,
  users: User[],
  id: Number,
  first_name: String,
  email: String
}

const styles = {
  listItems: {
    marginTop: '40px',
    display: 'inline-block',
    position: 'fixed',
/*    marginLeft: '80px'*/
  },
  labelStyle: {
    fontSize: '12px',
    color: 'red',
    marginLeft: '-20px'
  }
}

class Profile extends React.Component{

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
      email: this.props.email,
      editName: false,
      editLoc: null,
      editProfPic: null
    }
      this.save = this.save.bind(this);
      this.editName = this.editName.bind(this);
      this.editLoc = this.editLoc.bind(this);
  }

  editName(){
    this.setState({
        editName: !this.state.editName
  });
  }

  save(){
    console.log('name' & this.state.editLoc);
    this.props.updateProfileInfo(
      this.state.first_name,
      this.state.email
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

  newEmail = (event) => {
    this.setState({
      email: event.target.value
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

  editLoc(){
    this.setState({
        editLoc: !this.state.editLoc
    })
  }


  render() {

    const {
      users
    } = this.props;

    const listItems =
    users.map((user) =>
    <div>
        <div>
          {this.state.editProfPic === null ?
            <div>
              <Avatar src={profilePic} size={150} />
            </div>
          :
            <div>
                <FlatButton
                style={styles.labelStyle}
                onClick={this.saveProfPic}
                >
                  save
                </FlatButton>
            </div>
          }
        </div>
        <br/>
        <div>
          {this.state.editName === false ?
            <div>
              {user.first_name}
              <br/>
              {user.email}
              <FlatButton
              style={styles.labelStyle}
              onClick={this.editName}
              >
                edit
              </FlatButton>
            </div>
          :
            <div>
            <TextField
              floatingLabelText="Name"
              defaultValue={user.first_name}
              value={this.state.first_name}
              onChange={this.newFirstName}
            />
            <TextField
              floatingLabelText="Email"
              defaultValue={user.email}
              value={this.state.email}
              onChange={this.newEmail}
            />
                <FlatButton
                style={styles.labelStyle}
                onClick={() =>this.save()}
                >
                  save
                </FlatButton>
            </div>
          }
        </div>
        <br/>

    </div>
    );

    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
                <div style={styles.listItems}>
                  <h3>Personal Information</h3>
                  {listItems}
                </div>
          </div>
      </div>
    );
  }
}

Profile.defaultProps ={
  users: []
 };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);


//old code
//                    {this.state.editMode ?
//                    <div>First Name: <input value={this.state.first_name}/>
//                    <br/>Last Name <input value={this.state.last_name}/>
//                    <br/>City <input value={this.state.city}/>
//                    <br/>State <input value={this.state.state}/>
//                    </div>: }
