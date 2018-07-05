import {createProfile} from '../../actions/profile';

export const mapStateToProps = (state) => ({
  users: state.users.users
});

export const mapDispatchToProps = (dispatch) => ({
  createProfile: (first_name, email) => dispatch(createProfile(first_name, email))
});
