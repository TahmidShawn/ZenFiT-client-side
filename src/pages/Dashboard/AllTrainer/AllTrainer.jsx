import { useLoaderData } from "react-router-dom";
import Trainer from "./Trainer";

const AllTrainer = () => {
    const allTrainer = useLoaderData()
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">All Trainer</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            allTrainer.map(trainer => <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainer;