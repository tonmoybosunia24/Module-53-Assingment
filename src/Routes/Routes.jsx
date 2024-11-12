import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import UpdateProfie from "../Pages/UpdateProfie/UpdateProfie";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
       {
              path: "/",
              element: <Root></Root>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>
                     },
                     {
                            path: '/details/:id',
                            element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                            loader: () => fetch('../../public/residential.json')
                     },
                     {
                            path: '/updateProfile',
                            element: <UpdateProfie></UpdateProfie>
                     },
                     {
                            path: '/userProfile',
                            element: <UserProfile></UserProfile>
                     },
                     {
                            path: '/login',
                            element: <Login></Login>
                     },
                     {
                            path: '/register',
                            element: <Register></Register>
                     }
              ]
       },
]);

export default Routes;