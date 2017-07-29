import { CALL_API } from 'redux-api-middleware';
export const FETCH_MARKETPLACEGOALS_REQUEST = 'FETCH_MARKETPLACEGOALS_REQUEST';
export const FETCH_MARKETPLACEGOALS_SUCCESS = 'FETCH_MARKETPLACEGOALS_SUCCESS';
export const FETCH_MARKETPLACEGOALS_FAILURE = 'FETCH_MARKETPLACEGOALS_FAILURE';

//variable in an object in square braces, it executes and then puts the value inside
//const foo = "FOO"
// { [foo]: 1} is the same as 'FOO':1
export default function fetchMarketplacegoals() {
    return {
      [CALL_API]: {
          endpoint: '/api/marketplacegoals',
          method: 'GET',
          types: [FETCH_MARKETPLACEGOALS_REQUEST, FETCH_MARKETPLACEGOALS_SUCCESS, FETCH_MARKETPLACEGOALS_FAILURE]
      },
    };
}
