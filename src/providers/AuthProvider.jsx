import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email,password)
    }
    const signInUser =(email, password)=>{
        setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=> {
        setLoading(true);
        return signOut(auth);
    }


     //observe auth state change
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false);
        // console.log('observing current value of current user',currentUser)
        });
        return () =>{

            unSubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
   
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes= {
    children: PropTypes.node
}
