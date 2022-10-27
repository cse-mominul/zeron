import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContexts = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState('')
    const [loading, setLoading] =useState(true)

    const providerLogin = (Provider) =>{
        setLoading(true)
        return signInWithPopup(auth, Provider) 
    }
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const githubLogin = (Provider) =>{
        return signInWithPopup(auth, Provider);

    }
    const logOut = () =>{
        setLoading(true)
        signOut(auth);
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , (newUser)=>{
            setUser(newUser);
            setLoading(false)
        });
        return unsubcribe();
    },[])
    const authinfo = {user, providerLogin, logOut, createUser,signIn,loading, githubLogin}
    return (
        <AuthContexts.Provider value={authinfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;