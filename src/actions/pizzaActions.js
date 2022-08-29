import axios from 'axios'

export const getAllPizzas = () => async dispatch => {

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try{
        const response = await axios.get('http://localhost:5000/api/pizzas/getallpizzas')
        console.log(response)
        dispatch({type:'GET_PIZZAS_SUCCESS', payload : response.data})
    }
    catch(error){
        dispatch({type:'GET_PIZZAS_FAILED', payload : error})
    }
}

export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: "ADD_PIZZAS_REQUEST" });
    try {
      await axios.post("http://localhost:5000/api/pizzas/addpizza", { pizza });
      dispatch({ type: "ADD_PIZZAS_SUCCESS" });
      
    window.location.href = "/pizzalist";
    } catch (err) {
      dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
    }
  };

  export const getPizzaById = (pizzaId) => async (dispatch) => {
    dispatch({ type: "GET_PIZZABYID_REQUEST" });
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas/getpizzabyid", { pizzaId });
      dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
    }
  };

  export const updatePizza = (pizzaId, name, smallPrice, largprice , mediumPrice, image, description, category) => async (dispatch) => {
    dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
    try {
      const response = await axios.put("http://localhost:5000/api/pizzas/updatepizza", {
        pizzaId, name, smallPrice, largprice , mediumPrice, image, description, category,
      });
      dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
      window.location.href = "/pizzalist";
    } catch (err) {
      dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
    }
  };

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/api/pizzas/deletepizza", { pizzaId });
    window.location.href = "/pizzalist";
    // console.log(res);
  } catch (error) {
  }
};
