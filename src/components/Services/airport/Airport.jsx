import banner from '../../../../public/Imgae/airportbanner.png';
import icon from '../../../../public/Imgae/airport-icon3.png';
import icon1 from '../../../../public/Imgae/airport-icon2.png';
import icon2 from '../../../../public/Imgae/airport-icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import airsec from '../../../../public/Imgae/airsec (3).png';
import airsec1 from '../../../../public/Imgae/airsec (2).png';
import airsec2 from '../../../../public/Imgae/airsec (1).png';
import 'swiper/css';
import PremiumTempoExperience from '../../Home/Tempo';
import ambulance from '../../../../public/Imgae/ambulance.png';
import PremiumRentalExperience from '../../Home/Rental';
import How from '../../Home/How';
import FaqSection from '../../Home/Faq';
import Testimonials from '../../Home/Testominials';
import { useNavigate } from 'react-router-dom';

export default function Airport() {
    const navigate = useNavigate();
    const slides = [
        {
            icon: icon,
            title: "Flight tracking",
            description: "Your driver tracks your flight and waits for you if it's delayed"
        },
        {
            icon: icon1,
            title: "One clear price",
            description: "Your price is confirmed upfront – no extra costs, no cash required"
        },
        {
            icon: icon2,
            title: "Tried and trusted",
            description: "We work with professional drivers and have 24/7 customer care"
        }
    ];
    


    return (
        <>
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full object-cover' />
            </div>

            <div className='flex  flex-col justify-center items-center w-screen bg-[#E4E4E4] py-8 px-4'>
                <div className='w-full'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex sm:flex-col flex-row items-center '>
                                    <div className='bg-[#FF9307]  sm:flex hidden p-4 rounded-full mb-4'>
                                        <img src={slide.icon} alt={slide.title} className='w-12 h-12 ' />
                                    </div>
                                    <div className='text-center'>
                                        <h2 className='text-[#303030] font-bold text-xl mb-2'>{slide.title}</h2>
                                        <p className='text-[#303030] text-sm'>{slide.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='flex flex-col items-center w-screen py-12 px-4'>
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Airport transfers made easy</h1>
                <div className='max-w-6xl w-full flex flex-col md:flex-row justify-evenly items-center gap-8'>
                    <div className='p-4 rounded-lg shadow-md border-t border-gray-100 flex flex-col items-center'>
                        <img src={airsec2} alt="Booking Your Airport Taxi" className='max-w-full h-auto' />
                        <h4 className='text-lg font-bold text-[#FF9307] text-center my-2'>Booking your airport taxi</h4>
                        <p className='text-sm font-medium text-[#353535] text-center'>Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time</p>
                    </div>
                    <div className='p-4 rounded-lg shadow-md border-t border-gray-100 flex flex-col items-center'>
                        <img src={airsec1} alt="Meeting Your Driver" className='max-w-full h-auto' />
                        <h4 className='text-lg font-bold text-[#FF9307] text-center my-2'>Meeting your driver</h4>
                        <p className='text-sm font-medium text-[#353535] text-center'>You'll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait for you even if it's delayed</p>
                    </div>
                    <div className='p-4 rounded-lg shadow-md border-t border-gray-100 flex flex-col items-center'>
                        <img src={airsec} alt="Arriving at Your Destination" className='max-w-full h-auto' />
                        <h4 className='text-lg font-bold text-[#FF9307] text-center my-2'>Arriving at your destination</h4>
                        <p className='text-sm font-medium text-[#353535] text-center'>Get to your destination quickly and safely – no waiting in line for a taxi, no figuring out public transport</p>
                    </div>
                </div>
            </div>

            <PremiumTempoExperience />

            <div className="w-screen flex flex-col items-center bg-gray-200 py-12 px-4">
                <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex flex-col items-center">
                        <img src={ambulance} alt="Reliable DTS Tempo Travelers" className="w-full max-w-xs md:max-w-md" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-[#303030] text-2xl md:text-4xl font-extrabold">Discover Reliable DTS Tempo Travellers</h1>
                        <p className="text-[#303030] text-sm md:text-lg my-3 font-medium">Access our tempo any time, day or night</p>
                        <h6 className="text-[#252525] font-semibold text-lg mb-3">Tempo</h6>
                        <button className="font-bold text-lg md:text-xl bg-[#FF9307] text-white rounded hover:bg-orange-500 transition duration-300 px-6 py-3" onClick={() => navigate('/ourservices/tempo')}>
                            Know More
                        </button>
                    </div>
                </div>
            </div>

            <PremiumRentalExperience />
            <How />
            <FaqSection />
            <Testimonials />
        </>
    );
}
