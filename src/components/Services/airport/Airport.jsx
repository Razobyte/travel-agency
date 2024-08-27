
import banner from '../../../../public/Imgae/airportbanner.png'
import icon from '../../../../public/Imgae/airport-icon3.png'
import icon1 from '../../../../public/Imgae/airport-icon2.png'
import icon2 from '../../../../public/Imgae/airport-icon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import airsec from '../../../../public/Imgae/airsec (3).png'
import airsec1 from '../../../../public/Imgae/airsec (2).png'
import airsec2 from '../../../../public/Imgae/airsec (1).png'
import 'swiper/css';
import PremiumTempoExperience from '../../Home/Tempo';
import ambulance from '../../../../public/Imgae/ambulance.png'
import PremiumRentalExperience from '../../Home/Rental';
import How from '../../Home/How';
import FaqSection from '../../Home/Faq';
import Testimonials from '../../Home/Testominials';
import { useNavigate } from 'react-router-dom';

export default function Airport() {
    const navigate=useNavigate()
    return (
        <>
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <div className='flex justify-center items-center w-screen bg-[#E4E4E4] py-12'>
                <div className='max-w-6xl flex justify-evenly items-center gap-8'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}

                    >
                        <SwiperSlide>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#FF9307] p-6 rounded-full'>
                                    <img src={icon} alt="icon-name" className='max-w-full h-14 w-24' />
                                </div>
                                <div>
                                    <h1 className='text-[#303030] font-[700] text-2xl'>Flight tracking</h1>
                                    <p className='text-[#303030] font-medium text-sm'>Your driver tracks your flight and
                                        waits for you if it's delayed</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#FF9307] p-6 rounded-full'>
                                    <img src={icon1} alt="icon-name" className='max-w-full  h-14 w-24  ' />
                                </div>
                                <div>
                                    <h1 className='text-[#303030] font-[700] text-2xl'>One clear price</h1>
                                    <p className='text-[#303030] font-medium text-sm'>Your price is confirmed upfront –
                                        no extra costs, no cash required</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#FF9307] p-6 rounded-full'>
                                    <img src={icon2} alt="icon-name" className='max-w-full h-14 w-24' />
                                </div>
                                <div>
                                    <h1 className='text-[#303030] font-[700] text-2xl'>Tried and trusted</h1>
                                    <p className='text-[#303030] font-medium text-sm'>We work with professional
                                        drivers and have 24/7 customer care</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#FF9307] p-6 rounded-full'>
                                    <img src={icon1} alt="icon-name" className='max-w-full h-14 w-24' />
                                </div>
                                <div>
                                    <h1 className='text-[#303030] font-[700] text-2xl'>Flight tracking</h1>
                                    <p className='text-[#303030] font-medium text-sm'>Your driver tracks your flight and
                                        waits for you if it's delayed</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>




            </div>
            <div className='flex justify-center items-center w-screen  py-12 flex-col'>
                <h1 className="text-4xl font-bold text-center mb-12">Airport transfers made easy</h1>

                <div className='max-w-6xl flex justify-evenly items-center gap-8'>
                    <div className='p-4  rounded-lg shadow-md border-t border-gray-100 flex items-center flex-col'>
                        <img src={airsec2} alt="airsec" className='max-w-full' />
                        <h4 className='text-lg font-bold text-[#FF9307] text-center my-2'>Booking your airport taxi</h4>
                        <p className='text-sm font-medium text-[#353535] text-center pb-2'>Confirmation is immediate. If your plans
                            change, you can cancel for free up to 24 hours
                            before your scheduled pick-up time</p>
                    </div>
                    <div className='p-4  rounded-lg shadow-md border-t border-gray-100 flex items-center flex-col'>
                        <img src={airsec1} alt="airsec" className='max-w-full' />
                        <h4 className='text-lg font-bold text-[#FF9307] text-center my-2'>Meeting your driver</h4>
                        <p className='text-sm font-medium text-[#353535] text-center pb-2'>
                        You'll be met on arrival and taken to your
                        vehicle. Your driver will track your flight,
                        so they'll wait for you even if it's delayed
                        </p>
                       
                    </div>
                    <div className='p-4  rounded-lg shadow-md   border-t border-gray-100 flex items-center flex-col'>
                        <img src={airsec} alt="airsec" className='max-w-full' />
                        <h4 className='text-lg font-bold text-[#FF9307] text-center my-2'>Arriving at your destination</h4>
                        <p className='text-sm font-medium text-[#353535] text-center pb-2'>Get to your destination quickly and safely –
                            no waiting in line for a taxi, no figuring out
                            public transport</p>
                    </div>
                </div>
            </div>
            <PremiumTempoExperience/>
            <div className="w-screen flex flex-col justify-center items-center  bg-gray-200">
            <div className="max-w-6xl flex gap-40 ">
               <div className="flex items-center">
                  <img src={ambulance} alt="ambulance" className="max-w-full h-full" />
               </div>
               <div className="pt-8">
                  <h1 className="text-[#303030] text-4xl font-extrabold">Discover Reliable
                     DTS Tempo travellers</h1>
                  <p className="text-[#303030] text-lg my-3 font-medium">Access our tempo any time, day or night</p>
                  <h6 className="text-[#252525] font-semibold text-lg mb-3">Tempo</h6>
                  <div className="pt-6">
                  <button className="font-bold text-xl bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl px-4 py-2 mb-12 "
                     onClick={()=>navigate('/ourservices/tempo')}>Know More</button>
                  </div>
               </div>

            </div>

         </div>
         <PremiumRentalExperience/>
         <How/>
         <FaqSection/>
         <Testimonials/>
        </>
    )
}
