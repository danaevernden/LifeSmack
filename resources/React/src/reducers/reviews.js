import {FETCH_REVIEWS_SUCCESS} from '../actions/reviews';

const reviews = (state = {}, action) => {
  switch(action.type) {
    case FETCH_REVIEWS_SUCCESS: {
      console.log('CHECK IT OUT, REVIEWS!', action);
      return {
        ...state,
        reviews: action.payload
      };
    }

    default:
      return state;
  }
}

export default reviews;
