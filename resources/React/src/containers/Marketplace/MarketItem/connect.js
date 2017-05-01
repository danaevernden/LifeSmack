import fetchReviews from '../../../actions/reviews';
import fetchMarketplace from '../../../actions/marketplace';



export const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
  marketplace: state.marketplace.marketplace
});

export const mapDispatchToProps = (dispatch) => ({
  fetchMarketplaceFromActions: () => dispatch(fetchMarketplace()),
  fetchReviewsFromActions: () => dispatch(fetchReviews()),

});
