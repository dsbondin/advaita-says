export function loginAction(userData) {
  return (dispatch) => {
    dispatch({type: "SEND_LOG_IN_REQUEST"});
    return fetch("http://localhost:3001/login", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(JSON => { dispatch({
        type: "LOG_IN_USER",
        JSON: JSON}
      )}
    )
  }
}
