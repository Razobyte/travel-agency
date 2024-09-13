import Banner from "../Banner";
import banner from '../../../public/Imgae/home-banner.png'
import FormComponent from "../Formunderbanner";
import gurgaon from '../../../public/Imgae/gurgaon.png';
import delhi from '../../../public/Imgae/delhi.png';
import noida from '../../../public/Imgae/noid.png';
import intercity from '../../../public/Imgae/intercity.png';
import outstaion from '../../../public/Imgae/outstation.png';
import airport from '../../../public/Imgae/airport.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import LocalTour from "./locatour";
import Explore from "./Explore";
import CabServices from "./Cabs";
import TabMenu from "./Tabs";
import PremiumTempoExperience from "./Tempo";
import ambulance from '../../../public/Imgae/ambulance.png'
import PremiumRentalExperience from "./Rental";
import BookCab from "./bookacab";
import about from '../../../public/Imgae/about.png'
import Delivers from "./delivers";
import How from "./How";
import FaqSection from "./Faq";
import Testimonials from "./Testominials";
import { useNavigate } from "react-router-dom";




export default function Home() {
   const navigate = useNavigate()
   return (
      <>
         <Banner imagebannerall={banner} />
         {/* <FormComponent /> */}
         <TabMenu />

         <div className="w-full flex flex-col justify-center items-center py-3 sm:py-4 md:py-5 bg-[#A3BEFF] bg-opacity-[25%] 
         mb-6 sm:mb-8 md:mb-12 mt-3 sm:mt-4 md:mt-5">
            <div className="w-full max-w-6xl px-4 sm:px-0 sm:py-4 py-0">
               <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  loop={true}
                  modules={[Autoplay]}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: false
                  }}
                  breakpoints={{
                     320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                     },
                     640: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                     },
                     768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                     },
                     1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                     },
                  }}
                  className="w-full"
               >
                  <SwiperSlide>
                     <div className="flex flex-col justify-center items-center text-center">
                        <img src={outstaion} alt="outstaion" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                        <h5 className="text-center text-[#303030] text-sm sm:text-base md:text-lg lg:text-2xl font-semibold pt-2">OutStation</h5>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="flex flex-col justify-center items-center text-center">
                        <img src={intercity} alt="intercity" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                        <h5 className="text-center text-[#303030] text-sm sm:text-base md:text-lg lg:text-2xl font-semibold pt-2">InterCity</h5>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="flex flex-col justify-center items-center text-center">
                        <img src={airport} alt="airport" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                        <h5 className="text-center text-[#303030] text-sm sm:text-base md:text-lg  lg:text-2xl font-semibold pt-2">Airport</h5>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="flex flex-col justify-center items-center text-center">
                        <img src={noida} alt="noida" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                        <h5 className="text-center text-[#303030] text-sm sm:text-base md:text-lg lg:text-2xl font-semibold pt-2">Noida</h5>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="flex flex-col justify-center items-center text-center">
                        <img src={delhi} alt="delhi" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                        <h5 className="text-center text-[#303030] text-sm sm:text-base md:text-lg lg:text-2xl font-semibold pt-2">Delhi</h5>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="flex flex-col justify-center items-center text-center">
                        <img src={gurgaon} alt="gurgaon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" />
                        <h5 className="text-center text-[#303030] text-sm sm:text-base md:text-lg lg:text-2xl font-semibold pt-2">Gurgaon</h5>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
         <LocalTour />
         <Explore />
         <CabServices />
         <PremiumTempoExperience />
         <div className="w-screen flex flex-col justify-center items-center  bg-gray-200 sm:py-2 py-4">
            <div className="max-w-6xl flex md:flex-row flex-col sm:gap-40 gap-0 md:px-0 px-4 ">
               <div className="flex items-center">
                  <img src={ambulance} alt="ambulance" className="max-w-full h-full" />
               </div>
               <div className="lg:pt-8 pt-3">
                  <h1 className="text-[#303030] lg:text-4xl sm:text-2xl text-xl font-extrabold">Discover Reliable
                     DTS Tempo travellers</h1>
                  <p className="text-[#303030] sm:text-lg  text-base sm:my-3 my-1 font-medium">Access our tempo any time, day or night</p>
                  <h6 className="text-[#252525] font-semibold text-lg sm:mb-3 mb-1">Tempo</h6>
                  <div className="lg:pt-6 sm:pt-3 pt-1">
                     <button className=" bg-[#FF9307] text-[#ffff] sm:font-bold font-medium rounded hover:bg-orange-500 hover:text-[#252525]
                      transition duration-300 lg:text-2xl sm:text-base text-sm md:px-4 px-2 md:py-2 py-1 lg:mb-12 sm:mb-6 mb-2 "
                        onClick={() => navigate('/ourservices/tempo')}>Know More</button>
                  </div>
               </div>

            </div>

         </div>
         <PremiumRentalExperience />
         {/* <BookCab /> */}
         <Delivers />
         <div className="w-screen flex flex-col justify-center items-center lg:py-12 sm:py-7 py-4">
            <div className="max-w-6xl flex md:flex-row flex-col justify-center items-center md:gap-12 gap-0 md:px-0 px-5">
               <div className="w-full">
                  <h1 className="lg:text-4xl md:text-3xl sm:text-2xl  text-xl  font-bold text-center md:mb-3 mb-1">About DTS</h1>
                  <div className="text-[#252525] font-normal sm:text-base text-sm sm:pb-2 pb-1">
                     Welcome to DTS, where your journey is our priority. Our story began in 2011
                     with a simple yet ambitious goal: to provide reliable, safe, and comfortable
                     transportation solutions. From our humble beginnings, we have grown steadily,
                     driven by a commitment to exceptional service and customer satisfaction.
                  </div>
                  <div className="text-[#252525] font-normal sm:text-base text-sm sm:pb-2 pb-1">
                     In our early years, we focused on building a foundation of trust with our
                     customers. We listened to their needs, ensured their safety, and delivered
                     comfort in every ride. As word spread, so did our reputation, and we quickly
                     became a trusted name in the industry.
                  </div>
                  <div className="text-[#252525] font-normal sm:text-base text-sm sm:pb-2 pb-1">
                     Today, our mission is to redefine your travel experience. We continually strive
                     to exceed your expectations with our unwavering dedication to providing
                     top-notch service. When you choose DTS, you're choosing a company that values
                     your journey as much as you do.
                  </div>
                  <div className="text-[#252525] font-normal sm:text-base text-sm sm:pb-2 pb-1">
                     Discover why thousands of travelers trust DTS for their transportation needs.
                     Your satisfaction is our destination.
                  </div>
               </div>
               <div className="w-full">
                  <img src={about} alt="about" className="max-w-full h-full " />

               </div>
            </div>

         </div>

         <How />
         <FaqSection />
         <Testimonials />
      </>
   )
}