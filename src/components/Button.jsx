/* eslint-disable react/prop-types */

const Button = ({children}) => {
    return (
        <button
            className={` px-10 py-2 text-white duration-150 rounded-lg bg-[#ED8B1F] hover:bg-slate-200 active:shadow-lg font-bold`}>
            {children}
        </button>
    );
};

export default Button;