import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}= useContext(AuthContexts)
    const navigate = useNavigate();
    const handleRegister = (event)=>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            from.reset();
            navigate('/')
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div C  className='mt-4'>
                  <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Your Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photoURL' type="text" placeholder="Enter PhotoURL" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter Eamil" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
            </Form>
            
        </div>
    );
};

export default Register;