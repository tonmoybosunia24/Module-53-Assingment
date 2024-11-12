import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

       const {user, setUser} = useState(null);
       const CreateUser = (email, password) =>{
              return createUserWithEmailAndPassword(auth, email, password)
       }
       const Login = (email, password) => {
              return signInWithEmailAndPassword(auth, email, password)
       }

       const authInfo = {user, CreateUser, Login}

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;