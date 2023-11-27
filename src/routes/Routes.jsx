import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Trainer from "../pages/Trainer/Trainer";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import TrainerForm from "../pages/TrainerForm/TrainerForm";
import TrainerPlan from "../pages/TrainerPlan/TrainerPlan";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Subscribers from "../pages/Dashboard/Subscribers/Subscribers";
import AllTrainer from "../pages/Dashboard/AllTrainer/AllTrainer";



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
            },
            {
                path: '/trainerForm',
                element: <TrainerForm></TrainerForm>
            },
            {
                path: '/trainerPlan',
                element: <TrainerPlan></TrainerPlan>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard/subscribers',
                element: <Subscribers></Subscribers>
            },
            {
                path: 'dashboard/allTrainer',
                element: <AllTrainer></AllTrainer>
            }
        ]
    }
]);

export default Routes;