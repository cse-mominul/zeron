import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {signIn}= useContext(AuthContexts);
    const [error ,setError] = useState([]);
    const handleSignIn = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            from.reset();
            setError('')
            navigate(from , {replace: true})
        })
        .catch(e =>{
            console.error(e)
            setError(e.message);
        })

    }
    return (
        <div className='mt-4'>
             <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>{
        error? 
        <p>{error}</p>
        :
        <>
        </>
    }
        </div>
    );
};

export default Login;