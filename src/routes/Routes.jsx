import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import Home from "../pages/home/home/Home";
import Blogs from "../pages/Blogs/Blogs";
import AuthLayout from "../layout/LoginRegisterLayout/AuthLayout/AuthLayout";
import Chefs from "../pages/home/ChefsSection/Chefs/Chefs";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ChefDetails from "../pages/shared/ChefDetails/ChefDetails";
import ChefDeatilsLayout from "../layout/ChefDetailsLayout/ChefDeatilsLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>
      }
    ]
  },
  {
    path: 'auth-layout',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'chef-details',
    element: <ChefDeatilsLayout></ChefDeatilsLayout>,
    children: [
      {
        path: ':id',
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chef-details/${params.id}`)
      }
    ]
  }
]);


export default router;