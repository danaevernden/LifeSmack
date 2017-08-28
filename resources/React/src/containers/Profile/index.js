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
  profile: Profile[],
  first_name: String,
  last_name: String,
  city: String,
  region: String
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

  componentDidMount() {
    this.props.fetchProfileFromActions();
  }
  props:Props

  constructor(props){
    super(props)
    this.state= {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      city: this.props.city,
      region: this.props.region,
      editName: false,
      editLoc: null,
      editProfPic: null
    }

      this.editName = this.editName.bind(this);
      this.saveName = this.saveName.bind(this);
  }

  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

  editName(){
    this.setState({
        editName: !this.state.editName
    })
  }
  saveName(event){
    this.setState({
      first_name: event.target.value,
      editName: !this.state.editName
    })
  }

  render() {

    const {
      profile
    } = this.props;

    const listItems =
    profile.map((profile) =>
    <div>
      test:{this.state.first_name}
        <div>
          {this.state.editProfPic === null ?
            <div>
              <Avatar src={profilePic} size={150} />
              <FlatButton
              style={styles.labelStyle}
              onClick={this.editProfPic}
              >
                edit
              </FlatButton>
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
              {this.state.first_name}
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
                  defaultValue={this.state.first_name}
                  value={this.state.first_name}
                />
                <FlatButton
                style={styles.labelStyle}
                onClick={this.saveName}
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
                {profile.city}, {profile.region}
                <FlatButton
                style={styles.labelStyle}
                >
                  edit
                </FlatButton>
              </div>
            :
              <div>
                  <TextField
                    defaultValue={this.state.city}
                    value={this.state.city}
                  />
                  <FlatButton
                  style={styles.labelStyle}
                  onClick={this.saveLoc}
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
              <div>
                <div style={styles.listItems}>
                <h3>Personal Information</h3>
                  {listItems}
                <h3>Login Information</h3>
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


//old code
//                    {this.state.editMode ?
//                    <div>First Name: <input value={this.state.first_name}/>
//                    <br/>Last Name <input value={this.state.last_name}/>
//                    <br/>City <input value={this.state.city}/>
//                    <br/>State <input value={this.state.state}/>
//                    </div>: }
