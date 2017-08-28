import fetchMarketplacegoals from '../../../actions/marketplacegoals';


export const mapStateToProps = (state) => ({
  marketplacegoals: state.marketplacegoals.marketplacegoals,
  rightMenu: state.rightMenu.rightMenu
});


export const mapDispatchToProps = (dispatch) => ({
  fetchMarketplacegoalsFromActions: () => dispatch(fetchMarketplacegoals()),
});
