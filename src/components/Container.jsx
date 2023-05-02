

const Container = ({children, bgColor}) => {
    return (
        <div className={`container md:p-4 w-[95%] md:w-[80%] mx-auto ${bgColor} text-sm md:text-base`}>
            {children}
        </div>
    );
};

export default Container;

