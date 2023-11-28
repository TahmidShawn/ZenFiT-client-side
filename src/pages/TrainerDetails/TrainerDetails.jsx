import { Link, useLoaderData } from "react-router-dom";

const TrainerDetails = () => {
    const { trainerName, dailyTime, imageUrl, } = useLoaderData()

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <img src={imageUrl} className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div className="w-96 border-2">
                        <h1 className="text-5xl font-bold mb-3">{trainerName}</h1>

                        <Link to={`/trainerPlan?trainerName=${encodeURIComponent(trainerName)}`}>
                            <button className="btn btn-outline my-2">
                                Slot
                                <div className="badge badge-secondary">{dailyTime}</div>
                            </button>
                        </Link>


                        <br />
                        <Link to='/trainerForm'><button className="btn btn-info">Be a Trainer</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;