import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setuser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value)

    }

    const registerWithEmailPassword = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        e.preventDefault();
    }

    const logInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state changed', user)
                setuser(user)
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setuser({})
            })
    }

    return {
        signInUsingGoogle,
        logOut,
        user,
        error,
        handleEmailChange,
        handlePasswordChange,
        registerWithEmailPassword,
        logInWithEmailPassword,
    }
}

export default useFirebase;