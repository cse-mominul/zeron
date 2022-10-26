import React, { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContexts = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState('')

    const providerLogin = (Provider) =>{
        return signInWithPopup(auth, Provider) 
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , (newUser)=>{
            setUser(newUser);
        });
        return unsubcribe();
    },[])
    const authinfo = {user, providerLogin}
    return (
        <AuthContexts.Provider value={authinfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;