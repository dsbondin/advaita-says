export function fetchMyQuotes(token) {
  return (dispatch) => {
    dispatch({type: "SEND_ASYNCHRONOUS_REQUEST"});
    setTimeout(function(){
      return fetch("/api/quotes/my", {
        method: "get",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Token": token
        }
      })
        .then(response => response.json())
        .then(JSON => { dispatch({
          type: "FETCH_QUOTES",
          JSON: JSON}
        );
      })
    }, 400)
  }
}

export function fetchRandomQuote() {
  return (dispatch) => {
    dispatch({type: "SEND_ASYNCHRONOUS_REQUEST"});
    setTimeout(function(){
      return fetch("/api/quotes/random")
        .then(response => response.json())
        .then(JSON => { dispatch({
          type: "FETCH_RANDOM_QUOTE",
          JSON: JSON}
        );
      });
    }, 400)
  }
}

export function createNewQuote(quoteData, token) {
  return (dispatch) => {
    dispatch({type: "SEND_ASYNCHRONOUS_REQUEST"});
    return fetch("/api/quotes", {
      method: "post",
      body: JSON.stringify(quoteData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Token": token
      }
    })
    .then(response => response.json())
    .then(JSON => { dispatch({
      type: "ADD_NEW_QUOTE",
      JSON: JSON}
    )})
  }
}

export function addQuoteToCollectionAPI(quoteId, token) {
  return dispatch => {
    dispatch({type: "SEND_ASYNCHRONOUS_REQUEST"});
    setTimeout(function() {
      return fetch("/api/quotes/add", {
        method: "post",
        body: JSON.stringify({quote_id: quoteId}),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Token": token
        }
      })
      .then(response => response.json())
      .then(JSON => { dispatch({
        type: "ADD_QUOTE_TO_COLLECTION",
        JSON: JSON}
      )})
    }, 400)
  }
}

export function removeQuoteFromCollectionAPI(quoteId, token) {
  return dispatch => {
    dispatch({type: "SEND_ASYNCHRONOUS_REQUEST"});
    return fetch("/api/quotes/remove", {
      method: "delete",
      body: JSON.stringify({quote_id: quoteId}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Token": token
      }
    })
    .then(response => response.json())
    .then(JSON => { dispatch({
      type: "REMOVE_QUOTE_FROM_COLLECTION",
      JSON: JSON}
    )})
  }
}
