import React from 'react'
import './Login.css'
import { Form,Button } from "react-bootstrap";
import { handleLogin,setUsername,setPassword } from "../redux/action";
import { useDispatch,useSelector } from "react-redux";

function Login() {

    const dispatch = useDispatch()
    const {username,password} = useSelector(state => state)

    const loginHandler = (e)=>{
        e.preventDefault();
        dispatch(handleLogin(username,password));
    }

    return (
        <div className="container">
        <div className="login-container">
           <h1>Login</h1>
            <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Username" className="form-input" value={username} onChange={(e)=>dispatch(setUsername(e.target.value))}/>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className="form-input" value={password}  onChange={(e)=>dispatch(setPassword(e.target.value))}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="login-button" onClick={loginHandler} >
                Submit
            </Button>
            </Form>
        </div>
    </div>
    )
}

export default Login
