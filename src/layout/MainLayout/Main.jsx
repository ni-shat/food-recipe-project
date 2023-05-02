import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import Blogs from "../../pages/Blogs/Blogs";
import SectionHeaders from "../../components/SectionHeaders";


const Main = () => {
    return (
        <div>
            {/* <SectionHeaders></SectionHeaders> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;