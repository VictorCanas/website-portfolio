import * as Actions from './constants';

/**
 * Action login
 * @param loginData
 * @returns {{type: string, loginData: object}}
 */
export function signInWithEmail(loginData) {
  return {
    type: Actions.SIGN_IN_WITH_EMAIL,
    loginData
  };
}
