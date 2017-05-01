import { CALL_API } from 'redux-api-middleware';

export const ADD_NEWS_ITEM = 'ADD_NEWS_ITEM';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1

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
