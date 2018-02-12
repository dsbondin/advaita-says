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
      return {...state, currentUser: action.JSON.user, token: action.JSON.token, isLoading: false, errors: action.JSON.errors};
    case 'SEND_LOG_IN_REQUEST':
      return {...state, isLoading: true};
    case 'LOG_IN_USER':
      return {...state, currentUser: action.JSON.user, token: action.JSON.token, isLoading: false, errors: action.JSON.errors}
    default:
      return state;
  }
};

export default authReducer;
