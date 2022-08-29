import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzasReducer, addPizzaReducer,  getPizzaByIdReducer, updatePizzaByIdReducer,} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer, getAllUsersReducer, deleteUserReducer } from './reducers/userReducer'
import {placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer} from "./reducers/orderReducer";

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer:  registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllUsersReducer:  getAllUsersReducer,
    deleteUserReducer: deleteUserReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    updatePizzaByIdReducer: updatePizzaByIdReducer,
    allUserOrdersReducer: allUserOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') 
                  ? JSON.parse(localStorage.getItem('cartItems'))
                  : []

const currentUser = localStorage.getItem('currentUser') 
? JSON.parse(localStorage.getItem('currentUser'))
: null

const users = localStorage.getItem('users') 
? JSON.parse(localStorage.getItem('users'))
: []

const initialState = {
    cartReducer : {
        cartItems: cartItems
    },
    loginUserReducer : {
        currentUser: currentUser
    },
    getAllUsersReducer: {
        users: users
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer , initialState, composeEnhancers(applyMiddleware(thunk)))

export default store