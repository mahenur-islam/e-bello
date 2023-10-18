/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    } 

    //observer onAuthStateChange

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log('Observing current user', currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    //signin with googel 
    const signInWithGoogle = ()=>{

        setLoading(true)
        return signInWithPopup(auth, googleProvider);
      
    }



    const authInfo = {
            user,
            createUser,
            signInUser,
            logOut,
            loading, 
            signInWithGoogle
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;