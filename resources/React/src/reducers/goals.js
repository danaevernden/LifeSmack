import {
  FETCH_GOALS_REQUEST,
  FETCH_GOALS_SUCCESS,
} from '../actions/goals';

const goals = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GOALS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_GOALS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        goals: action.payload,
      };
    }
    default:
      return state;
  }
};

export default goals;
