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

    const links =
        [
            {
                name: "HOME", links: "/"
            },
            {
                name: "  Gallery", links: "/gallery"
            },
            {
                name: "OUR SERVICES", links: "/ourservices"
            },

            {
                name: "ABOUT US", links: "/about-us"
            },

            {
                name: "CONTACT US", links: "/contact-us"
            },

            {
                name: "PRIVACY POLICY", links: "/privacy-policy"
            },

            {
                name: "TERMS AND CONDITION", links: "/terms-and-condition"
            },



        ]
    const services = [
        {
            name: "Outstation Trips", links: "/"
        },
        {
            name: "DTS Taxi ", links: "/ourservices/taxi"
        },
        {
            name: "DTS Rental Rides", links: "/ourservices/rental"
        },
        {
            name: 'DTS Tempo Rides', links: "/ourservices/tempo/"
        },
        {
            name: "DTS Airport Rides", links: '/ourservices/airport'

        },
        {
            name: "NCR", links: '/'

        },
        {
            name: "Best Deals On Tour Packages", links: "/"
        },
    ]
    return (
        <>
            <div className="w-screen flex justify-center items-center bg-[#FF9307] mt-20">
                <div className="max-w-6xl flex justify-between items-center w-full py-6">
                    <div className='flex items-center space-x-3 justify-center'>
                        <img src={query} alt="query" className='max-w-full mt-2' />
                        <h1 className='xxl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-sm text-[#252525] font-extrabold'>Have a Query?</h1>
                    </div>
                    <div className='flex items-center justify-center xxl:space-x-3 xl:space-x-2 space-x-1'>
                        <a href="tel:+9310488108" target="_blank" rel="noopener noreferrer" className='flex items-center  space-x-3'>
                            <img src={phone} alt="phone" className='max-w-full mt-2 xxl:h-10 xl:h-7 lg:h-6 md:h-5 h-4 ' />
                            <h6 className='xxl:text-4xl xl:text-2xl lg:text-xl md:text-2xl text-xl  text-[#353535] font-bold m-0 p-0'>
                                <span> 9315535846</span>/
                                9310488108
                            </h6></a>
                    </div>
                </div>
            </div>
            <div className='bg-[#201F1D] w-screen flex justify-center items-center'>
                <div className='max-w-6xl w-full'>
                    <div className='flex justify-between py-10'>
                        <div className='w-1/3'>
                            <h1 className='text-3xl font-semibold text-white pb-5'>About DTS</h1>
                            <p className='text-md font-normal text-white'>
                                Welcome to DTS where your journey is our priority.
                                Established with a commitment to providing reliable, safe,
                                and comfortable transportation solutions, DTS has grown to
                                become a trusted name in the industry. Our mission is to
                                redefine your travel experience with exceptional
                                service and unwavering dedication to customer satisfaction.
                            </p>
                        </div>
                        <div >
                            <h1 className='text-3xl font-semibold text-white pb-5'>Payment Methods</h1>
                            <div className='flex gap-5'>
                                <img src={upi} alt="UPI" className='max-w-full' />
                                <img src={hand} alt="Hand" className='max-w-full' />
                                <img src={cash} alt="Cash" className='max-w-full' />
                            </div>
                        </div>
                        <div >
                            <h1 className='text-3xl font-semibold text-white pb-5'>Social Networks</h1>
                            <div className='flex gap-5'>
                                <a href="https://www.facebook.com/share/XkKe7o62iqVRS5CY/?mibextid=LQQJ4d" target='_blank'><img src={fb} alt="Facebook" className='max-w-full' />
                                </a>
                                <a href="https://www.instagram.com/dashmeshtravelservices/?igsh=MTNsNGxsb3U1a3FydA%3D%3D" target='_blank'>
                                    <img src={instra} alt="Instagram" className='max-w-full' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#201F1D] w-screen flex justify-center items-center py-10'>
                <div className='max-w-6xl w-full'>
                    <div className='flex justify-start '>
                        <div>
                            <h1 className='text-3xl font-semibold text-white pb-3'>OUR LINKS</h1>
                            {links.map((links,id) => (
                                <ul key={id} className='text-white flex my-3'>
                                    <Link to={links.links}>
                                        <li className='flex items-center gap-3'>

                                            <img src={image} alt="arriw" className='max-w-full h-6' />
                                            {links.name}
                                        </li></Link>
                                </ul>
                            ))}
                        </div>
                        <div className='ps-40'>
                            <h1 className='text-3xl font-semibold text-white pb-3'>OUR SERVICES</h1>
                            {services.map((links,index) => (
                                <ul key={index} className='text-white flex my-3'>
                                    <Link to={links.links}>
                                        <li className='flex items-center gap-3'>
                                            <img src={image} alt="arriw" className='max-w-full h-6' />
                                            {links.name}
                                        </li></Link>
                                </ul>
                            ))}
                        </div>

                    </div>

                </div>


            </div>
            <div className="w-screen bg-[#201F1D] flex justify-start items-center pb-3">
                <div className="max-w-6xl flex justify-evenly items-center pt-3 w-full px-4">
                    <p className="text-white">Copyright 2024 | DTS</p>
                    <h6 className="text-white">
                        web services by - <a href="https://razobyte.com" target='_blank' className='text-decoration-none'>razobyte.com</a>
                    </h6>
                </div>
            </div>




        </>
    )
}