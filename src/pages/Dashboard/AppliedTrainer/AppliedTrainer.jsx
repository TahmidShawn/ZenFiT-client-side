
import useTrainer from "../../../hooks/useTrainer";
import AppliedTrainerData from "./AppliedTrainerData";


const AppliedTrainer = () => {
    const [trainers, refetch] = useTrainer();
    console.log(trainers);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Applied Trainer</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            trainers?.map(trainer => <AppliedTrainerData refetch={refetch} key={trainer._id} trainer={trainer}></AppliedTrainerData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainer;