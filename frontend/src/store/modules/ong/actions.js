export function signUpRequest(data) {
  return {
    type: '@ong/SIGN_UP_REQUEST',
    payload: { data },
  };
}

export function signInRequest(data) {
  return {
    type: '@ong/SIGN_IN_REQUEST',
    payload: { data },
  };
}

export function signInSuccess(ong) {
  return {
    type: '@ong/SIGN_IN_SUCCESS',
    payload: { ong }, 
  };
}

export function signFailure() {
  return {
    type: '@ong/SIGN_FAILURE'
  };
}

export function signOut() {
  return {
    type: '@ong/SIGN_OUT',
  };
}