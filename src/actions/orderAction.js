import axios from "axios";
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    await axios.post("http://localhost:5000/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    localStorage.removeItem('cartItems')
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "USER_ORDER_REQUEST",
  });
  try {
    const response = await axios.post("http://localhost:5000/api/orders/getuserorder", {
      userid: currentUser._id,
    });
    // console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "ALL_ORDER_REQUEST",
  });
  try {
    const response = await axios.get("http://localhost:5000/api/orders/alluserorder");
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "GET_ALL_ORDER_REQUEST",
  });
  try {
    await axios.post("http://localhost:5000/api/orders/deliverorder", { orderid });
    const orders = await axios.get("http://localhost:5000/api/orders/alluserorder");
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
    window.location.href = "/orderlist";
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
  }
};