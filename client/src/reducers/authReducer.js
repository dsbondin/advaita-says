const initialState = {
  currentUser: {},
  token: null,
  isLoading: false,
  errors: {}
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_SIGN_UP_REQUEST':
      return {...state, isLoading: true}
    case 'SIGN_UP_USER':
      return setCurrentUser(state, action.JSON)
    case 'SEND_LOG_IN_REQUEST':
      return {...state, isLoading: true};
    case 'LOG_IN_USER':
      return setCurrentUser(state, action.JSON)
    case 'LOG_OUT_USER':
      return {...initialState, currentUser: null};
    default:
      return state;
  }
};

function setCurrentUser(state, json) {
  if (json.token) {
    localStorage.setItem('token', json.token);
    localStorage.setItem('username', json.user.username);
  }
  return {...state,
    currentUser: json.user,
    token: json.token,
    errors: json.errors,
    isLoading: false};
}

export default authReducer;
