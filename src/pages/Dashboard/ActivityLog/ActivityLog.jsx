import { useLoaderData } from "react-router-dom";
import Activity from "./Activity";

const ActivityLog = () => {
    const activityLog = useLoaderData()
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                activityLog?.map((activity, idx) => <Activity key={idx} activity={activity}></Activity>)
            }
        </div>
    );
};

export default ActivityLog;