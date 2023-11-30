import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddNewClass = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleClass = async (e) => {
        e.preventDefault()
        const form = e.target
        const className = form.className.value
        const classDescription = form.classDescription.value
        const instructor = form.instructor.value
        const classInfo = { className, classDescription, instructor }
        console.log(classInfo);
        const classData = await axiosPublic.post('/class', classInfo);
        console.log(classData.data)
        if (classData.data.insertedId) {

            alert('done')
        }

    }
    return (
        <div className="px-20 mt-10">
            <h1 className="text-4xl text-center mb-5">Add New Class</h1>
            <form
                onSubmit={handleClass}
                className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="className" id="className" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="className" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="classDescription" id="classDescription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="classDescription" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input defaultValue={user?.displayName} readOnly type="text" name="instructor" id="instructor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="instructor" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor</label>
                </div>

                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Submit" />
            </form>

        </div>
    );
};

export default AddNewClass;