import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../public/Imgae/Dts-logo.png';
import callicon from '../../../public/Imgae/phone.png';
import mailicon from '../../../public/Imgae/mail.png';
import searchicon from '../../../public/Imgae/car.png';
import './Navbar.css';
import CarActionButtons from './NavbarButton';
import { RiMenu2Line } from 'react-icons/ri';
import MobileMenu from './Mobilenavbar';
import wp from '../../../public/Imgae/whatsapp.png';
import Services from '../About/services';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState('')
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

    const handleMouseEnter = (menuName) => {
        setOpenMenu(menuName);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const services = [
        { text: "Rental", link: "/ourservices/rental" },
        { text: "Taxi", link: "/ourservices/taxi" },
        { text: "Tempo", link: "/ourservices/tempo" },
        { text: "Airport", link: "/ourservices/airport" },
    ];



    const handleSearchQuery = (e) => {
        setSearch(e.target.value)
    }
    const filteredservices =
        services.filter(services => services.text.toLowerCase().includes(search.toLowerCase()));






    return (
        <nav className="flex flex-col w-full sticky top-0 bg-white z-50 shadow justify-center   ">
            <div className="bg-white py-2 px-2 sm:px-6 lg:px-20 flex  items-center md:justify-between justify-evenly gap-2">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="block">
                        <img
                            src={logo}
                            alt="DTS"
                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-full lg:h-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="flex flex-col text-xs sm:hidden">
                    <a href="tel:9310488108,9315535846" className="flex items-center gap-1 text-[#25D366] font-medium">
                        <img src={callicon} alt="phone-icon" className="w-3 h-3" />
                        <span className="text-[#201F1D]">9310488108</span>
                    </a>
                    <a href="mailto:support@dtstaxi.com" className="flex items-center gap-1 text-[#3E3E3E] font-medium">
                        <img src={mailicon} alt="mail-icon" className="w-3 h-3" />
                        <span className="text-[#201F1D]">support@dtstaxi.com</span>
                    </a>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex  justify-center items-center">
                    {/* Search Bar */}
                    <div className="relative w-[300px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-200 rounded py-2 px-4 focus:outline-none focus:ring-1 focus:ring-[#FF9307]"
                            value={search}
                            onChange={handleSearchQuery}
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <img src={searchicon} alt="Search" className="w-5 h-5" />
                        </button>
                        {search && filteredservices.length > 0 && (
                            <ul className="absolute top-full left-0 mt-2 w-full border border-gray-300 bg-white shadow-lg z-10">
                                {filteredservices.map(service => (
                                    <li key={service.text} className="px-4 py-2">
                                        <a href={service.link} className="text-blue-500 hover:underline">{service.text}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Desktop Contact Info */}
                    <div className="sm:flex hidden items-center space-x-4 sm:ml-8">
                        <a href="tel:9310488108,9315535846" className="flex items-center gap-2 text-[#25D366] font-medium">
                            <img src={callicon} alt="phone-icon" className="w-6 h-6" />
                            <span className="text-[#201F1D] text-xl">9310488108/9315535846</span>
                        </a>
                        <a href="mailto:support@dtstaxi.com" className="flex items-center gap-2 text-[#3E3E3E] font-medium">
                            <img src={mailicon} alt="mail-icon" className="w-6 h-6" />
                            <span className="text-[#201F1D] text-xl">support@dtstaxi.com</span>
                        </a>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center">
                    <CarActionButtons buttonName="Book Ride" />
                    <button className="sm:hidden text-[#2A3986]" onClick={toggleMobileMenu}>
                        <RiMenu2Line className="text-lg ml-2" />
                    </button>
                </div>

                {/* Mobile Search Bar */}
                {/* <div className="w-full sm:hidden flex items-center mt-2">
                    <div className="relative w-full max-w-[calc(100%)]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-200 rounded py-1 px-2 focus:outline-none focus:ring-1 focus:ring-[#FF9307]"
                            value={search}
                            onChange={handleSearchQuery}
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <img src={searchicon} alt="Search" className="w-5 h-5 object-contain" />
                        </button>
                    </div>
                </div> */}
            </div>


            <div className="bg-[#FF9307] py-4  hidden sm:block">
                <ul className="flex items-center justify-center lg:space-x-16">
                    <li>
                        <Link to="/" className="text-[#252525] hover:text-white text-2xl font-medium transition duration-300 menu-item-underline active:text-white">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="text-[#252525] hover:text-white  text-2xl font-medium transition duration-300 menu-item-underline">
                            ABOUT US
                        </Link>
                    </li>
                    <li
                        className="relative mega-menu"
                        onMouseEnter={() => handleMouseEnter('services')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/ourservices" className="text-[#252525] hover:text-white  text-2xl font-medium transition duration-300 menu-item-underline">
                            OUR SERVICES
                            <FaChevronDown className="inline ml-2" />
                        </Link>
                        {openMenu === 'services' && (
                            <div ref={menuRef} className="mega-menu-content">
                                <ul>
                                    {services.map((service) => (
                                        <li key={service.text} className="mega-menu-item text-lg">
                                            <Link to={service.link}
                                                className="block px-4 py-2 text-[#252525] hover:bg-gray-100 
                                                transition duration-300"
                                            >
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to="/gallery" className="text-[#252525] hover:text-white  text-2xl font-medium transition duration-300 menu-item-underline">
                            GALLERY
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="text-[#252525] hover:text-white text-2xl font-medium transition duration-300 menu-item-underline">
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </nav>
    );
}
