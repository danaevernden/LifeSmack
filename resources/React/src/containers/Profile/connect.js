import {updateProfileInfo} from '../../actions/profile';
import fetchProfile from '../../actions/profile';

export const mapStateToProps = (state) => ({
  profile: state.profile.profile
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProfileFromActions: () => dispatch(fetchProfile()),
  updateProfileInfo: (first_name, last_name, city, state) => dispatch(updateProfileInfo(first_name, last_name, city, state))
});
