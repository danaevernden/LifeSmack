// @flow
import { memoize, pick } from 'lodash';

const LOCAL_STORAGE_KEY = 'APP_STATE';

// This function attempts to use localStorage once and memoizes the result.
// In the future, it might be nice to polyfill this since we use this
// to keep the user logged in.
const localStorage = memoize(() => {
  const date = new Date().toISOString();
  try {
    const storage = window.localStorage;
    storage.setItem(date, date);
    const storedDate = storage.getItem(date);
    storage.removeItem(date);
    return storedDate === date && storage;
  } catch (exception) {
    return null;
  }
})();
export default localStorage;

const storeAppState = (getState: () => {}) => {
  if (!localStorage) return;
  const state = getState();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pick(state, ['user'])));
};

const readAppState = () => {
  const storedState = localStorage ? localStorage.getItem(LOCAL_STORAGE_KEY) || '{}' : '{}';
  try {
    return JSON.parse(storedState);
  } catch (exception) {
    return {};
  }
};

export { localStorage, readAppState, storeAppState };
