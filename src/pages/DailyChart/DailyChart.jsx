
const DailyChart = () => {
    return (
        <div>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-indigo-700 mb-8">Daily Food and Calorie Routine</h1>

                {/* Breakfast */}
                <div className="meal-container">
                    <h2 className="text-2xl font-semibold mb-4">Breakfast</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Scrambled Eggs with Spinach and Whole Wheat Toast</li>
                        <li>2 large eggs (140 calories)</li>
                        <li>1 cup spinach (7 calories)</li>
                        <li>2 slices of whole wheat toast (160 calories)</li>
                    </ul>
                    <p className="font-semibold">Total Calories: 307 calories</p>
                </div>

                {/* Mid-Morning Snack */}
                <div className="meal-container">
                    <h2 className="text-2xl font-semibold mb-4">Mid-Morning Snack</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Greek Yogurt with Berries</li>
                        <li>1 cup Greek yogurt (120 calories)</li>
                        <li>1/2 cup mixed berries (40 calories)</li>
                    </ul>
                    <p className="font-semibold">Total Calories: 160 calories</p>
                </div>

                {/* Lunch */}
                <div className="meal-container">
                    <h2 className="text-2xl font-semibold mb-4">Lunch</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Grilled Chicken Salad</li>
                        <li>4 oz grilled chicken breast (180 calories)</li>
                        <li>Mixed greens, cherry tomatoes, cucumbers (50 calories)</li>
                        <li>2 tablespoons balsamic vinaigrette dressing (90 calories)</li>
                        <li>1/4 cup feta cheese (100 calories)</li>
                    </ul>
                    <p className="font-semibold">Total Calories: 420 calories</p>
                </div>

                {/* Afternoon Snack */}
                <div className="meal-container">
                    <h2 className="text-2xl font-semibold mb-4">Afternoon Snack</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Apple with Almond Butter</li>
                        <li>1 medium apple (95 calories)</li>
                        <li>2 tablespoons almond butter (180 calories)</li>
                    </ul>
                    <p className="font-semibold">Total Calories: 275 calories</p>
                </div>

                {/* Dinner */}
                <div className="meal-container">
                    <h2 className="text-2xl font-semibold mb-4">Dinner</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Baked Salmon with Quinoa and Steamed Broccoli</li>
                        <li>6 oz baked salmon (367 calories)</li>
                        <li>1 cup cooked quinoa (222 calories)</li>
                        <li>1 cup steamed broccoli (55 calories)</li>
                    </ul>
                    <p className="font-semibold">Total Calories: 644 calories</p>
                </div>

                {/* Evening Snack */}
                <div className="meal-container">
                    <h2 className="text-2xl font-semibold mb-4">Evening Snack</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>Carrot Sticks with Hummus</li>
                        <li>1 cup carrot sticks (50 calories)</li>
                        <li>3 tablespoons hummus (90 calories)</li>
                    </ul>
                    <p className="font-semibold">Total Calories: 140 calories</p>
                </div>

                <p className="text-xl font-semibold mt-8">Total Daily Calories: Approximately 1,946 calories</p>
            </div>
        </div>
    );
};

export default DailyChart;