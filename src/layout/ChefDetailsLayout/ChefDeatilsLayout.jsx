
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
 

const ChefDeatilsLayout = () => {

    const {loading} = useContext(AuthContext);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {
                !loading && <Footer></Footer>
            }
            
        </div>
    );
};

export default ChefDeatilsLayout;