/* eslint-disable react/prop-types */


import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";



const Dashboard = () => {
    const [userData, setUserData] = useState()
    const { user } = useContext(AuthContext)
    const email = user?.email
    console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [email])
    if (userData?.role === 'admin') {
        return (
            <div>
                <div className="drawer lg:drawer-open">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>ZenFiT | Dashboard</title>
                    </Helmet>
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-[#f3f9fa]">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-52 min-h-full bg-[#d8cfaf] text-base-content">
                            {/* Sidebar content here */}
                            <Link to='/'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Home</button>
                            </Link>
                            <Link to='subscribers'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">All Subscribers</button>
                            </Link>
                            <Link to='allTrainer'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">All Trainers</button>
                            </Link>
                            <Link to='appliedTrainer'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Applied Trainer</button>
                            </Link>
                            <Link to='balance'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Balance</button>
                            </Link>
                            <Link to='manageSlots'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Manage Slots</button>
                            </Link>
                            <Link to='manageMembers'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Manage Members</button>
                            </Link>
                            <Link to='addNewClass'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Add New Class</button>
                            </Link>
                            <Link to='addNewForums'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Add New Forums</button>
                            </Link>
                            <Link to='activityLog'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Activity Log</button>
                            </Link>
                            <Link to='extraClass'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Recommended Class</button>
                            </Link>
                            <Link to='dailyRoutine'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Daily Routine</button>
                            </Link>
                            <Link to='dailyChart'>
                                <button className="btn mb-2 btn-outline w-full rounded-none">Daily Chart</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    else return (
        <div>
            <div className="drawer lg:drawer-open">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>ZenFiT | Dashboard</title>
                </Helmet>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#f3f9fa]">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 min-h-full bg-[#d8cfaf] text-base-content">
                        {/* Sidebar content here */}
                        <Link to='/'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Home</button>
                        </Link>
                        <Link to='activityLog'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Activity Log</button>
                        </Link>
                        <Link to='extraClass'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Recommended Class</button>
                        </Link>
                        <Link to='dailyRoutine'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Daily Routine</button>
                        </Link>
                        <Link to='dailyChart'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Daily Chart</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );


};

export default Dashboard;