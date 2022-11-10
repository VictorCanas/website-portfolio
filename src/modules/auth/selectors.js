import {createSelector} from 'reselect';

export const auth = state => state.auth;

export const authSelector = createSelector(
  auth,
  data => data,
);
