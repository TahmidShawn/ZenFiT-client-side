import { useLoaderData } from "react-router-dom";
import SingleForum from "./singleForum";

const Forum = () => {
    const forum = useLoaderData()
    return (
        <div className="grid grid-cols-2 gap-10">
            {
                forum.map(singleForum => <SingleForum key={singleForum._id} singleForum={singleForum}></SingleForum>)
            }
        </div>
    );
};

export default Forum;