import { FaRegHeart, FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import '../../home/ChefsSection/LazyLoaderCSS/Lazyloader.css';
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast, { Toaster } from 'react-hot-toast';

// const notify = () => 



const RecipeDetails = ({ recipe }) => {

    const { cooking_method, rating, ingredients, recipe_name, recipe_picture } = recipe;
    console.log(recipe)

    const [saved, setSaved] = useState(true);

    const handleFavBtn = () => {
        setSaved(!saved);
        toast.success('Added to favourite!', {
            style: {
                border: '1px solid #fffff',
                padding: '16px',
                color: '#6e6d6d',
            },
            iconTheme: {
                primary: '#6bbd85',
                secondary: '#FFFAEE',
            },
        });
    }


    return (

        <div className="flex md:flex-row flex-col justify-between gap-4 mb-10 md:mb-0">
            <div className="h[550px]">
                <div className="relative w-[100%] md:w-[500px] md:h-[550px]">
                    <LazyLoad width="100%" height="100%" threshold={0.20}>
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

                <div className="p-5 flex gap-4 justify-end items-center absolute right-4 top-2">
                    <div className="flex gap-2 items-center">
                        {rating}+
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>


                    <div>
                        {
                            saved ?
                                <div>
                                    <button className="border bg-slate-100 rounded-md flex items-center px-2 py-1 gap-2"> <FaRegHeart onClick={handleFavBtn} className="text-red-600" />
                                    </button>
                                    <Toaster
                                        position="top-right"
                                        reverseOrder={false}
                                    />
                                </div>

                                : <button disabled> <FaHeart className="text-red-600 mt-1.5 mr-2" /></button>
                                

                        }
                    </div>




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
