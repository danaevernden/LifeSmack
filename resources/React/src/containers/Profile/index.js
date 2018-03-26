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
      city: this.props.city,
      state: this.props.state,
      country: this.props.country,
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
    this.props.updateProfileInfo(
      this.state.first_name,
      this.state.city,
      this.state.state,
      this.state.country
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
              defaultValue={user.first_name}
              value={this.state.first_name}
              onChange={this.newFirstName}
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
        <div>
            {this.state.editLoc === null ?
              <div>
                {user.city} {user.state}, {user.country}
                <FlatButton
                style={styles.labelStyle}
                onClick={this.editLoc}
                >
                  edit
                </FlatButton>
              </div>
            :
              <div>
                  <TextField
                    defaultValue={user.city}
                    value={this.state.city}
                    onChange={this.newCity}
                  />
                  <FlatButton
                  style={styles.labelStyle}
                  onClick={() =>this.save()}
                  >
                    save
                  </FlatButton>
                  <TextField
                    defaultValue={user.state}
                    value={this.state.state}
                    onChange={this.newState}
                  />
                  <FlatButton
                  style={styles.labelStyle}
                  onClick={() =>this.save()}
                  >
                    save
                  </FlatButton>
                  <TextField
                    defaultValue={user.country}
                    value={this.state.country}
                    onChange={this.newCountry}
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
