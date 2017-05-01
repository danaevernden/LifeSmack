import { CALL_API } from 'redux-api-middleware';
export const FETCH_MARKETPLACE_REQUEST = 'FETCH_MARKETPLACE_REQUEST';
export const FETCH_MARKETPLACE_SUCCESS = 'FETCH_MARKETPLACE_SUCCESS';
export const FETCH_MARKETPLACE_FAILURE = 'FETCH_MARKETPLACE_FAILURE';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1
export default function fetchMarketplace() {
    return {
      [CALL_API]: {
          endpoint: '/api/marketplace',
          method: 'GET',
          types: [FETCH_MARKETPLACE_REQUEST, FETCH_MARKETPLACE_SUCCESS, FETCH_MARKETPLACE_FAILURE]
      },
    };
}
