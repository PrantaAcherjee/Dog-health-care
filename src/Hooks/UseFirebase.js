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
   // login with google ID

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            
            .catch(error => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false))
    }
    // email state
    const handleEmailChange = e => {
        setEmail(e.target.value);
       console.log(e.target.value)
    }
    //  password state
    const handlePasswordChange = e => {
        setPassword(e.target.value);
     //   console.log(e.target.value)

    }
    // register with email and password 
    const registerWithEmailPassword = () => {
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
            
            .finally(()=>setIsLoading(false))
         
    }
   // login with email and password
    const logInWithEmailPassword = () => {
        
        setIsLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
            
            .finally(()=>setIsLoading(false))  
           
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