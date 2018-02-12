const initialState = {
  user: {},
  token: null,
  isLoading: false,
  errors: {}
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_SIGN_UP_REQUEST':
      return {...state, isLoading: true}
    case 'SIGN_UP_USER':
      console.log(action)
      return {...state, user: action.user, token: action.token, isLoading: false, errors: action.responseJSON.errors};
    default:
      return state;
  }
};

export default authReducer;
