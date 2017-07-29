import fetchReviews from '../../../actions/reviews';
import fetchMarketplacegoals from '../../../actions/marketplacegoals';
import fetchMarkettasks from '../../../actions/markettasks';
import fetchComments from '../../../actions/comments';


export const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  marketplacegoals: state.marketplacegoals.marketplacegoals,
  markettasks: state.markettasks.markettasks,
  comments: state.comments.comments,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchMarketplacegoalsFromActions: () => dispatch(fetchMarketplacegoals()),
  fetchReviewsFromActions: () => dispatch(fetchReviews()),
  fetchMarkettasksFromActions: () => dispatch(fetchMarkettasks()),
  fetchCommentsFromActions: () => dispatch(fetchComments()),
});
