import chicken from '../../../assets/food-categories/chicken.jpg'
import beef from '../../../assets/food-categories/beef.jpg'
import pasta from '../../../assets/food-categories/pasta.png'
import vegetables from '../../../assets/food-categories/vegetables.jpg'
import dessert from '../../../assets/food-categories/dessert.jpg'


const RecipeCategory = () => {
    return (
        <div className='flex md:flex-row flex-col gap-10 md:gap-2 md:w-[80%] w-[100%] mx-auto justify-between'>
            
            <div className='md:w-[15%] w-[60%] mx-auto md:mx-0 rounded-full'>
                <img className='rounded-full hover:rotate-6 duration-500 hover:cursor-pointer' src={chicken} alt="" />
                <p className='text-gray-700 mt-4 text-xl md:text-xl font-bold text-center'>Chicken</p>
            </div>
            <div className='md:w-[15%] w-[60%] mx-auto md:mx-0 rounded-full'>
                <img className='rounded-full hover:rotate-6 duration-500 hover:cursor-pointer' src={beef} alt="" />
                <p className='text-gray-700 mt-4 text-xl md:text-xl font-bold text-center'>Beef</p>
            </div>
            <div className='md:w-[15%] w-[60%] mx-auto md:mx-0 rounded-full'>
                <img className='rounded-full hover:rotate-6 duration-500 hover:cursor-pointer' src={dessert} alt="" />
                <p className='text-gray-700 mt-4 text-xl md:text-xl font-bold text-center'>Dessert</p>
            </div>
            <div className='md:w-[15%] w-[60%] mx-auto md:mx-0 rounded-full'>
                <img className='rounded-full hover:rotate-6 duration-500 hover:cursor-pointer' src={vegetables} alt="" />
                <p className='text-gray-700 mt-4 text-xl md:text-xl font-bold text-center'>Vegetables</p>
            </div>
            <div className='md:w-[15%] w-[60%] mx-auto md:mx-0 rounded-full'>
                <img className='rounded-full hover:rotate-6 duration-500 hover:cursor-pointer' src={pasta} alt="" />
                <p className='text-gray-700 mt-4 text-xl md:text-xl font-bold text-center'>Pasta</p>
            </div>
        </div>
    );
};

export default RecipeCategory;