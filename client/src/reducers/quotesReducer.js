const initialState = {
  list: [],
  randomQuote: null,
  errors: {},
  message: null,
  isLoading: false
}

export function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_ASYNCHRONOUS_REQUEST':
      return {...state, isLoading: true, message: null}
    case 'FETCH_QUOTES':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, isLoading: false}
    case 'FETCH_RANDOM_QUOTE':
      return {...state, randomQuote: action.JSON, errors: action.JSON.errors, isLoading: false}
    case 'ADD_NEW_QUOTE':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, isLoading: false}
    case 'ADD_QUOTE_TO_COLLECTION':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, message: action.JSON.message, isLoading: false}
    case 'REMOVE_QUOTE_FROM_COLLECTION':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, message: action.JSON.message, isLoading: false}
    case 'LOG_OUT_USER':
      return initialState;
    default:
      return state;
  }
};
