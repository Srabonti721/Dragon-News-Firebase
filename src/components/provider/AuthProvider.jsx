import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading, user);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        return signOut(auth)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const ProfileUpDate = (updateData)=>{
        return updateProfile(auth.currentUser,updateData);
    }

    useEffect(() => {
        const unSubsribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubsribe();
        }
    }, [])

    const userData = {
        user,
        setUser,
        createUser,
        userSignOut,
        userLogin,
        loading,
        setLoading,
        ProfileUpDate,
    }

    return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;