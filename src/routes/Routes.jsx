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
import ActivityLog from "../pages/Dashboard/ActivityLog/ActivityLog";
import ExtraClass from "../pages/ExtraClass/ExtraClass";
import DailyRoutine from "../pages/Dashboard/DailyRoutine/DailyRoutine";
import DailyChart from "../pages/DailyChart/DailyChart";
import PrivateRoutes from "./PrivateRoutes";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/users')
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/trainer')
            },
            {
                path: '/trainer/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => fetch(`https://assignment-12-server-one-navy.vercel.app/trainer/${params.id}`)
            },
            {
                path: '/trainerForm',
                element: <PrivateRoutes><TrainerForm></TrainerForm></PrivateRoutes>
            },
            {
                path: '/trainerPlan/:trainerName/:slotNumber/:trainerEmail',
                element: <PrivateRoutes><TrainerPlan></TrainerPlan></PrivateRoutes>
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
                element: <Forum></Forum>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/forums')
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://assignment-12-server-one-navy.vercel.app/users/${params.email}`),
        children: [
            {
                path: 'subscribers',
                element: <Subscribers></Subscribers>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/newsLetterEmail')
            },
            {
                path: 'allTrainer',
                element: <AllTrainer></AllTrainer>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/trainer')
            },
            {
                path: 'appliedTrainer',
                element: <AppliedTrainer></AppliedTrainer>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/trainer')
            },
            {
                path: 'balance',
                element: <Balance></Balance>
            },
            {
                path: 'manageMembers',
                element: <ManageMembers></ManageMembers>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/plans')

            },
            {
                path: 'addNewClass',
                element: <AddNewClass></AddNewClass>
            },
            {
                path: 'manageSlots',
                element: <ManageSlots></ManageSlots>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/trainer')
            },
            {
                path: 'addNewForums',
                element: <AddNewForums></AddNewForums>
            },
            {
                path: 'activityLog',
                element: <ActivityLog></ActivityLog>,

            },
            {
                path: 'extraClass',
                element: <ExtraClass></ExtraClass>,
                loader: () => fetch('https://assignment-12-server-one-navy.vercel.app/class')
            },
            {
                path: 'dailyRoutine',
                element: <DailyRoutine></DailyRoutine>
            },
            {
                path: 'dailyChart',
                element: <DailyChart></DailyChart>
            }


        ]
    }
]);

export default Routes;