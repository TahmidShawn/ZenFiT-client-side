import { useLoaderData } from "react-router-dom";
import TrainerCard from "./TrainerCard";
import { Helmet } from "react-helmet";

const Trainer = () => {
    const trainer = useLoaderData()
    console.log(trainer);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
             <Helmet>
                <meta charSet="utf-8" />
                <title>ZenFiT | Trainer</title>
            </Helmet>
            {
                trainer?.map(trainerCard => <TrainerCard key={trainerCard._id} trainerCard={trainerCard}></TrainerCard>)
            }
        </div>
    );
};

export default Trainer;