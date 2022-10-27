import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaGoogle , FaRedo, FaGithub, FaRetweet,  FaPowerOff, FaFacebook,FaTwitter,FaLinkedinIn, FaUserAlt} from "react-icons/fa";
import { ButtonGroup, Image } from 'react-bootstrap';
import './LeftNav.css'
import { useContext } from 'react';
import { AuthContexts } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, } from 'firebase/auth';
const LeftNav = () => {
    const {providerLogin} = useContext(AuthContexts);
    const {user} = useContext(AuthContexts);
    const {logOut} = useContext(AuthContexts);
    const googleProvider = new GoogleAuthProvider();
    const HandleGoogleLogIn  = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user; 
            console.log(user)
        })
        .catch(error => console.log(error))

    }
    const HandleLogOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error => console.error(error))
    }
   

    const [categories, setCategories] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <div className='userStyle'>
            <div>{
                user?.photoURL ?
                <Image className='imgStyle' roundedCircle src={user.photoURL}></Image>
                : <FaUserAlt/>
            }
            </div>
            <div>
                {
                    user?.uid ? <p className='text-white ml-2'>{user?.displayName}</p>
                    :
                    <>
                   
                    </>
                }
            

            </div>
            </div>
             <div className='LeftNavStyle'>
             <h1 className='text-white pt-4 text-center'>Zeron</h1>
            <p className='text-center text-white'><small >Eat code sleep repeat </small></p>
            
            
           
        
            {
                categories.map(category => <p key={category.id}> <Link className='text-white MenuItems' to={`/category/${category.id}`}>{category.name}</Link><hr></hr></p>)
            }
           
            {
                user?.uid ? <Button onClick={HandleLogOut} className="mt-2 text-white" > <FaPowerOff/> Log Out</Button>
                :
                <div>
            <p className='text-center text-white'>Log In With</p>
            <ButtonGroup className='me-2 d-flex center'>
            <Button onClick={HandleGoogleLogIn} className="me-2 text-white"variant="outline-primary"> <FaGoogle/> Google</Button>
             <Button className="me-2 text-white" variant="outline-secondary"> <FaGithub/> Github</Button>
            </ButtonGroup>
            <div className="d-flex justify-content-between">
            <Button className="mt-2 me-2 text-white" variant="outline-primary" ><Link className="mt-2 text-white btnstyle" to='/login'><FaRedo/> Login Now</Link></Button>
                 <Button className="mt-2 me-2 text-white" variant="outline-secondary"> <Link to='/register' className="mt-2 text-white btnstyle"> <FaRetweet/> Register Now </Link></Button>

            </div>
               
                   
            
                </div>
            }
            <div className='mb-4'>
            <p className='text-center text-white mt-4'>Find Us On</p>
                <div className='d-flex center'>
                <p className="me-3 text-white"><FaFacebook/> Facebook</p>
                <p className="me-3 text-white"><FaTwitter/> Twitter</p>
                <p className="me-3 text-white"><FaLinkedinIn/> Linkedin</p>
                </div>
            </div>
            
           
            <p className="me-3 text-center text-white"> <small> Copyright @ Momin </small> </p>
             </div>
           
          
        </div>
    );
};

export default LeftNav;