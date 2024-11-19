import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProviders = ({children}) => {

       const [user, setUser] = useState([]);
       const CreateUser = (email, password) =>{
              return createUserWithEmailAndPassword(auth, email, password)
       }
       const Login = (email, password) => {
              return signInWithEmailAndPassword(auth, email, password)
       }
       const Reset = email => {
              return sendPasswordResetEmail(auth, email)
       }
       const Logout = () =>{
              return signOut(auth)
       }
       useEffect(() => {
              const unSubscribe = onAuthStateChanged(auth, currenUser => {
                     setUser(currenUser)
              })
              return () =>{
                     unSubscribe;
              }
       },[])
       console.log(user)

       const authInfo = {user, CreateUser, Login, Reset, Logout}

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;