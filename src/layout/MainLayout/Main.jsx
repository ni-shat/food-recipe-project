import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import Footer from "../../pages/shared/Footer/Footer";
import { PuffLoader } from "react-spinners";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Main = () => {

    const { loading } = useContext(AuthContext);

     if (loading) {
        return <div className="md:w-[80%] w-[85%] relative mb60">
            <div className="absolute right-16 top-24">
                <PuffLoader color="#ED8B1F" />
            </div>

        </div>
    }

    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;