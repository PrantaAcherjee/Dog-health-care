import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading]=useState(true);   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            
            .catch(error => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false))
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
      //  console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
     //   console.log(e.target.value)

    }

    const registerWithEmailPassword = e => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
             //   console.log(user)
            })
            .finally(()=>setIsLoading(false))
        e.preventDefault();
    }

    const logInWithEmailPassword = e => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                 
             //   console.log(user)
            })
            .finally(()=>setIsLoading(false))
            e.preventDefault();
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            }
            setIsLoading(false);
        })
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setuser({})
            })
            .finally(()=>setIsLoading(false))
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
        isLoading,
    }
}

export default useFirebase;