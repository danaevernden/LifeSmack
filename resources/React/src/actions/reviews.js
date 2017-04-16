export const LIKE_REVIEW = 'LIKE_REVIEW';

export const likeReview = (name, task) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: LIKE_REVIEW,
    reviewItem: {
      review_id,
      likes
    }
  };
}

likeReview
