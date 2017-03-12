import {UPDATE_PROFILE_INFO} from '../actions/profile';

const DEFAULT_STATE = {
  profile:
  [{first_name: "Jane", last_name: "Doe",
  city: "New York", state: "New York"
  }
  ]
}

const profile = (state = DEFAULT_STATE, action) => {
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
    default:
      return state;
  }
}

export default profile;
