import React, { useEffect, useState } from 'react';
import LatestRecipe from '../LatestRecipe/LatestRecipe';

const LatestRecipes = () => {

    const [latest, setLatest] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/latest-recipes')
            .then(res => res.json())
            .then(data => setLatest(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="text-center mt-32 mb-32">
            <p className="text-[#ED8B1F] leading-relaxed ">
            Taste the Latest 
            </p>
            <h3 className="text-gray-800 mb-14 text-2xl font-bold sm:text-3xl">
            Our Latest Recipes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-y-20 gap-y-0 mx-auto md:w-[85%] mb-5">
                {
                    latest.map(l => <LatestRecipe key={l.id} latest={l}></LatestRecipe>)
                }
            </div>
        </div>
    );
};
// 
export default LatestRecipes;