import { useContext, useRef } from "react";
import Header from "../Shared/Header/Header";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfie = () => {

       const nRef = useRef(null)   
       const {user} = useContext(AuthContext)
          
       const handleUpdateName = () =>{
              const name = nRef.current.value;
              console.log(name)
              updateProfile(user, {
                     displayName: name,
              })
              .then(()=>{
                     toast.success('User Name Update Successfull')
              })
              .catch(error =>{
                     toast.error(error.meassage)
              })
       }


       return (
              <div className="pb-20">
                     <Header></Header>
                     <div className="form-control">
                            <label className="label">
                                   <span className="label-text">Email</span>
                            </label>
                            <input ref={nRef} type="text" name="name" placeholder="Enter Your Email" className="input input-bordered" required />
                            <button onClick={handleUpdateName} className="btn bg-green-700">Update Name</button>
                     </div>
              </div>
       );
};

export default UpdateProfie;