import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import logo from '../../../public/Imgae/Dts-logo.png';
import callicon from '../../../public/Imgae/phone.png';
import mailicon from '../../../public/Imgae/mail.png';
import searchicon from '../../../public/Imgae/car.png';
import './Navbar.css';  // Import the CSS file
import { Link } from 'react-router-dom';
import CarActionButtons from './NavbarButton';
import wp from '../../../public/Imgae/whatsapp.png';

export default function Navbar() {
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

    const handleMouseEnter = (menuName) => {
        setOpenMenu(menuName);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const services = [
        { text: "Rental", link: "ourservices/rental" },
        { text: "Taxi", link: "ourservices/taxi" },
        { text: "Tempo", link: "ourservices/tempo" },
        { text: "Airport", link: "ourservices/airport" },

    ];

    return (
        <nav className="flex flex-col w-full sticky top-0 bg-white z-50 shadow">
            <div className="flex justify-between items-center bg-white px-4 py-2 gap-12">
                <div className="flex-1 flex justify-evenly items-center">
                    <a href="/" className="block">
                        <img src={logo} alt="DTS" className="max-w-full h-auto" />
                    </a>
                </div>
                <div className="flex-[2] flex items-center justify-center space-x-4">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-200 rounded py-2 px-6 focus:outline-none focus:ring-1 focus:ring-[#FF9307] w-[300px]"
                        />
                        <button className="absolute right-2">
                            <img src={searchicon} alt="Search" className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center  justify-center xl:pace-x-12 xxl:space-x-4 lg:space-x-10 md:space-x-8 space-x-5">
                        <a href="tel:9310488108,9315535846" className="flex items-center gap-2 text-[#25D366] font-medium">
                            <img src={callicon} alt="phone-icon" className="h-7" />
                            <span className="text-[#201F1D] text-xl font-medium">
                                9310488108/9315535846
                            </span>
                        </a>
                        <a href="mailto:support@dtstaxi.com" className="flex items-center text-[#3E3E3E] font-medium gap-2">
                            <img src={mailicon} alt="mail-icon" className="h-7" />
                            <span className="text-[#201F1D]  text-xl font-medium">
                                support@dtstaxi.com
                            </span>
                        </a>
                        <a href="https://wa.me/9310488108" target='_blank' rel="noopener noreferrer">
                            <img src={wp} alt="whatsapp" className='h-8' />
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-evenly">
                    <CarActionButtons buttonName="Book Ride" />
                </div>
            </div>
            <div className="bg-[#FF9307] py-4">
                <ul className="flex items-center justify-center space-x-16">
                    <li><a href="/" className="text-[#252525] hover:text-white text-[22px] font-medium transition duration-300 menu-item-underline active:text-white">HOME</a></li>
                    <li><a href="/#about-us" className="text-[#252525] hover:text-white text-[22px] font-medium transition duration-300 menu-item-underline">ABOUT US</a></li>
                    <li
                        className="relative mega-menu"
                        onMouseEnter={() => handleMouseEnter('services')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#/ourservices" className="text-[#252525] hover:text-white text-[22px] font-medium transition duration-300 menu-item-underline">
                            OUR SERVICES
                            <FaChevronDown className="inline ml-2" />
                        </a>
                        {openMenu === 'services' && (
                            <div ref={menuRef} className="mega-menu-content">
                                <ul>
                                    {services.map((service) => (
                                        <li key={service.text} className="mega-menu-item">
                                            <Link to={service.link}
                                                className="block px-4 py-2 text-[#252525] hover:bg-gray-100 transition duration-300"
                                            >
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                    <li><a href="#/gallery" className="text-[#252525] hover:text-white text-[22px] font-medium transition duration-300 menu-item-underline">GALLERY</a></li>
                    <li><a href="#/contact-us" className="text-[#252525] hover:text-white text-[22px] font-medium transition duration-300 menu-item-underline">CONTACT US</a></li>
                </ul>
            </div>
        </nav>

    );
}