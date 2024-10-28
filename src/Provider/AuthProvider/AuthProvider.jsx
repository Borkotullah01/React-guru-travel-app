import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase/Firebase-init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const facebook = new FacebookAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, google);
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, github);
    }
    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebook);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            if (currentUser) {
                setLoading(false);
            } else {
                setLoading(true);
            }
        });
        return ()=> unSubscribe();

    },[])

    const AuthInfo = {
        createUser,
        logIn,
        googleLogin,
        facebookLogin,
        githubLogin,
        user,
        logOut,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;