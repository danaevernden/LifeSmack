import {FETCH_MARKETTASKS_SUCCESS} from '../actions/markettasks';

const markettasks = (state = {}, action) => {
  switch(action.type) {
    case FETCH_MARKETTASKS_SUCCESS: {
      console.log('CHECK IT OUT!', action);
      return {
        ...state,
        markettasks: action.payload
      };
    }

    default:
      return state;
  }
}

export default markettasks;
