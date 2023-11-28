import { useLoaderData } from "react-router-dom";
import Subscriber from "./Subscriber";

const Subscribers = () => {
    const subscribers = useLoaderData()

    return (
        <div className="mx-5">
            <h2 className="text-4xl text-center font-bold my-5">Total Subscribers count : {subscribers.length}</h2>
            <hr />
            <div className="mt-5">
                {
                    subscribers.map((subscriber, index) => <Subscriber key={subscriber._id} index={index} subscriber={subscriber}></Subscriber>)
                }
            </div>
        </div>
    );
};

export default Subscribers;