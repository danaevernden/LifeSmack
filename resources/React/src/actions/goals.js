import { CALL_API } from 'redux-api-middleware';

export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const FETCH_GOALS_FAILURE = 'FETCH_GOALS_FAILURE';

export default function fetchProductions() {
  return {
    [CALL_API]: {
      endpoint: '/api/v1/goals',
      method: 'GET',
      // Don't have to manually add the Authorization header to every request.
      headers: { 'Content-Type': 'application/json' },
      types: [FETCH_GOALS_REQUEST, FETCH_GOALS_SUCCESS, FETCH_GOALS_FAILURE],
    },
  };
}
