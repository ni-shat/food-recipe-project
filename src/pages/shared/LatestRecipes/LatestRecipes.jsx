import React, { useEffect, useState } from 'react';
import LatestRecipe from '../LatestRecipe/LatestRecipe';

const LatestRecipes = () => {

    const [latest, setLatest] = useState([])
    
    useEffect(() => {
        fetch('https://chef-project-server-ni-shat.vercel.app/latest-recipes')
            .then(res => res.json())
            .then(data => setLatest(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="text-center md:mt-40 mb-14 md:w-[90%] w-[85%] mx-auto md:mb-40 mt-14">
            <p className="text-[#ED8B1F] leading-relaxed ">
            Taste the Latest 
            </p>
            <h3 className="text-gray-800 mb-14 text-2xl font-bold sm:text-3xl">
            Our Latest Recipes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-y-20 md:gap-x-8 justify-between  mx-auto md:w-[85%] mb-5">
                {
                    latest.map(l => <LatestRecipe key={l.id} latest={l}></LatestRecipe>)
                }
            </div>
        </div>
    );
};
// 
export default LatestRecipes;