import { Link, useLoaderData } from "react-router-dom";
import DynamicSlots from "./DynamicSlots";

const TrainerDetails = () => {
    const { trainerName, dailyTime, imageUrl, } = useLoaderData()

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <img src={imageUrl} className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div className=" border-2">
                        <h1 className="text-5xl font-bold mb-3">{trainerName}</h1>


                        {/* <button className="btn btn-outline my-2">
                                Slot
                                <div className="badge badge-secondary">{dailyTime}</div>
                            </button> */}
                        <DynamicSlots numberOfSlots={dailyTime} />


                        <br />
                        <Link to='/trainerForm'><button className="btn btn-info">Be a Trainer</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrainerDetails;