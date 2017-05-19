import {FETCH_GOALS_SUCCESS} from '../actions/goals';
import {EDIT_GOALS_SUCCESS} from '../actions/goals';

const goals = (state = {}, action) => {
  switch(action.type) {
    case FETCH_GOALS_SUCCESS: {
      console.log('CHECK IT OUT!', action);
      return {
        ...state,
        goals: action.payload
      };
    }
    case EDIT_GOALS_SUCCESS: {
      console.log('EDIT IT OUT!', action);
      return {
        ...state,
        goals: action.payload
      };
    }
    default:
      return state;
  }
}

export default goals;
