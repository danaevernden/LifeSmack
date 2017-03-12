export const ADD_NEWS_ITEM = 'ADD_NEWS_ITEM';

export const addNewsItem = (name, task) => {
  //returns type and item, action creator always dispatches an object
  //an action is an object with a type key
  return {
    type: ADD_NEWS_ITEM,
    newsItem: {
      name,
      task
    }
  };
}
addNewsItem
