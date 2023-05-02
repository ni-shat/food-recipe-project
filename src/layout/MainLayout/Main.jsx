import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            h3eader
            <Outlet></Outlet>
        </div>
    );
};

export default Main;