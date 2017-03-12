import {updateProfileInfo} from '../../actions/profile';

export const mapStateToProps = (state) => ({
  profile: state.profile.profile
});

export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  updateProfileInfo: (first_name, last_name, city, state) => dispatch(updateProfileInfo(first_name, last_name, city, state))
});
