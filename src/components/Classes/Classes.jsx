import { useEffect } from "react";
import { useState } from "react";
import SingleClass from "./SingleClass";


const Classes = () => {
    const [classes, setClasses] = useState()
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);
    return (
        <div>
            <h1 className="text-4xl text-center my-10">Class Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    classes?.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass}></SingleClass>)
                }
            </div>
        </div>
    );
};

export default Classes;