import {FETCH_COMMENTS_SUCCESS} from '../actions/comments';

const comments = (state = {}, action) => {
  switch(action.type) {
    case FETCH_COMMENTS_SUCCESS: {
      console.log('CHECK IT OUT, COMMENTS!', action);
      return {
        ...state,
        comments: action.payload
      };
    }

    default:
      return state;
  }
}

export default comments;
