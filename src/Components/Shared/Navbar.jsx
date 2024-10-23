import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../assets/Untitled design (2)-Photoroom.png';
import { GlobalStateContext } from "../../Providers/GlobalStateProvider";
import { motion } from 'framer-motion';
import { FaBars, FaBell, FaTimes } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { notifications } = useContext(GlobalStateContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="navbar bg-[#F3F4F6] shadow-lg font-poppins">
                    <div className="flex-1 mx-4">
                        <Link to="/" className="flex gap-2 items-center">
                            <img className="w-auto h-7" src={logo} alt="EchoChamber logo" />
                            <span className="font-bold text-lg text-[#1F2937] hover:text-blue-500">EchoChamber</span>
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="hidden md:flex menu menu-horizontal px-1">
                            <motion.li whileHover={{ scale: 1.1 }} className="hover:text-blue-500 text-[#1F2937] font-semibold">
                                <Link to="/">Home</Link>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} className="hover:text-blue-500 text-[#1F2937] font-semibold">
                                <Link to="/membership">Membership</Link>
                            </motion.li>
                        </ul>

                        {/* Notification and Hamburger Menu */}
                        <div className="flex items-center">
                            {/* Notification Icon */}
                            <motion.button
                                className="relative mr-4 text-gray-700 dark:text-white"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <FaBell className="h-6 w-6 text-[#1F2937] cursor-pointer hover:text-secondary" />
                                {notifications.length > 0 && (
                                    <span className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center">
                                        {notifications.length}
                                    </span>
                                )}
                            </motion.button>

                            {/* Hamburger Icon for Mobile/Tablet */}
                            <button
                                onClick={toggleMenu}
                                className="text-[#1F2937] md:hidden focus:outline-none"
                            >
                                {isOpen ? (
                                    <FaTimes className="h-6 w-6" />  // Close Icon when menu is open
                                ) : (
                                    <FaBars className="h-6 w-6" />   // Hamburger icon when menu is closed
                                )}
                            </button>
                        </div>

                        {user?.uid ? (
                            <motion.div
                                className="dropdown dropdown-end px-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="User avatar" src={user?.photoURL} />
                                    </div>
                                </div>
                                <motion.ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li onClick={handleLogOut}>
                                        <a>Logout</a>
                                    </li>
                                </motion.ul>
                            </motion.div>
                        ) : (
                            <Link to="/login" className="btn btn-ghost normal-case">
                                Join Us
                            </Link>
                        )}
                    </div>
                </div>

                {/* Collapsible Menu for Mobile/Tablet */}
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#F3F4F6] p-4 shadow-lg"
                    >
                        <ul className="space-y-4">
                            {user?.uid && (
                                <li className="flex items-center gap-2 hover:text-blue-500 text-[#1F2937] font-semibold">
                                    <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="User avatar" />
                                    <span>{user?.displayName}</span>
                                </li>
                            )}
                            <li className="hover:text-blue-500 text-[#1F2937] font-semibold">
                                <Link to="/" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className="hover:text-blue-500 text-[#1F2937] font-semibold">
                                <Link to="/membership" onClick={toggleMenu}>Membership</Link>
                            </li>
                            {user?.uid ? (
                                <>
                                    <li className="hover:text-blue-500 text-[#1F2937] font-semibold">
                                        <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
                                    </li>
                                    <li className="hover:text-blue-500 text-[#1F2937] font-semibold" onClick={handleLogOut}>
                                        Logout
                                    </li>
                                </>
                            ) : (
                                <li className="hover:text-blue-500 text-[#1F2937] font-semibold">
                                    <Link to="/login" onClick={toggleMenu}>Join Us</Link>
                                </li>
                            )}
                        </ul>
                    </motion.div>
                )}

            </motion.div>
        </div>
    );
};

export default Navbar;
