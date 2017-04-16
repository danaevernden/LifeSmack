/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';


//to do
//--edit button shows form, but should this be a separate page? can this same container house both pages?
//--use redux-form (download it first) to make it look nice

class EditForm extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
want to put text boxes around existing information for editing.
      </div>
    )
  }
}

class Profile extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      first_name: this.props.profile.first_name,
      last_name: this.props.profile.last_name,
      city: this.props.profile.city,
      state: this.props.profile.state
    }

      this.updateProfileInfo = this.updateProfileInfo.bind(this);
      this.editButton = this.editButton.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

//calls connected prop addnewsitem from connect.js . sets state to wipe out name and task after adding
  updateProfileInfo() {
    //this is a dispatch
      this.setState({
      first_name: "",
      last_name: "",
      city: "",
      state: ""
    })
  }

  editButton() {
    this.setState({editMode: !this.state.editMode});
  }
  render() {

    const listItems =

    this.props.profile.map((profile) =>
    <div><b>Name: </b>{profile.first_name} {profile.last_name}
    <br/><b>City: </b>{profile.city}
    <br/><b>State: </b>{profile.state}
    </div>
    );
    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>Profile</h2>
                <div>
                  <div>
                    {this.state.editMode ?
                    <div>First Name: <input value={this.state.first_name}/>
                    <br/>Last Name <input value={this.state.last_name}/>
                    <br/>City <input value={this.state.city}/>
                    <br/>State <input value={this.state.state}/>
                    </div>: <div>{listItems}</div>}
                    <button onClick={this.editButton}>Edit</button>
                  </div>
                </div>
          </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
//connect merges objects into one and passes it into newsfeed as props
