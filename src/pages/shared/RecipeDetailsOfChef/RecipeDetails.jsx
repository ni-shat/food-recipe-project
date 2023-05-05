import { FaRegHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import '../../home/ChefsSection/LazyLoaderCSS/Lazyloader.css';

const RecipeDetails = ({ recipe }) => {

    const { cooking_method, rating, ingredients, recipe_name, recipe_picture } = recipe;
    console.log(recipe)


    return (

        <div className="flex md:flex-row flex-col justify-between gap-4 mb-10 md:mb-0">
            <div className="h[550px]">
                <div className="relative w-[100%] md:w-[500px] md:h-[550px]">
                    <LazyLoad width="100%" height="100%" threshold={0.95}>
                        <img className="block w-full h-full mx-auto text-gray-400 text-sm rounded-sm"
                            src={recipe_picture}
                        />
                    </LazyLoad>
                    {/* <img src={recipe_picture} alt="Your Image Description" className="bg-gradient-to-b from-transparent to-gray-900" /> */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50">
                        {/* transparent */}
                    </div>
                </div>
                <div className="relative -top-24 left-10">
                    <h2 className="text-xl md:text-4xl font-bold text-white w-[80%]">{recipe_name}</h2>
                </div>

            </div>


            <div className=" md:h-[550px] w-[100%] flex flex-col gap-4 p-0 relative">
                <ul className="text-gray-600 leading-relaxed list list-disc list-inside rounded-md p-5 border h-[60%] overflow-auto bg-slate-50">
                    <h2 className="font-semibold mb-4">Main Ingredients:</h2>
                    {
                        ingredients.map(i => <li className="pl-3">{i}</li>)
                    }
                </ul>
                <div className="bg-slate-50 rounded-md p-5 border overflow-auto h-[40%]">
                    <h2 className="font-semibold mb-4 text-gray-600">Cooking method:</h2>
                    <p className="text-gray-600 leading-relaxed ">
                        {cooking_method}
                    </p>
                </div>

                <div className="p-5 flex gap-3 justify-end items-center absolute right-4 top-2">
                    {rating}+ ratings
                    <FaRegHeart />
                </div>

            </div>
            <div className="mt-5 block md:hidden">
                <hr className=" mb-1" /> <hr />
            </div>

        </div>

    );
    //  bg-gradient-to-r from-slate-50
};

export default RecipeDetails;
