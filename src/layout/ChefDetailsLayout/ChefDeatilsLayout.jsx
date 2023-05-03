
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";
 

const ChefDeatilsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefDeatilsLayout;