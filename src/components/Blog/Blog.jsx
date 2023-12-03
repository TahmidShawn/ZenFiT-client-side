import { useEffect, useState } from "react";
import SingleForum from "../../pages/Forum/singleForum";

const Blog = () => {
    const [forum, setForum] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/forums')
            .then(res => res.json())
            .then(data => setForum(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center my-10">Blog Section</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {

                    forum?.map(singleForum => <SingleForum key={singleForum._id} singleForum={singleForum}></SingleForum>)

                }
            </div>
        </div>
    );
};

export default Blog;