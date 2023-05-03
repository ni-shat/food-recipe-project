
const RecipeDetails = ({ chefDetails }) => {

    const { name, picture_url, id, description, likes, total_recipes, experience } = chefDetails;

    return (
        <div className="flex justify-between gap-0">
            <div>
                <div className="relative  w-[500px] h-[550px]">
                    <img src="https://i.ibb.co/H4BMbgP/Untitled-design-37.png" alt="Your Image Description" className="bg-gradient-to-b from-transparent to-gray-900" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50">
                        {/* transparent */}
                    </div>
                </div>
                <h2 className="text-xl md:text-4xl font-semibold text-white relative -top-24 left-10">Tart Pecan Pie</h2>
            </div>

           
            <div className="w-[57%] h-[550px] p-5 bg-slate-300">
                <ul className="text-gray-600 mt-1 leading-relaxed list list-disc list-inside ">
                    <h2 className="font-semibold mb-4">Main Ingredients</h2>
                    
                    <li className="pl-3">1 lb ground beef</li>
                    <li className="pl-3">1 egg</li>
                    <li className="pl-3">2 cups water</li>
                    <li className="pl-3">4 cloves of garlic</li>
                    <li className="pl-3">1 tsp freshly ground black pepper</li>
                    <li className="pl-3"> 4 large bell peppers </li>
                    <li className="pl-3">1 cup finley grated parmigiano reggiano</li>
                </ul>
                
                
                
                
                
                
                
                

            </div>

        </div>

    );
};

export default RecipeDetails;
