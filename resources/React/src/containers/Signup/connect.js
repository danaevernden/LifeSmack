import {updateProfileInfo} from '../../actions/profile';
import fetchProfile from '../../actions/profile';

export const mapStateToProps = (state) => ({
  users: state.users.users
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProfileFromActions: (user_id) => dispatch(fetchProfile(user_id)),
  updateProfileInfo: (first_name, city, state, country) => dispatch(updateProfileInfo(first_name, city, state, country))
});
