import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const ManageMember = ({ manageMember }) => {
    const { userEmail, selectedPlan, slotNumber, trainerEmail } = manageMember
    const { user } = useContext(AuthContext)
    // if (user?.userEmail === trainerEmail) {
    if (user?.email === trainerEmail) {
        return (

            <tr className="grid grid-cols-4 items-center">
                <td>{userEmail}</td>
                <td>{slotNumber}</td>
                <td>{selectedPlan}</td>
                <td><button className="btn btn-link">Contact</button></td>
            </tr>

        );
    }

   

};

export default ManageMember;