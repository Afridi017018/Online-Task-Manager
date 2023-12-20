import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = async (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

        await signOut(auth);
        
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }
    }, [])

    const logOut = async () => {
        setLoading(true);
        await signOut(auth)
    }

    const authInfo = {
        createUser,
        updateUser,
        signIn,
        signInGoogle,
        user,
        logOut,
        loading,
        setLoading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;