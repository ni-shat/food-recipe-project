import { useLoaderData } from 'react-router-dom';
import c from '../../../assets/signup/ch.png'
import { FaRegPlusSquare, FaThumbsUp } from 'react-icons/fa';
import RecipeDetails from '../RecipeDetailsOfChef/RecipeDetails';

const ChefDetails = () => {

    // const [chefDetails, setChef]

    const chefDetails = useLoaderData();
    console.log(chefDetails);

    const { name, picture_url, id, description, likes, total_recipes, experience, recipes } = chefDetails;

    return (
        <div className='md:w-[80%] w-[85%] mx-auto '>
            <div className='flex gap-10 mt-6 md:flex-row flex-col-reverse '>
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
            <div className='md:mt-44 mt-10'>
                <hr className='w-[80%] mx-auto md:w-full'/> <br />
                <div>
                    <h3 className="text-base md:text-4xl font-bold text-gray-900 mb-1 md:mb-6 text-center">{name}'s Delicious <span className='text-[#ED8B1F] '>Recipes: </span> </h3>
                    <p className='text-gray-600 text-sm md:text-base mt-1 leading-relaxed mb-10 md:mb-20 text-center'>Mouthwatering Recipes for Every Occasion!</p>
                </div>
                <div>
                    {
                        recipes.map(recipe => <RecipeDetails key={id} recipe={recipe}></RecipeDetails>)
                    }
                </div>
                
            </div>
        </div>

    );
};

export default ChefDetails;