import { CALL_API } from 'redux-api-middleware';
export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const FETCH_GOALS_FAILURE = 'FETCH_GOALS_FAILURE';

export const POST_GOAL_REQUEST = 'POST_GOAL_REQUEST';
export const POST_GOAL_SUCCESS = 'POST_GOAL_SUCCESS';
export const POST_GOAL_FAILURE = 'POST_GOAL_FAILURE';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1
export default function fetchGoals() {
    return {
      [CALL_API]: {
          endpoint: '/api/goals/1',
          method: 'GET',
          types: [FETCH_GOALS_REQUEST, FETCH_GOALS_SUCCESS, FETCH_GOALS_FAILURE]
      },
    };
}

export function addGoal(goalname, catid1) {
  console.log("calling add", goalname, catid1)
  return {
    [CALL_API]: {
      endpoint: `/api/goals/post`,
      method: 'POST',
      types: [POST_GOAL_REQUEST, POST_GOAL_SUCCESS, POST_GOAL_FAILURE],
      body: JSON.stringify({
        goal_name: goalname,
        category_id_1: catid1
      })
    },
  };
}

//https://codereviewvideos.com/course/symfony-3-with-reactjs-and-angular/video/react-create-post
//https://html5hive.org/reactjs-form-validation-tutorial/
