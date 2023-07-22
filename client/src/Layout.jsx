import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
            <div className="lg:py-4 lg:px-24 lg:flex lg:flex-col lg:min-h-screen md:px-7 sm:px-4">
                <Header />
                <Outlet />
            </div>
    )
}