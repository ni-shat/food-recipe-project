/* eslint-disable react/prop-types */

const Button = ({children, bgColor, bgHover}) => {
    return (
        <button
            className={`px-5 py-3 text-white duration-150 rounded-lg hover:${bgHover} active:shadow-lg ${bgColor}`}>
            {children}
        </button>
    );
};

export default Button;