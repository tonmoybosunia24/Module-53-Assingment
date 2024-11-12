import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

       const {user} = useContext(AuthContext)
       const location = useLocation()

       if(user){
              return children
       }
       return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;