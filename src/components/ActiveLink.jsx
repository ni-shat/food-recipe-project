import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (

        <NavLink to={to}
            className={ ({ isActive }) => isActive ? "text-[#ED8B1F] md:border-b-2 border-[#ED8B1F] py-0 md:py-2.5 md:px-2.5" : "text-black border-white md:px-2.5"}
        >
            
            {children} 

        </NavLink>

    );
};

export default ActiveLink;