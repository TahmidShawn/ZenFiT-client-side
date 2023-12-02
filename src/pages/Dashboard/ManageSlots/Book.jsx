/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Book = ({ book }) => {
    const { userEmail, trainerName, slotNumber, selectedPlan } = book
    console.log(book);
    const { user } = useContext(AuthContext)
    if (user.email === userEmail) {
        return (
            <div className="border-2">
                <h1>Email:{userEmail}</h1>
                <h1>Trainer Name:{trainerName}</h1>
                <h1>Booking Slot:{slotNumber}</h1>
                <h1>Selected Plan: {selectedPlan}</h1>
            </div>
        );
    }


};

export default Book;