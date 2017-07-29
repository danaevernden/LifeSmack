import fetchMarketplacegoals from '../../../actions/marketplacegoals';

export const mapStateToProps = (state) => ({
  marketplacegoals: state.marketplacegoals.marketplacegoals
});

export const mapDispatchToProps = (dispatch) => ({
  fetchMarketplacegoalsFromActions: () => dispatch(fetchMarketplacegoals()),
});
