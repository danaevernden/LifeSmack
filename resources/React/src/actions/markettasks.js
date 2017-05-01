import { CALL_API } from 'redux-api-middleware';
export const FETCH_MARKETTASKS_REQUEST = 'FETCH_MARKETTASKS_REQUEST';
export const FETCH_MARKETTASKS_SUCCESS = 'FETCH_MARKETTASKS_SUCCESS';
export const FETCH_MARKETTASKS_FAILURE = 'FETCH_MARKETTASKS_FAILURE';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1
export default function fetchMarkettasks() {
    return {
      [CALL_API]: {
          endpoint: '/api/markettasks',
          method: 'GET',
          types: [FETCH_MARKETTASKS_REQUEST, FETCH_MARKETTASKS_SUCCESS, FETCH_MARKETTASKS_FAILURE]
      },
    };
}
