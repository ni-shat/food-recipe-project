import { useEffect, useState } from "react";
import Chef from "../Chef/Chef";


const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="md:w-[80%] w-[85%] mx-auto md:mt-32 mt-14">
             <h3 className="text-gray-800 text-xl md:text-4xl font-bold text-center  ">Our chefs</h3>
             <p className="text-[#ED8B1F] text-center md:mb-14 mb-8 md:mt-4 mt-2 font-medium md:text-base text-xs">Meet the talented chefs behind the recipes you love in Our Chefs section.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-y-20 gap-y-7">
                {
                    chefs.map(chef => <Chef
                        key={chef.id} chef={chef} >
                    </Chef>)
                }
            </div>


        </div>
    );
};

//text-[#ED8B1F]

// to={`/category/${chef.id}`} className="text-decoration-none text-black">{chef.name}

export default Chefs;