import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Group 1.png'
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";

const Navber = () => {

       const { user, Logout } = useContext(AuthContext)

       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-white' : ' text-white'}`} to='/' >Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-white' : ' text-white'}`} to='/updateProfile'>Update Profile</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-white' : ' text-white'}`} to='/userProfile'>User Profile</NavLink></li>
       </>

       const handleSingOut = () => {
              Logout()
                     .then(() => {
                            toast.success("Logout Successful");
                     })
                     .catch(error => {
                            toast.error(error.message)
                     })
       }

       return (
              <div>
                     <div className="navbar lg:w-5/6 m-auto h-16 px-5 lg:px-0">
                            <div className="navbar-start">
                                   <div className="dropdown">
                                          <div className="drawer z-20 lg:hidden">
                                                 <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                                 <div className="drawer-content">
                                                        <label htmlFor="my-drawer" className="drawer-button"><FaBars className="h-5 w-5 mr-2" /></label>
                                                 </div>
                                                 <div className="drawer-side">
                                                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                                        <ul className="menu bg-green-600 text-base-content min-h-full w-52 p-4">
                                                               {Links}
                                                        </ul>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="flex items-center gap-2">
                                          <img className="w-7 h-7" src={logo} alt="" />
                                          <a className="text-xs lg:text-xl font-bold text-white">Dream House</a>
                                   </div>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                   <ul className="menu menu-horizontal px-1">
                                          {Links}
                                   </ul>
                            </div>
                            <div className="navbar-end">
                                   {
                                          user ? <button onClick={handleSingOut} className="bg-white font-semibold text-green-700 px-7 py-2 rounded-none">Logout</button> : <Link to='/login'><a className="bg-white font-semibold text-green-700 px-7 py-2 rounded-none">Login</a></Link>
                                   }
                            </div>
                     </div>
              </div>
       );
};

export default Navber;