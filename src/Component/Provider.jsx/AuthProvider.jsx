import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../tailwind.config";




export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    
    ///create user
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
     }
    


    ///sign in user
    const signInuser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    /// logout
    const logOut = () => {
        return signOut(auth);
    }

    /// authInfo
    const authInfo = {user, createUser, signInuser, logOut}
    
     /// observe auth state change
     useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current value of the current user : ", currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    return (
        <AuthContext.Provider value = {authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node,
}