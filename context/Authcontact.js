import { createContext ,useContext } from "react"
import { auth } from "../firebase"
import {
       createUserWithEmailAndPassword , 
       signInWithEmailAndPassword,
       signOut,
       onAuthStateChanged,
    } from "firebase/auth"

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const createUser = (email , password) =>{
         return createUserWithEmailAndPassword(auth , email ,password)
    }
   
    function logout(){
        return signOut(auth)
    }
    return(
        <UserContext.Provider value={{createUser , logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}