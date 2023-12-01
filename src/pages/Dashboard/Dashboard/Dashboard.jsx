import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#f3f9fa]">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
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
                        <Link to='manageMembers'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Manage Members</button>
                        </Link>
                        <Link to='addNewClass'>
                            <button className="btn mb-2 btn-outline w-full rounded-none">Add New Class</button>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;