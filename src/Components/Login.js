import React from 'react'
import { Button, Row, Container, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
  return (
    <div>
        <h1>Login Page</h1>
        <Button className='mt-3 ButtonDesign' onClick={() => navigate("/Options")}>Login</Button>
    </div>
  )
}

export default Login