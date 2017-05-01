import { CALL_API } from 'redux-api-middleware';

export default ({ getState }) => next => (action) => {
  const callApi = action[CALL_API];

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    callApi.endpoint = `${process.env.API_BASE || 'http://localhost'}${callApi.endpoint}`;
    // Inject the Authorization header from localStorage.
    callApi.headers = Object.assign({}, callApi.headers, {
      Accept: 'application/json',
    //to get this above line to work
      'Content-Type': 'application/json',
    });
  }

  // Pass the FSA to the next action.
  return next(action);
};
