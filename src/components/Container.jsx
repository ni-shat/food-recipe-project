

const Container = ({children}) => {
    return (
        <div className={`md:p-4 w-[95%] md:w-[80%] mx-auto text-sm md:text-base`}>
            {children}
        </div>
    );
};
 
export default Container;

