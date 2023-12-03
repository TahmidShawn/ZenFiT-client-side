

const DailyRoutine = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">

                <h1 className="text-4xl font-bold text-indigo-700 my-8">Full Body Workout Routine</h1>

                <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full mb-8">

                    <h2 className="text-2xl font-semibold mb-4">Warm-Up</h2>

                    <ul className="list-disc ml-8 mb-4">
                        <li>Jumping jacks: 2 minutes</li>
                        <li>High knees: 2 minutes</li>
                        <li>Arm circles: 1 minute</li>
                        <li>Leg swings: 1 minute</li>
                        <li>Dynamic stretches: 4 minutes</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Strength Training</h2>

                   
                    <div className="mb-4">
                        <p className="text-lg font-medium">1. Bodyweight Squats</p>
                        <p className="ml-8">3 sets of 15 reps</p>
                        <p className="ml-8">Rest: 60 seconds between sets</p>
                    </div>

                    
                    <div className="mb-4">
                        <p className="text-lg font-medium">2. Push-Ups</p>
                        <p className="ml-8">3 sets of 10 reps</p>
                        <p className="ml-8">Rest: 60 seconds between sets</p>
                    </div>

                    
                    <div className="mb-4">
                        <p className="text-lg font-medium">3. Dumbbell Rows</p>
                        <p className="ml-8">If you have dumbbells</p>
                        <p className="ml-8">3 sets of 12 reps (each arm)</p>
                        <p className="ml-8">Rest: 60 seconds between sets</p>
                    </div>

                
                    <div className="mb-4">
                        <p className="text-lg font-medium">4. Plank</p>
                        <p className="ml-8">3 sets</p>
                        <p className="ml-8">Hold for 30 seconds to 1 minute</p>
                        <p className="ml-8">Rest: 45 seconds between sets</p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Cardiovascular Exercise</h2>

                    <p className="mb-4">Duration: 15-20 minutes</p>
                    <p className="mb-4">Choose one or a combination of the following:</p>

                    <ul className="list-disc ml-8">
                        <li>Jogging in place</li>
                        <li>Jump rope</li>
                        <li>High-intensity interval training</li>
                    </ul>


                    <h2 className="text-2xl font-semibold mt-4 mb-4">Flexibility and Cool Down</h2>

                    <p className="mb-4">Duration: 5-10 minutes</p>
                    <p className="mb-4">Static stretches for major muscle groups:</p>

                    <ul className="list-disc ml-8">
                        <li>Hamstring stretch</li>
                        <li>Chest opener stretch</li>
                        <li>Triceps stretch</li>
                        <li>Quadriceps stretch</li>
                        <li>Calf stretch</li>
                        <li>Shoulder stretch</li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default DailyRoutine;