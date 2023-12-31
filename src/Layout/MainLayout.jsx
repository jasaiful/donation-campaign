import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";


const MainLayout = () => {

    const loc = useLocation();

    useEffect(() => {
        if (loc.pathname === "/") {
            document.title = `Campaign-Home`;
        }
        else {
            document.title = `Campaign ${loc.pathname.replace("/", "-")}`;
        }
    }, [loc.pathname])

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="py-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;