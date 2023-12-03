import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const AddNewForums = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleForums = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const description = form.description.value
        const newForums = { name, email, description }
        console.log(newForums);
        const classData = await axiosPublic.post('/forums', newForums);
        console.log(classData.data)
        if (classData.data.insertedId) {

            toast.success('Forums added');
            form.reset()
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="max-w-xl w-full flex-col lg:flex-row-reverse">
                    <h1 className="text-4xl text-center mb-10">Add New Forums</h1>
                    <div className="card shrink-0  w-full shadow-xl bg-base-100">
                        <form
                            onSubmit={handleForums}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} readOnly placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>

                                <textarea className="border-2" name="description" id="" cols="30" rows="10"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewForums;