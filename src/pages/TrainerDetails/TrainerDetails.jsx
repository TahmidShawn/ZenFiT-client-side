import { Link, useLoaderData } from "react-router-dom";

const TrainerDetails = () => {
    const { trainerName, dailyTime, imageUrl, } = useLoaderData()


    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <img src={imageUrl} className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div className="w-96 border-2">
                        <h1 className="text-5xl font-bold">{trainerName}</h1>

                        <Link to='/trainerPlan'> <button className="my-4 btn btn-info">Available Slot {dailyTime} (Join)</button></Link>

                        <Link to='/trainerForm'><button className="btn btn-info">Be a Trainer</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;