const initialState = {
  list: [],
  randomQuote: null,
  errors: {},
  message: null,
  isLoading: false
}

export function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_QUOTES_REQUEST':
      return {...state, isLoading: true, message: null}
    case 'FETCH_QUOTES':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, isLoading: false}
    case 'FETCH_RANDOM_QUOTE_REQUEST':
      return {...state, isLoading: true, message: null}
    case 'FETCH_RANDOM_QUOTE':
      return {...state, randomQuote: action.JSON, errors: action.JSON.errors, isLoading: false}
    case 'ADD_NEW_QUOTE_REQUEST':
      return {...state, isLoading: true, message: null}
    case 'ADD_NEW_QUOTE':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, isLoading: false}
    case 'ADD_QUOTE_TO_COLLECTION_REQUEST':
      return {...state, isLoading: true, message: null}
    case 'ADD_QUOTE_TO_COLLECTION':
      return {...state, list: action.JSON.quotes, errors: action.JSON.errors, message: action.JSON.message, isLoading: false}
    default:
      return state;
  }
};
