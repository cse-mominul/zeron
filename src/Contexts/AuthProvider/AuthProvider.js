import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
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
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = () =>{
        signOut(auth);
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , (newUser)=>{
            setUser(newUser);
        });
        return unsubcribe();
    },[])
    const authinfo = {user, providerLogin, logOut, createUser,signIn}
    return (
        <AuthContexts.Provider value={authinfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;