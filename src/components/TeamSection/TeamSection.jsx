import { useEffect, useState } from "react";
import TrainerCard from "../../pages/Trainer/TrainerCard";



const TeamSection = () => {
    const [trainer, setTrainer] = useState()
    useEffect(() => {
        fetch('https://assignment-12-server-one-navy.vercel.app/trainer')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center my-10">Team Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    trainer?.map(trainerCard => <TrainerCard key={trainerCard._id} trainerCard={trainerCard}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default TeamSection;