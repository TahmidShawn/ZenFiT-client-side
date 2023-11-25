

const TrainerCard = ({ trainerCard }) => {
    const { trainerName, profileImage, yearsOfExperience, socialIcons, availableTimeSlot, twitter } = trainerCard
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={profileImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{trainerName}</h2>
                <p>{yearsOfExperience}</p>
                <p>{socialIcons.twitter}</p>
                <p>{availableTimeSlot}</p>
            </div>
        </div>
    );
};

export default TrainerCard;