import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="https://i.ibb.co/tB9JnFq/Logo.png" alt="logo" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : ""
                            }
                        >
                            Home
                        </NavLink>
                        </li>
                        <li><NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : ""
                            }
                        >
                            Donation
                        </NavLink>
                        </li>
                        <li><NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;