import {EDIT_PROFILE_SUCCESS} from '../actions/profile';
import {FETCH_PROFILE_SUCCESS} from '../actions/profile';
import {POST_PROFILE_SUCCESS} from '../actions/profile';

const users = (state = {}, action) => {
  switch(action.type) {
    case EDIT_PROFILE_SUCCESS:
    case POST_PROFILE_SUCCESS:
    case FETCH_PROFILE_SUCCESS: {
      console.log('CHECK IT OUT, PROFILES!', action);
      return {
        ...state,
        users: action.payload
      };
    }

    default:
      return state;
  }
}

export default users;
