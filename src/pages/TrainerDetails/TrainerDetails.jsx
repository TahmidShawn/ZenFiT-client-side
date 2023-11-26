import { useLoaderData } from "react-router-dom";

const TrainerDetails = () => {
    const { trainerName, profileImage, yearsOfExperience, socialIcons, availableTimeSlot, _id } = useLoaderData()


    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={profileImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{trainerName}</h1>
                        <p className="py-6 text-xl font-semibold">Available Slot: {availableTimeSlot}</p>
                        
                        <button className="btn btn-primary">Be a Trainer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;