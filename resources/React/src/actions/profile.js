import { CALL_API } from 'redux-api-middleware';
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';

export default function fetchProfile(userId) {
  console.log("get user", userId)
    return {
      [CALL_API]: {
          endpoint: '/api/user/1',
          method: 'GET',
          types: [FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE]
      },
    };
}

export function updateProfileInfo(first_name, city, state, country) {
    console.log("edit user", first_name, city, state, country)
    return {
      [CALL_API]: {
          endpoint: '/api/user/edit/1',
          method: 'POST',
          types: [EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE],
          body: JSON.stringify({
            first_name: first_name,
            city: city,
            state: state,
            country: country
          })
      },
    };

}

export const editProfile = (first_name, last_name, city, region) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: UPDATE_PROFILE_INFO,
    updateProfileInfo: {
      first_name,
      last_name,
      city,
      region
    }
  };
}
updateProfileInfo
