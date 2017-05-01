import {FETCH_CATEGORIES_SUCCESS} from '../actions/categories';

const categories = (state = {}, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      console.log('CHECK IT OUT, CATEGORIES!', action);
      return {
        ...state,
        categories: action.payload
      };
    }

    default:
      return state;
  }
}

export default categories;
