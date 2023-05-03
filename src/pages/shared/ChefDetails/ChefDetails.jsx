import { useLoaderData } from 'react-router-dom';
import c from '../../../assets/signup/ch.png'
import { FaRegPlusSquare, FaThumbsUp } from 'react-icons/fa';
import RecipeDetails from '../RecipeDetailsOfChef/RecipeDetails';

const ChefDetails = () => {

    const chefDetails = useLoaderData();
    console.log(chefDetails);

    const { name, picture_url, id, description, likes, total_recipes, experience } = chefDetails;

    return (
        <div className='md:w-[80%] w-[85%] mx-auto '>
            <div className='flex gap-10 mt-6'>
                <div className='flex justify-center items-center'>
                    <div className=' p-4'>
                        <div><h3 className="text-2xl text-gray-900 font-bold mb-6">{name}</h3></div>
                        <div className='text-gray-600 mt-1 leading-relaxed mb-3'>{description}</div>
                        <div className='text-gray-600 mb-3'>
                            {total_recipes}
                        </div> 
                        <div className='text-gray-600 mb-3'>{experience}</div>
                        <div className='text-gray-600'>{likes}</div>
                    </div>
                </div>

                <img className='mx-auto' src={picture_url} alt="" />
            </div>
            <div className='mt-44'>
                <hr /> <br />
                <div>
                    <h3 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 text-center">{name}'s Delicious <span className='text-[#ED8B1F] '>Recipes: </span> </h3>
                    <p className='text-gray-600 mt-1 leading-relaxed mb-20 text-center'>Mouthwatering Recipes for Every Occasion!</p>
                </div>
                <RecipeDetails key={id} chefDetails={chefDetails}></RecipeDetails>
            </div>
        </div>

    );
};

export default ChefDetails;