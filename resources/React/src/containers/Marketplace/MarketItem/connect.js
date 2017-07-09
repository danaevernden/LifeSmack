import fetchReviews from '../../../actions/reviews';
import fetchMarketplace from '../../../actions/marketplace';
import fetchMarkettasks from '../../../actions/markettasks';
import fetchComments from '../../../actions/comments';


export const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  marketplace: state.marketplace.marketplace,
  markettasks: state.markettasks.markettasks,
  comments: state.comments.comments,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchMarketplaceFromActions: () => dispatch(fetchMarketplace()),
  fetchReviewsFromActions: () => dispatch(fetchReviews()),
  fetchMarkettasksFromActions: () => dispatch(fetchMarkettasks()),
  fetchCommentsFromActions: () => dispatch(fetchComments()),
});
