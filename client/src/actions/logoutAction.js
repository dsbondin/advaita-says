export function logoutAction() {
  return dispatch => {
    localStorage.clear();
    dispatch({type: 'LOG_OUT_USER'});
  }
}
