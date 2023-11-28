/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SingleClass = ({ singleClass }) => {
    console.log(singleClass);
    const { title, description, instructor } = singleClass
    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{instructor}</p>
                    <Link to='/trainer'><Button size="md" color="white">Join Now</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;