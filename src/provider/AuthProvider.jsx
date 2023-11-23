import Swal from 'sweetalert2'
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
        .then(res => {
            if(res.user.email){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Signed In",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
        .catch(error => console.log(error));
    };

    const createUser = (name, photo_url, email, password) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            if(res.user.email){
                console.log(res.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign up successful",
                    showConfirmButton: false,
                    timer: 2000
                });
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo_url
                  });
            }
        })
        .catch(err => console.log(err));
    };

    const signIn = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            if(res.user.email){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign in successful",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
        .catch(error => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 3000
            });
        })
    };

    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth)
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign out successful",
                showConfirmButton: false,
                timer: 2000
            });
        })
        .then(error => console.log(error));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setCurrentUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authentications = {
        handleGoogleSignIn,
        handleSignOut,
        currentUser,
        createUser,
        signIn,
        loading,   
    };

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;