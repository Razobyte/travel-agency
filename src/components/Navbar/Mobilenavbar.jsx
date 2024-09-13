import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../../public/Imgae/Dts-logo.png";

export default function MobileMenu({ isOpen, onClose }) {
    const [openMenu, setOpenMenu] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuClick = (menuName) => (e) => {
        e.stopPropagation();
        setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
    };

    const services = [
        { text: "Rental", link: "/ourservices/rental" },
        { text: "Taxi", link: "/ourservices/taxi" },
        { text: "Tempo", link: "/ourservices/tempo" },
        { text: "Airport", link: "/ourservices/airport" },
    ];

    return (
        <div
            className={`fixed inset-0 z-50 bg-white w-1/2 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out sm:hidden`}
        >
            <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-t from-[#fffdfd] to-[#ffff] text-white">
                <img src={logo} alt="DTS" className="h-24 w-24 object-contain" />
                <button onClick={onClose} className="text-white border border-[#FF9307] rounded-md">
                    <FaTimes className="text-3xl text-[#FF9307]" />
                </button>
            </div>
            <ul className="flex flex-col space-y-3 py-5 px-4 overflow-y-auto bg-[#FF9307]">
                <li className="border-b border-white">
                    <Link
                        to="/"
                        className="text-white text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
                        onClick={onClose}
                    >
                        HOME
                    </Link>
                </li>
                <li className="border-b border-white">
                    <Link
                        to="/about-us"
                        className="text-white text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
                        onClick={onClose}
                    >
                        ABOUT US
                    </Link>
                </li>

                {/* OUR SERVICES Menu */}
                <li className="relative border-b border-white">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/ourservices"
                            className="text-white text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
                            onClick={handleMenuClick("services")}
                        >
                            OUR SERVICES
                        </Link>
                        <button
                            onClick={handleMenuClick("services")}
                            className="p-2"
                        >
                            {openMenu === "services" ? (
                                <FaChevronUp className='text-white transition-transform' size={10} />
                            ) : (
                                <FaChevronDown className='text-white transition-transform' size={10} />
                            )}
                        </button>
                    </div>
                    {openMenu === "services" && (
                        <div ref={menuRef} className="pl-2 mt-2 ">
                            {services.map((service) => (
                                <Link
                                    key={service.text}
                                    to={service.link}
                                    className="block text-base font-medium text-white  mb-2  active:underline " 
                                    onClick={onClose}
                                >
                                    {service.text}
                                </Link>
                            ))}
                        </div>
                    )}
                </li>
                <li className="border-b border-white">
                    <Link
                        to="/gallery"
                        className="text-white text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
                        onClick={onClose}
                    >
                        GALLERY
                    </Link>
                </li>
                <li className="border-b border-white">
                    <Link
                        to="/contact-us"
                        className="text-white text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
                        onClick={onClose}
                    >
                        CONTACT US
                    </Link>
                </li>
            </ul>
        </div>
    );
}
