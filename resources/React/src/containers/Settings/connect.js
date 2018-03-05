import fetchProfile from '../../actions/profile';


export const mapStateToProps = (state) => ({
  users: state.users.users
});


export const mapDispatchToProps = (dispatch) => ({
    fetchProfileFromActions: (user_id) => dispatch(fetchProfile(user_id)),
});
