import { FaArrowCircleRight, FaArrowRight, FaRegPlusSquare, FaThumbsUp } from 'react-icons/fa';



const Chef = ({ chef }) => {

    const { id, picture_url, name, experience, total_recipes, likes } = chef;
    console.log(id, picture_url, name, experience, total_recipes, likes);


    return (
        <div className=" rounded-sm">
            <div className="max-w-sm rounded-sm">
                <article className="pt-8 md:pt-0 rounded-sm shadow-md">

                    <img className="block text-gray-400 text-sm rounded-sm"
                        src={picture_url}
                    />
                    <div className='border'>
                    <div className="p-5 md:-mt-5 -mt-3  pt-10">
                        <div className="mt-2">
                            <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                {name}
                            </h3>
                            <p className="text-gray-600 mt-1 leading-relaxed">
                                {experience} experience
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className='flex items-center justify-between gap-1 text-gray-600'>
                                <span>
                                    {total_recipes}
                                </span>
                                <span>recipes</span> 
                                <span><FaRegPlusSquare className='inline text-text-gray-600' /></span>
                            </p>
                            <p>{likes} <FaThumbsUp className='inline ml-1 text-gray-600 -mt-2'/> </p>
                        </div>
                        </div>
                        <hr className='w-[90%] mx-auto mb-1' /> <hr className='w-[90%] mx-auto ' />
                        <button className="mt-2 text-sm md:text-base text-gray-60 font-medium w-full p-3.5 text-[#ED8B1F] rounded-sm decoration-[#ED8B1F] hover:underline text-right">
                            View all Recipes <FaArrowRight className='inline ml-2 text-[#ED8B1F]'/>
                            
                        </button>
                        </div>

                </article>
            </div>
        </div>
    );
};

/**
 * Years of experience

Numbers of recipes

Likes

View Recipes Button
 */
export default Chef;