import { useLoaderData } from "react-router-dom";
import ManageSlot from "./ManageSlot";

const ManageSlots = () => {
    const manageSlots = useLoaderData()
    console.log(manageSlots);

    return (
        <div>
            {
                manageSlots.map(manageSlot => <ManageSlot key={manageSlot._id} manageSlot={manageSlot}></ManageSlot>)
            }
        </div>
    );
};

export default ManageSlots;