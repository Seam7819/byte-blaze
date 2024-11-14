import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-16"><Header></Header></div>
            <div className="min-h-[calc(100vh-114px)] ">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;