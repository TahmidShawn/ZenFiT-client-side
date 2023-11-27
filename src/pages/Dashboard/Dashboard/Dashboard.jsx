import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 min-h-full bg-[#cedada] text-base-content">
                        {/* Sidebar content here */}
                        <Link to='dashboard/subscribers'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">All Subscribers</button>
                        </Link>
                        <Link to='dashboard/allTrainer'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">All Trainers</button>
                        </Link>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;