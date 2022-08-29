import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;



  const loginhandler = () => {
      const user = {email, password};
      dispatch(loginUser(user));
      if(currentUser === null){
        setTimeout(function(){
          window.alert("Wrong Email or Password");
         }, 500);
      }
      else{
        navigate('/')
      }
  };

  return (
    <>
      <Container>
        <Form className="container">
          <h2>Login </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={loginhandler}>
            Login
          </Button>
          <br></br>
          <br></br>
          <Link to='/register' style={{textDecoration: 'underline'}}>Dont have an account yet?</Link>
        </Form>
      </Container>
    </>
  );
}

export default Login