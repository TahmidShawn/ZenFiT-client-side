/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TrainerCard = ({ trainerCard }) => {
    const { trainerName, trainerEmail, trainerAge, trainerSkill, weeklyTime, dailyTime, imageUrl, experience, socialLink, _id } = trainerCard

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imageUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center font-semibold">
                <h2 className="card-title text-3xl">{trainerName}</h2>
                <p>Age: {trainerAge} Years</p>
                <p>Year of experience: {experience}</p>
               
                <p>Available Slot: {dailyTime}</p>
                {/* <button className=" bg-blue-500 p-5"> <a href={socialLink}>Connect</a></button> */}
            </div>
            <Link className="btn mb-1" to={socialLink}>Lets Connect ➜</Link>
            <Link className="btn" to={`/trainer/${_id}`}>Know More</Link>

        </div>
    );
};

export default TrainerCard;