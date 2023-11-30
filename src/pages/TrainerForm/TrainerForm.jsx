/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const TrainerForm = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    const handleTrainer = async (e) => {
        e.preventDefault();
        // get form info 
        const form = e.target;
        const trainerName = form.trainerName.value;
        const trainerEmail = form.trainerEmail.value;
        const trainerAge = form.trainerAge.value;
        const weeklyTime = form.weeklyTime.value;
        const dailyTime = form.dailyTime.value;
        const experience = form.experience.value;
        const socialLink = form.socialLink.value;
        const img = form.img.files[0];
        const gym = form.gym.checked ? 'Gym' : '';
        const yoga = form.yoga.checked ? 'Yoga' : '';
        const running = form.running.checked ? 'Running' : '';
        const meditation = form.meditation.checked ? 'Meditation' : '';
        const trainerSkill = [gym, yoga, running, meditation];
        const role = 'member'


        const formData = new FormData();
        formData.append('key', image_hosting_key);
        formData.append('image', img);

        // send img to imgBB 
        const res = await axiosPublic.post(img_hosting_api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(res.data);
        const imageUrl = res.data.data.url
        console.log(imageUrl);
        if (res.data.success) {
            // send data to server 
            const trainerInfo = { trainerName, trainerEmail, trainerAge, trainerSkill, weeklyTime, dailyTime, imageUrl, experience, socialLink, role };

            const trainerData = await axiosPublic.post('/trainer', trainerInfo);
            console.log(trainerData.data)
            if (trainerData.data.insertedId) {

                alert('done')
            }
        }
    };


    return (
        <div className="bg-base-200 p-10 px-20">
            <div className="text-center mb-3">
                <h2 className="text-5xl font-bold mb-3">Join as Trainer</h2>
                <p className="max-w-2xl mx-auto">Fuel your passion for fitness become a trainer and inspire positive change. Join our community, share your expertise, and help others on their wellness journey.</p>
            </div>
            <form onSubmit={handleTrainer}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="trainerName" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="trainerEmail" id="email" defaultValue={user?.email} readOnly className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="trainerAge" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input min="1" max="168" type="number" name="weeklyTime" id="weeklyTime" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="weeklyTime" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weekly Hours</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input min="1" max="24" type="number" name="dailyTime" id="dailyTime" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="dailyTime" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Daily Hours</label>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input min="1" max="168" type="number" name="experience" id="experience" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="experience" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Years of Experience</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input min="1" max="24" type="text" name="socialLink" id="socialLink" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="socialLink" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transHtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Social Media Link</label>
                    </div>

                </div>


                <div className="relative z-0 w-full mb-6 group  items-center flex gap-28 border-2 p-5">
                    <h1 className="text-xl ">Skills:</h1>
                    <div className="text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full gap-3">
                        <div className="flex">
                            <input type="checkbox" name="gym" id="gym" />
                            <label className="ml-1" htmlFor="gym">Gym</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="yoga" id="yoga" />
                            <label className="ml-1" htmlFor="yoga">Yoga</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" name="running" id="running" />
                            <label className="ml-1" htmlFor="running">Running</label>
                        </div>

                        <div className="flex">
                            <input type="checkbox" name="meditation" id="meditation" />
                            <label className="ml-1" htmlFor="meditation">Meditation</label>
                        </div>

                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="file" name="img" id="" className="file-input file-input-bordered rounded-none w-full max-w-xs" />
                </div>

                <div className="w-full my-2 flex justify-center">
                    <input
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        value="Apply Now"
                    />
                </div>
            </form>
        </div>
    );
};

export default TrainerForm;