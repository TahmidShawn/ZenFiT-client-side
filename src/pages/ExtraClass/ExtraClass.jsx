import { useLoaderData } from "react-router-dom";
import Extra from "./Extra";

const ExtraClass = () => {
    const extraClass = useLoaderData()
    return (
        <div className="grid grid-cols-2 gap-5">
            {
                extraClass.map(extra => <Extra key={extra._id} extra={extra}></Extra>)
            }
        </div>
    );
};

export default ExtraClass;