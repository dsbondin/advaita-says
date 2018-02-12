export function signupAction(userData) {
  return (dispatch) => {
    dispatch({type: "SEND_SIGN_UP_REQUEST"});
    return fetch("http://localhost:3001/users", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(JSON => { dispatch({
        type: "SIGN_UP_USER",
        JSON: JSON
      });
      localStorage.setItem('token', JSON.token);
    });
  }
}
