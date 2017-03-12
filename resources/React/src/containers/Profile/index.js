/* eslint-disable */
import { connect } from 'react-redux';
import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './connect';
import Homepage from '../../components/Homepage';


//declare a state up here in a constructor
//type Props = {
//  areGoalsLoading: Bool,
//  fetchGoals: () => void,
//  goals: Goal[]
//};


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
      filter: "",
      name: "",
      task: "",
      showReply: false
    }

      this.updateProfileInfo = this.updateProfileInfo.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

//calls connected prop addnewsitem from connect.js . sets state to wipe out name and task after adding
  updateProfileInfo() {
    //this is a dispatch
    this.props.updateProfileInfo(this.state.name, this.state.task);
    this.setState({
      name: "",
      task: ""
    })
  }

  render() {

    const listItems =
    this.props.profile.map((profile) =>
    <li>{profile.first_name} {profile.last_name} {profile.city} {profile.state}</li>
    );
    //edit button to show form
    return (
      <div className = 'App-page'>
          <div className = 'App-content'>
              <h2>Profile</h2>
                <ul>{listItems}</ul>
                <div>
                  <div>
                    <button onClick={this.onClick.bind(this)}>Edit</button>
                    {this.state.showReply && < EditForm / >}
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
