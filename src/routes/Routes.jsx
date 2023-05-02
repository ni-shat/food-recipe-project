import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MainLayout/Main";
import Home from "../pages/home/home/Home";
import Blogs from "../pages/Blogs/Blogs";


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
]);


export default router;