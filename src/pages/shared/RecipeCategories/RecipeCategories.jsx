import RecipeCategory from "../RecipeCategory/RecipeCategory";

const RecipeCategories = () => {
    

    return (
        <div className="text-center mt-32 mb-32">
            <p className="text-[#ED8B1F] leading-relaxed ">
            Choose a Category
            </p>
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Recipe Categories
            </h3>
            <div className="mt-14">
                {
                    <RecipeCategory></RecipeCategory>
                }
            </div>
        </div>
    );
};

export default RecipeCategories;