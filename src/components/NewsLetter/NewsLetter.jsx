import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const NewsLetter = () => {
    const axiosPublic = useAxiosPublic()

    const handleSubscribe = async (e) => {
        e.preventDefault();
        const newsEmail = e.target.newsEmail.value;

        const newsLetterEmail = await axiosPublic.post('/newsLetterEmail', { newsEmail });
        console.log(newsLetterEmail.data)
        if (newsLetterEmail.data.insertedId) {

            toast.success('Subscribed');
            e.target.reset();
        }
    };

    return (
        <div className="bg-[#554640] text-white flex flex-col justify-center items-center p-10 mt-10 text-center">
            <h2 className="text-3xl font-bold">Unlock Your Peak Potential with ZenFit</h2>
            <p className="mt-7 text-center">
                Elevate your well-being with ZenFit – where personalized fitness meets a supportive community, guiding
                <br /> you on a journey to unlock your full potential
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col items-center mt-6">
                <input required
                    className="md:w-96 p-2 rounded-sm text-black border border-gray-300 focus:outline-none focus:border-[#554640] placeholder-gray-500"
                    type="email"
                    name="newsEmail"
                    id=""
                    placeholder="Enter your email"
                />
                <button
                    type="submit"
                    className="btn mt-2 rounded-sm ml-2 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-[#554649] hover:text-white"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsLetter;

