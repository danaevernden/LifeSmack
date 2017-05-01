import { CALL_API } from 'redux-api-middleware';
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';

export default function fetchProfile() {
    return {
      [CALL_API]: {
          endpoint: '/api/profile',
          method: 'GET',
          types: [FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE]
      },
    };
}


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
