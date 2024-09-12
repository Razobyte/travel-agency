import React from 'react';
import query from '../../../public/Imgae/quer.png';
import phone from '../../../public/Imgae/footercall.png';
import upi from '../../../public/Imgae/upi.png';
import cash from '../../../public/Imgae/cash.png';
import hand from '../../../public/Imgae/hand.png';
import instra from '../../../public/Imgae/instagram.png';
import fb from '../../../public/Imgae/facebook.png';
import image from '../../../public/Imgae/arrow.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    const links = [
        { name: "HOME", links: "/" },
        { name: "GALLERY", links: "/gallery" },
        { name: "OUR SERVICES", links: "/ourservices" },
        { name: "ABOUT US", links: "/about-us" },
        { name: "CONTACT US", links: "/contact-us" },
        { name: "PRIVACY POLICY", links: "/" },
        { name: "TERMS AND CONDITION", links: "/" }
    ];

    const services = [
        { name: "Outstation Trips", links: "/" },
        { name: "DTS Taxi", links: "/ourservices/taxi" },
        { name: "DTS Rental Rides", links: "/ourservices/rental" },
        { name: "DTS Tempo Rides", links: "/ourservices/tempo/" },
        { name: "DTS Airport Rides", links: '/ourservices/airport' },
        { name: "NCR", links: '/' },
        { name: "Best Deals On Tour Packages", links: "/" }
    ];

    return (
        <>
            <div className="w-full flex justify-center items-center bg-[#FF9307] mt-10 sm:mt-20">
                <div className="max-w-6xl flex flex-col sm:flex-row justify-between items-center w-full py-4 sm:py-6 px-4">
                    <div className='flex items-center space-x-3 mb-4 sm:mb-0'>
                        <img src={query} alt="query" className='w-8 sm:w-auto' />
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#252525] font-extrabold'>Have a Query?</h1>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <a href="tel:+9310488108" className='flex items-center space-x-3'>
                            <img src={phone} alt="phone" className='h-4 sm:h-6 lg:h-8 xl:h-10' />
                            <h6 className='text-lg sm:text-xl lg:text-2xl xl:text-4xl text-[#353535] font-bold'>
                                <span>9315535846</span> / 9310488108
                            </h6>
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-[#201F1D] w-full flex justify-center items-center'>
                <div className='max-w-6xl w-full px-4'>
                    <div className='flex flex-col lg:flex-row justify-between py-3 lg:py-10 space-y-8 lg:space-y-0 lg:space-x-8'>
                        <div className='lg:w-1/4'>
                            <h1 className='text-xl sm:text-3xl sm:font-semibold font-normal text-white sm:pb-3 pb-1'>About DTS</h1>
                            <p className='text-sm sm:text-md font-normal text-white'>
                                Welcome to DTS where your journey is our priority. Established with a commitment to providing reliable, safe, and comfortable transportation solutions, DTS has grown to become a trusted name in the industry. Our mission is to redefine your travel experience with exceptional service and unwavering dedication to customer satisfaction.
                            </p>
                        </div>
                        <div className='flex flex-wrap justify-between w-full lg:w-3/4'>
                            <div className='w-1/2 sm:w-1/3 mb-6 sm:mb-0'>
                                <h1 className='text-xl sm:text-3xl sm:font-semibold font-normal text-white sm:pb-3 pb-1'>Our Links</h1>
                                {links.map((link, id) => (
                                    <ul key={id} className='text-white mb-2'>
                                        <li className='flex items-center'>
                                            <Link to={link.links} className='flex items-center text-white hover:underline text-sm sm:text-base'>
                                                <img src={image} alt="arrow" className='h-4 sm:h-6 pe-2' />
                                                {link.name}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>

                            <div className='w-1/2 sm:w-1/3 mb-2 sm:mb-0'>
                                <h1  className='text-xl sm:text-3xl sm:font-semibold font-normal text-white sm:pb-3 pb-1'>Our Services</h1>
                                {services.map((service, index) => (
                                    <ul key={index} className='text-white mb-2'>
                                        <li className='flex items-center'>
                                            <Link to={service.links} className='flex items-center text-white hover:underline text-sm sm:text-base'>
                                                <img src={image} alt="arrow" className='h-4 sm:h-6 pe-2' />
                                                {service.name}
                                            </Link>
                                        </li>
                                    </ul>
                                ))}
                            </div>

                            <div className='w-full sm:w-1/3'>
                                <h1 className='text-xl sm:text-3xl sm:font-semibold font-normal text-white sm:pb-3 pb-1'>Payment Methods</h1>
                                <div className='flex gap-5 mb-5'>
                                    <img src={upi} alt="UPI" className='h-8 sm:h-10' />
                                    <img src={hand} alt="Hand" className='h-8 sm:h-10' />
                                    <img src={cash} alt="Cash" className='h-8 sm:h-10' />
                                </div>
                                <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-white pb-2'>Social Networks</h1>
                                <div className='flex gap-5'>
                                    <a href="https://www.facebook.com/share/XkKe7o62iqVRS5CY/?mibextid=LQQJ4d" target='_blank' rel='noopener noreferrer'>
                                        <img src={fb} alt="Facebook" className='h-8 sm:h-10' />
                                    </a>
                                    <a href="https://www.instagram.com/dashmeshtravelservices/?igsh=MTNsNGxsb3U1a3FydA%3D%3D" target='_blank' rel='noopener noreferrer'>
                                        <img src={instra} alt="Instagram" className='h-8 sm:h-10' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#201F1D] flex justify-center items-center sm:py-3 py-0">
                <div className="max-w-6xl flex flex-col sm:flex-row justify-between w-full px-4 space-y-2 sm:space-y-0">
                    <p className="text-white text-xs sm:text-sm">Copyright © 2024 DTS</p>
                    <h6 className="text-white text-xs sm:text-sm">
                        Web services by <a href="https://razobyte.com" target='_blank' rel='noopener noreferrer' className='text-[#FF9307]'>razobyte.com</a>
                    </h6>
                </div>
            </div>
        </>
    );
}