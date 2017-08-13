import fetchMarketplacegoals from '../../../actions/marketplacegoals';


export const mapStateToProps = (state) => ({
  marketplacegoals: state.marketplacegoals.marketplacegoals,
  rightMenu: state.rightMenu.rightMenu
});


export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  fetchMarketplacegoalsFromActions: () => dispatch(fetchMarketplacegoals()),
});
