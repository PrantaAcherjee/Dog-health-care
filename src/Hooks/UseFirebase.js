import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, setError] = useState('')

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
        error
    }
}

export default useFirebase;