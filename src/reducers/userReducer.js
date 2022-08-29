export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_REGISTER_REQUEST":
        return {
          lodaing: true,
        };
      case "USER_REGISTER_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "USER_REGISTER_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_LOGIN_REQUEST":
        return {
          lodaing: true,
        };
      case "USER_LOGIN_SUCCESS":
        return {
          loading: false,
          success: true,
          currentUser: action.payload
        };
      case "USER_LOGIN_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "GET_USERS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_USERS_SUCCESS":
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
      case "GET_USERS_FAIL":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  export const deleteUserReducer = (state = {users: []}, action) => {
    switch (action.type) {
      case "DELETE_USER_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "DELETE_USER_SUCCESS":
       const filteredusers = state.users.filter(item => item._id !== action.payload._id);
          return {
            ...state, users: filteredusers
        };
      case "DELETE_USER_FAIL":
        return {
          error: action.payload,
          loading:false
        }
      default:
        return state;
    }
  };