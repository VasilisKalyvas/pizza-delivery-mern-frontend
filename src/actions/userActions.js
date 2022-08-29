import axios from 'axios';

export const registerUser = (user) => async dispatch => {

    dispatch({type:'USER_REGISTER_REQUEST'})
    
    try {
        const res = await axios.post('http://localhost:5000/api/users/register', user);

        console.log(res);
        dispatch({type:'USER_REGISTER_SUCCESS', payload: res.data})
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAILED', payload: error})
    }
}

export const loginUser = (user) => async dispatch => {
    
    dispatch({type:'USER_LOGIN_REQUEST'})
    
    try {
        const res = await axios.post('http://localhost:5000/api/users/login', user);

        console.log(res);
        dispatch({type:'USER_LOGIN_SUCCESS', payload: res.data})
        localStorage.setItem('currentUser', JSON.stringify(res.data))
    } catch (error) {
        dispatch({type:'USER_LOGIN_FAILED', payload: error})
    }
}

export const getAllUsers = () => async (dispatch, getState) => {
    dispatch({ type: "GET_USERS_REQUEST" });
    try {
      const response = await axios.get("http://localhost:5000/api/users/getallusers");
      // console.log(response.data);
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
      const users = getState().getAllUsersReducer.users
    localStorage.setItem('users', JSON.stringify(users))
    } catch (err) {
      dispatch({ type: "GET_USERS_FAIL", payload: err });
    }
  };

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };
  
export const deleteUser = (userid) => async (dispatch, getState) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await axios.post("http://localhost:5000/api/users/deleteuser", { userid });
    dispatch({ type: "DELETE_USER_SUCCESS", payload: response.data });
    window.location.reload();
    // console.log(res);
    const users = getState().deleteUsersReducer.users
    localStorage.setItem('users', JSON.stringify(users))
  } catch (err) {
    dispatch({ type: "DELETE_USER_FAIL", payload: err });
  }
};