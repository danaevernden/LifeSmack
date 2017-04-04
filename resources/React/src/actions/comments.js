export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (comment) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: ADD_COMMENT,
    commentItem: {
      comment
    }
  };
}

addComment
