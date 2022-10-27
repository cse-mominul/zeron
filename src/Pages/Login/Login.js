import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const {signIn}= useContext(AuthContexts);
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
            navigate('/')
        })
        .catch(e =>{
            console.error(e)
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
    </Form>
            
        </div>
    );
};

export default Login;