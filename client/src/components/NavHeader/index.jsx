import React, { useState } from "react";
import {
    Avatar,
    Badge,
    Menu,
    MenuItem,
    Divider,
    IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { GiPhone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function NavHeader() {
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const location = useLocation();
    const open = Boolean(anchorEl);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Admission", path: "/admission" },
        { name: "Student Corner", path: "/student" },
        { name: "Departments", path: "/departments" },
    ];

    const handleLogin = () => {
        setUser({
            name: "Harish Gurjar",
            email: "harish@gmail.com",
            avatar: "https://i.pravatar.cc/300",
        });
    };

    const handleLogout = () => {
        setUser(null);
        setAnchorEl(null);
    };

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            {/* 🔥 TOP CONTACT BAR */}
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white text-sm"
            >
                <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

                    {/* LEFT SIDE - CONTACT INFO */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">

                        {/* Phone */}
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-indigo-600 transition duration-300">
                                <GiPhone className="text-lg" />
                            </div>
                            <span className="group-hover:text-indigo-300 transition duration-300">
                                +91 9987654321
                            </span>
                        </div>

                        {/* Divider (Hidden on small screen) */}
                        <span className="hidden sm:block w-px h-4 bg-white/30"></span>

                        {/* Email */}
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-indigo-600 transition duration-300">
                                <HiOutlineMail className="text-lg" />
                            </div>
                            <span className="group-hover:text-indigo-300 transition duration-300">
                                college.mvp@gmail.com
                            </span>
                        </div>
                    </div>

                    {/* RIGHT SIDE - SOCIAL LINKS */}
                    <div className="flex items-center gap-3 mt-2 md:mt-0">

                        {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-indigo-600 transition duration-300 cursor-pointer"
                            >
                                <Icon className="text-sm" />
                            </motion.div>
                        ))}

                    </div>
                </div>
            </motion.div>


            {/* 🔥 STICKY NAVBAR */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* LOGO */}
                    <div>
                        <h1 className="text-xl font-bold text-indigo-600">
                            Collage MVP
                        </h1>
                        <p className="text-[10px] text-gray-500">
                            College of Technology & Management
                        </p>
                    </div>

                    {/* DESKTOP NAV */}
                    <ul className="hidden md:flex gap-8 font-medium text-gray-700">
                        {navLinks.map((item) => (
                            <li key={item.name} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`transition ${location.pathname === item.path
                                        ? "text-indigo-600"
                                        : "hover:text-indigo-600"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ${location.pathname === item.path
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-4">

                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon className="cursor-pointer hover:text-indigo-600 transition" />
                        </Badge>

                        {!user ? (
                            <div className="hidden md:flex gap-3">
                                <button
                                    onClick={handleLogin}
                                    className="px-4 py-1 text-sm border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
                                >
                                    Login
                                </button>
                                <button className="px-4 py-1 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                                    Register
                                </button>
                            </div>
                        ) : (
                            <>
                                <Avatar
                                    src={user.avatar}
                                    onClick={(e) => setAnchorEl(e.currentTarget)}
                                    className="cursor-pointer border-2 border-indigo-600"
                                />
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    <MenuItem disabled>{user.name}</MenuItem>
                                    <Divider />
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>Dashboard</MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleLogout} className="text-red-500">
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        )}

                        {/* 🍔 MOBILE MENU BUTTON */}
                        <div className="md:hidden flex items-center">
                            <IconButton onClick={toggleMobileMenu}>
                                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 px-6 pb-6 bg-white border-t">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className="py-2 border-b hover:text-indigo-600 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}