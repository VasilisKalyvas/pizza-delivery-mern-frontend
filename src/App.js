import './App.css';
import Header from './components/Header';
import Home from './pages/Home'; 
import {Route , Routes as Switch} from 'react-router-dom'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Order';
import Admin from './pages/Admin';
import { useSelector } from 'react-redux';
import UserList from './pages/UserList';
import AdminHeader from './components/AdminHeader';
import Pizzalist from './pages/PizzaList';
import { useLocation} from "react-router-dom";
import AddNewPizza from './pages/AddNewPizza';
import EditPizza from './pages/EditPizza';
import OrderList from './pages/OrderList';

const App = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const location = useLocation();

  return (
    <div className="App">
        <Header/>
        { currentUser && currentUser.isAdmin && 
          (location.pathname !== '/'  
          && location.pathname !== '/cart' 
          && location.pathname !== '/orders'
          && location.pathname !== '/profile') ? (<AdminHeader/>):(null)}
        <Switch>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orders" element={<Order/>}/>
          
          { currentUser && currentUser.isAdmin ? (<Route path="/admin" element={<Admin/>}/>):(null)}
          { currentUser && currentUser.isAdmin ? (<Route path="/getallusers" element={<UserList/>}/>):(null)}
          { currentUser && currentUser.isAdmin ? (<Route path="/pizzalist" element={<Pizzalist/>}/>):(null)}
          { currentUser && currentUser.isAdmin ? (<Route path="/addnewpizza" element={<AddNewPizza/>}/>):(null)}
          { currentUser && currentUser.isAdmin ? (<Route path="/orderlist" element={<OrderList/>}/>):(null)}
          { currentUser && currentUser.isAdmin ? (<Route path="/editpizza/:id" element={<EditPizza/>}/>):(null)}
        </Switch>
    </div>
  );
}

export default App;
