import { useLoaderData } from "react-router-dom";
import TrainerCard from "./TrainerCard";

const Trainer = () => {
    const trainer = useLoaderData()
    console.log(trainer);
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                trainer.map(trainerCard => <TrainerCard key={trainer.trainerName} trainerCard={trainerCard}></TrainerCard>)
            }
        </div>
    );
};

export default Trainer;