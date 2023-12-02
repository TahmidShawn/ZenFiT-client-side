import { useLoaderData } from "react-router-dom";
import ManageMember from "./ManageMember";

const ManageMembers = () => {
    const manageMembers = useLoaderData()
    return (
        <div>

            <div>
                <div className="ml-10">
                    <table className="table">
                        <thead className="grid grid-cols-4">
                            <td>User Email</td>
                            <td>Selected Slot</td>
                            <td>Plan</td>
                        </thead>
                        <tbody>
                            {
                                manageMembers.map((manageMember, idx) => <ManageMember key={idx} manageMember={manageMember}></ManageMember>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMembers;