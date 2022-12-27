import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import Media from "../../pages/Media/Media";
import SinglePost from "../../pages/Media/SinglePost";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allPost',
                element: <Media></Media>
            },
            {
                path: '/allPost/:id',
                element: <SinglePost></SinglePost>,
                loader: ({ params }) => fetch(`http://localhost:5000/allPost/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default router;