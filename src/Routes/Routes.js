import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Project from "../Project/Project";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/project/:id',
        element: <Project></Project>,
        // loader: ({params}) => fetch (`Features-Api.js/${params.id}`)
    }
])

export default router;