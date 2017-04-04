import {ADD_NEWS_ITEM} from '../../actions/newsfeed';

const DEFAULT_STATE = {
  newsfeed:
  [{task_num: "1", name: "Jane Doe", task: "completed framework for site",  likes:3}
  ,
  {task_num: "2", name: "Jon Smith", task:"ran 10 miles", likes:23}
  ]
}

const newsfeed = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    // type tells the reducer what to do
    // all reducers are listening for an action
    // anytime state changes, the app will rerender per react
    // what happens after dispatch is fires off
    case ADD_NEWS_ITEM: {
      return {
        ...state, //copies everything from the existing state into the new state
        newsfeed: state.newsfeed.concat([action.newsItem])
      };
    }
    default:
      return state;
  }
}

export default newsfeed;
