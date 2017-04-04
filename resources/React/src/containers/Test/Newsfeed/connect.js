import {addNewsItem} from '../../../actions/newsfeed';

export const mapStateToProps = (state) => ({
  newsfeed: state.newsfeed.newsfeed
});

/*
export const mapStateToProps = function(state) {
  return {
    newsfeed: state.newsfeed.newsfeed
  }
}
*/

export const mapDispatchToProps = (dispatch) => ({
  //this was blank before
  // similar to method above, returning an object, but in this case the object consists
  //of functions that will dispatch actions globally
  //action is an object with a type key
  //addnewsitem is the action creator, which is a function
  addNewsItem: (name, task) => dispatch(addNewsItem(name, task))
});

/* addMewsItem*/
/*
export const mapDispatchToProps = function(dispatch) {
  return {
    addNewsItem: function(name, task) {
      const action = addNewsItem(name, task);

      or

      const action = {
          type: "ADD_NEWS_ITE",
          newsItem: {
            name,
            task
          }
        };

      dispatch(action);
    }
  }
}

*/
