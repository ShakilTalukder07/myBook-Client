import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;