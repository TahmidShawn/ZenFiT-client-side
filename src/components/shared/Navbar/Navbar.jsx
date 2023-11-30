import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                // toast.success('LogOut Successfully Done!');
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/trainer'>Trainer</NavLink>
        <NavLink to='classes'>Classes</NavLink>
        <NavLink to='dashboard'>Dashboard</NavLink>
        <NavLink>Community</NavLink>
    </>
    return (
        <nav className="navbar bg-[#554640] text-white px-3">
            <div className="navbar-start">
                <button className="text-3xl font-semibold px-8 py-2 mr-8 hidden lg:inline">ZenFiT</button>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FiMenu className="text-2xl" />
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className=" menu-horizontal px-1 flex gap-6">
                        {navLinks}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">

                {
                    user ?
                        <div className="flex gap-3">
                            <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                            <button onClick={handleLogOut}>LogOut</button>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="bg-white rounded-xl mr-2 px-6 py-2 font-bold text-black">Login</button>
                        </Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;