import { put, call, select, takeEvery } from 'redux-saga/effects';
import * as Actions from './constants';

/**
 * Do login success
 * @param token
 * @param user
 * @returns {IterableIterator<*>}
 */
function* doLoginSuccess(token, userData = {}) {

}

/**
 * Sign In saga
 * @param username
 * @param password
 * @returns {IterableIterator<*>}
 */
function* signInWithEmailSaga({ loginData }) {

  try {
console.log('in login saga')
  } catch (e) {

  }
}

export default function* authSaga() {
  yield takeEvery(Actions.SIGN_IN_WITH_EMAIL, signInWithEmailSaga);
}
