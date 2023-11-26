import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Trainer from "../pages/Trainer/Trainer";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer>,
                loader: () => fetch('http://localhost:5000/trainer')
            },
            {
                path: '/trainer/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainer/${params.id}`)
            }
        ]
    },
]);

export default Routes;