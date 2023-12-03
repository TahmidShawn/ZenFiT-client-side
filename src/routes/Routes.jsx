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
import Classes from "../pages/Classes/Classes";
import AppliedTrainer from "../pages/Dashboard/AppliedTrainer/AppliedTrainer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Balance from "../pages/Dashboard/Balance/Balance";
import AddNewClass from "../pages/Dashboard/AddNewClass/AddNewClass";
import Gallery from "../pages/Gallery/Gallery";
import ManageSlots from "../pages/Dashboard/ManageSlots/ManageSlots";
import ManageMembers from "../pages/Dashboard/ManageMembers/ManageMembers";
import Forum from "../pages/Forum/Forum";
import AddNewForums from "../pages/Dashboard/AddNewForums/AddNewForums";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/users')
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
                path: '/trainerPlan/:trainerName/:slotNumber/:trainerEmail',
                element: <TrainerPlan></TrainerPlan>
            },
            {
                path: '/classes',
                element: <Classes></Classes>,
                loader: () => fetch('/classes.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/forum',
                element: <Forum></Forum>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'subscribers',
                element: <Subscribers></Subscribers>,
                loader: () => fetch('http://localhost:5000/newsLetterEmail')
            },
            {
                path: 'allTrainer',
                element: <AllTrainer></AllTrainer>,
                loader: () => fetch('http://localhost:5000/trainer')
            },
            {
                path: 'appliedTrainer',
                element: <AppliedTrainer></AppliedTrainer>,
                loader: () => fetch('http://localhost:5000/trainer')
            },
            {
                path: 'balance',
                element: <Balance></Balance>
            },
            {
                path: 'manageMembers',
                element: <ManageMembers></ManageMembers>,
                loader: () => fetch('http://localhost:5000/plans')

            },
            {
                path: 'addNewClass',
                element: <AddNewClass></AddNewClass>
            },
            {
                path: 'manageSlots',
                element: <ManageSlots></ManageSlots>,
                loader: () => fetch('http://localhost:5000/trainer')
            },
            {
                path: 'addNewForums',
                element: <AddNewForums></AddNewForums>
            }

        ]
    }
]);

export default Routes;