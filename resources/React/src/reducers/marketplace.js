import {FETCH_MARKETPLACE_SUCCESS} from '../actions/marketplace';

const marketplace = (state = {}, action) => {
  switch(action.type) {
    case FETCH_MARKETPLACE_SUCCESS: {
      console.log('CHECK IT OUT!', action);
      return {
        ...state,
        marketplace: action.payload
      };
    }

    default:
      return state;
  }
}

export default marketplace;
