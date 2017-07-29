import {FETCH_MARKETPLACEGOALS_SUCCESS} from '../actions/marketplacegoals';

const marketplacegoals = (state = {}, action) => {
  switch(action.type) {
    case FETCH_MARKETPLACEGOALS_SUCCESS: {
      console.log('CHECK IT OUT, MARKETPLACEGOALS!', action);
      return {
        ...state,
        marketplacegoals: action.payload
      };
    }

    default:
      return state;
  }
}

export default marketplacegoals;
