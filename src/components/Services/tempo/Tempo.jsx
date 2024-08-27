import { useState } from 'react';
import banner from '../../../../public/Imgae/tempo-banner.png'
import img from '../../../../public/Imgae/tempo.png'
import img2 from '../../../../public/Imgae/tempo (3).png'
import img3 from '../../../../public/Imgae/tempo (2).png'
import img4 from '../../../../public/Imgae/tempo (1).png'
import How from '../../Home/How';
import Testimonials from '../../Home/Testominials';
import { FaStar } from 'react-icons/fa6';
import { SwiperSlide } from 'swiper/react';
import img5 from '../../../../public/Imgae/swift2.png'
import img6 from '../../../../public/Imgae/ergita2.png'
import img7 from '../../../../public/Imgae/innova2.png'
import CarActionButtons from '../../Navbar/NavbarButton';
import { useNavigate } from 'react-router-dom';





export default function Tempo() {
    const navigate=useNavigate()

    return (
        <>
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <div className="w-screen flex justify-center items-center py-12 bg-white">
                <div className="max-w-6xl flex flex-col items-center ">
                    <div className=" w-full flex justify-evenly items-start ">
                        <div className="w-full flex justify-center items-center">
                            <img
                                src={img}
                                alt="Tempo"
                                className='max-w-full h-auto'
                            />
                        </div>
                        <div className="w-full flex flex-col items-start space-y-4  text-white ps-10 ">
                            <h2 className="text-2xl font-bold  rounded px-2 text-[#575757]">Tempo</h2>
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar className='text-yellow-700' />
                                ))}
                            </div>
                            <span className="text-lg font-semibold bg-gray-200 rounded px-2 text-[#575757]">24 Person</span>
                            <span className="text-lg font-semibold bg-gray-200 rounded px-2 text-[#575757]">Price in Plains - Rs26/km</span>
                            <span className="text-lg font-semibold bg-gray-200 rounded px-2 text-[#575757]">Price in Mountains - Rs28/km</span>
                            <span className="text-lg font-semibold bg-gray-200 rounded px-2 text-[#575757]">T&C Apply</span>
                            <CarActionButtons buttonName="Request to Book"/>
                            <div className='mb-4'></div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start w-full mt-4 space-x-4">
                        <img
                            src={img2}
                            alt="Interior View 1"
                            className='max-w-full rounded-lg shadow-lg'
                        />
                        <img
                            src={img3}
                            alt="Interior View 2"
                            className='max-w-full rounded-lg shadow-lg'
                        />
                        <img
                            src={img4}
                            alt="Interior View 3"
                            className='max-w-full rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center pb-12 bg-white flex-col">
                <h1 className="text-4xl font-bold text-center mb-12">You Might be Interested in our taxi services</h1>
                <div className="max-w-6xl flex  items-center gap-2" >
                    <div className="bg-white rounded-b shadow-md border border-gray-200">
                        <img src={img6} alt="car-swift" className="max-w-full  object-cover mb-4" />
                        <h3 className="text-lg font-semibold mb-4 text-center text-[#252525]">Ertiga</h3>
                        <div className='flex justify-center items-center pb-5'>
                            <button className=" text-lg font-bold bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl px-4 py-2" onClick={()=>navigate('/ourservices/taxi')}>
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-b shadow-md border border-gray-200">
                        <img src={img7} alt="car-swift" className="max-w-full  object-cover mb-4" />
                        <h3 className="text-lg font-semibold mb-4 text-center text-[#252525]">Innova</h3>
                        <div className='flex justify-center items-center pb-5'>
                            <button className=" text-lg font-bold bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl px-4 py-2"
                            onClick={()=>navigate('/ourservices/taxi')}>
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-b shadow-md border border-gray-200">
                        <img src={img5} alt="car-swift" className="max-w-full  object-cover mb-4" />
                        <h3 className="text-lg font-semibold mb-4 text-center text-[#252525]">Swift Desire</h3>
                        <div className='flex justify-center items-center pb-5'>
                            <button className=" text-lg font-bold bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl px-4 py-2"
                                            onClick={()=>navigate('/ourservices/taxi')}>
            
                                Know More
                            </button>
                        </div>
                    </div>
                </div>

            </div>




            <div className='mb-12'>
                <How />

            </div>
            <Testimonials />


        </>
    );
}
