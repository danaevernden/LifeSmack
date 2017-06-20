/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Layout from '../Layout';

//to do
//--edit button shows form, but should this be a separate page? can this same container house both pages?
//--use redux-form (download it first) to make it look nice

type Props = {
  fetchProfileFromActions: () => void,
  profile: Profile[]
}

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
  static defaultProps: {
    profile: Profile[]
  };

  componentDidMount() {
    this.props.fetchProfileFromActions();
  }
  props:Props

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

    const {
      profile
    } = this.props;

    const listItems =
    profile.map((profile) =>
    <Layout
    title={profile.first_name}
    subtitle={profile.city}
    buttonTitle={"edit"}
    />
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
Profile.defaultProps ={
  profile: []
 };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
//connect merges objects into one and passes it into newsfeed as props
