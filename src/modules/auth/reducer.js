import { REHYDRATE } from 'redux-persist/lib/constants';
import * as Actions from './constants';
import { errorInit as initError } from './config';

const initState = {
  pending: false,
  loginError: initError,
};

export default function authReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.SIGN_IN_WITH_EMAIL:
      return {...state, pending: true, loginError: initError};
    case REHYDRATE:
      if (action.payload && action.payload.auth) {
        let { auth } = action.payload;
        return {...auth};
      } else {
        return state;
      }
    default:
      return state;
  }
}
