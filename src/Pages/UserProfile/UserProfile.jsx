import { useContext } from "react";
import Header from "../Shared/Header/Header";
import { AuthContext } from "../../Providers/AuthProviders";

const UserProfile = () => {

       const {user} = useContext(AuthContext)
       console.log(user)

       return (
              <div>
                     <Header></Header>
                     <p>Name: {user.displayName}</p>
                     <p>Email: {user.email}</p>
              </div>
       );
};

export default UserProfile;