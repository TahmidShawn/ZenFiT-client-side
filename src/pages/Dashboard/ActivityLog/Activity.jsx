import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Activity = ({ activity }) => {
    const { trainerName, slotNumber, userEmail } = activity
    const { user } = useContext(AuthContext)
    
    if (user?.email === userEmail) {
        return (
            <div>
                <div className="card bg-base-100 border-2 ">
                    <div className="card-body">

                        <p>{trainerName}</p>
                        <p>Slot: {slotNumber}</p>

                    </div>
                </div>
            </div>
        );
    }

};

export default Activity;