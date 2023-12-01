import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DynamicSlots = ({ numberOfSlots }) => {
    const { trainerName, dailyTime, imageUrl, } = useLoaderData()
    const slots = Array.from({ length: numberOfSlots }, (_, index) => index + 1);
    const handleSlots = (slotNumber) => {
        console.log(slotNumber);
    }
    return (
        <div>
            <h4 className=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Total Slots
            </h4>
            <div className="flex flex-wrap justify-center mt-4">
                {slots.map((slotNumber) => (
                    <>
                        <Link to={`/trainerPlan/${trainerName}/${slotNumber}`}>
                            <button

                                onClick={() => handleSlots(slotNumber)}
                                className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Slot {slotNumber}
                            </button>
                        </Link >

                    </>
                ))}
            </div>
        </div >
    );
};

export default DynamicSlots;
