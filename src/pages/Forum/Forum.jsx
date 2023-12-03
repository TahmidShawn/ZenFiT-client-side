import { useLoaderData } from "react-router-dom";
import SingleForum from "./singleForum";
import { Helmet } from "react-helmet";

const Forum = () => {
    const forum = useLoaderData()
    return (
        <div className="grid grid-cols-2 gap-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ZenFiT | Forum</title>
            </Helmet>
            {
                forum.map(singleForum => <SingleForum key={singleForum._id} singleForum={singleForum}></SingleForum>)
            }
        </div>
    );
};

export default Forum;