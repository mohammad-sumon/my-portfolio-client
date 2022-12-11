import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Project from "../component/Features/Project";
import Blog from "../component/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/project/:id",
    element: <Project></Project>,
    loader: ({ params }) => fetch(`Features-Api/${params.id}`),
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
]);

export default router;
