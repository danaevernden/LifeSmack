import { CALL_API } from 'redux-api-middleware';
export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const FETCH_GOALS_FAILURE = 'FETCH_GOALS_FAILURE';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1
export default function fetchGoals() {
    return {
      [CALL_API]: {
          endpoint: '/api/goals',
          method: 'GET',
          types: [FETCH_GOALS_REQUEST, FETCH_GOALS_SUCCESS, FETCH_GOALS_FAILURE]
      },
    };
}
//https://codereviewvideos.com/course/symfony-3-with-reactjs-and-angular/video/react-create-post
//https://html5hive.org/reactjs-form-validation-tutorial/
