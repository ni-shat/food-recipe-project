import LatestRecipes from "../../shared/LatestRecipes/LatestRecipes";
import RecipeCategories from "../../shared/RecipeCategories/RecipeCategories";
import Slider from "../Banner/Slider/Slider";
import Chefs from "../ChefsSection/Chefs/Chefs";


const Home = () => {


    return (
        <div>
            <Slider></Slider>
            <Chefs></Chefs>
            <RecipeCategories></RecipeCategories>
            <LatestRecipes></LatestRecipes>
        </div>
    );
};

export default Home;