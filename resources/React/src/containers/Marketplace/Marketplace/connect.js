import fetchMarketplace from '../../../actions/marketplace';


export const mapStateToProps = (state) => ({
  marketplace: state.marketplace.marketplace
});


export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  fetchMarketplaceFromActions: () => dispatch(fetchMarketplace()),
});
