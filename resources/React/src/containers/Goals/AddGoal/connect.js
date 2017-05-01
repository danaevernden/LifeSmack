import fetchMarketplace from '../../../actions/marketplace';

export const mapStateToProps = (state) => ({
  marketplace: state.marketplace.marketplace
});

export const mapDispatchToProps = (dispatch) => ({
  fetchMarketplaceFromActions: () => dispatch(fetchMarketplace()),
});
