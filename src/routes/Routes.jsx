import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import Home from "../pages/home/home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../layout/LoginRegisterLayout/Login/Login";
import Register from "../layout/LoginRegisterLayout/Register/Register";
import AuthLayout from "../layout/LoginRegisterLayout/AuthLayout/AuthLayout";


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
  }
]);


export default router;