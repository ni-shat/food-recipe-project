import React from 'react';

const LatestRecipe = ({ latest }) => {

    const { recipe_url, description, recipe_name, chef } = latest;



    return (
        <div className=" rounded-sm mx-auto">
            <div className="max-w-sm rounded-sm">
                <article className="pt-0 rounded-sm shadow-md md:h-[520px] border">

                    <img className="block w-[420px] object-cover h-[310px] text-gray-400 text-sm rounded-sm"
                        src={recipe_url}
                    />
                    <div className=' h-[200px] '>
                        <div className="p-5 md:-mt-5 -mt-3 pt-8 md:pt-10 flex-1 ">
                            <div className="mt-2">
                                <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                    {recipe_name}
                                </h3>
                                <p className="text-gray-600 mt-1 leading-relaxed">
                                    {description} experience
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-between relative">
                        <p className='flex items-center justify-between gap-1 text-gray-600 absolute right-4 bottom-0'>
                            <span>
                                By
                            </span>

                            <span className='text-[#ED8B1F]'>{chef}</span>
                        </p>

                    </div>


                </article>
            </div>
        </div>
    );
};

export default LatestRecipe;