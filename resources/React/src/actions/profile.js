export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';

export const updateProfileInfo = (first_name, last_name, city, state) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: UPDATE_PROFILE_INFO,
    updateProfileInfo: {
      first_name,
      last_name,
      city,
      state
    }
  };
}
updateProfileInfo
