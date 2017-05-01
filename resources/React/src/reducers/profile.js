import {UPDATE_PROFILE_INFO} from '../actions/profile';
import {FETCH_PROFILE_SUCCESS} from '../actions/profile';


const profile = (state = {}, action) => {
  switch(action.type) {
    // type tells the reducer what to do
    // all reducers are listening for an action
    // anytime state changes, the app will rerender per react
    // what happens after dispatch is fires off
    case UPDATE_PROFILE_INFO: {
      return {
        ...state, //copies everything from the existing state into the new state
        //figure out how to update profile info here.
        profile: state.profile.concat([action.profile])
      };
    }
    case FETCH_PROFILE_SUCCESS: {
      console.log('CHECK IT OUT, PROFILE!', action);
      return {
        ...state,
        profile: action.payload
      };
    }

    default:
      return state;
  }
}

export default profile;
