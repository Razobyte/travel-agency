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
   const navigate=useNavigate()
   return (
      <>
         <Banner imagebannerall={banner} />
         {/* <FormComponent /> */}
         <TabMenu />

         <div className="w-full-screen  flex flex-col justify-center items-center py-5 bg-[#A3BEFF] bg-opacity-[25%] mb-12 mt-5">
            <div className="max-w-6xl">
               <Swiper
                  spaceBetween={10}
                  slidesPerView={5}
                  loop={true}
                  modules={[Autoplay]}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: false
                  }}

                  breakpoints={{
                     640: {
                        slidesPerView: 1,
                     },
                     768: {
                        slidesPerView: 1,
                     },
                     1024: {
                        slidesPerView: 5,
                     },
                  }}
               >

                  <div className="flex justify-center gap-40">
                     <SwiperSlide>
                        <div className="flex flex-col justify-center items-center text-center">
                           <img src={outstaion} alt="outstaion" className="max-w-full h-[60px]" />
                           <h5 className="text-center text-[#303030] text-lg font-semibold pt-2">OutStation</h5>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>

                        <div className="flex flex-col justify-center items-center">
                           <img src={intercity} alt="outstaion" className="max-w-full h-[60px]" />
                           <h5 className="text-center text-[#303030] text-lg font-semibold pt-2">InterCity</h5>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="flex flex-col justify-center items-center">
                           <img src={airport} alt="outstaion" className="max-w-full h-[60px]" />
                           <h5 className="text-center text-[#303030] text-lg font-semibold pt-2">Airport</h5>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="flex flex-col justify-center items-center">
                           <img src={noida} alt="outstaion" className="max-w-full h-[60px]" />
                           <h5 className="text-center text-[#303030] text-lg font-semibold pt-2">Noida</h5>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="flex flex-col justify-center items-center">
                           <img src={delhi} alt="outstaion" className="max-w-full h-[60px]" />
                           <h5 className="text-center text-[#303030] text-lg font-semibold pt-2">Delhi</h5>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className="flex flex-col justify-center items-center">
                           <img src={gurgaon} alt="outstaion" className="max-w-full h-[60px]" />
                           <h5 className="text-center text-[#303030] text-lg font-semibold pt-2">Gurgaon</h5>
                        </div>
                     </SwiperSlide>
                  </div>
               </Swiper>
            </div>
         </div>
         <LocalTour />
         <Explore />
         <CabServices />
         <PremiumTempoExperience />
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
         <PremiumRentalExperience />
         {/* <BookCab /> */}
         <Delivers/>
         <div className="w-screen flex flex-col justify-center items-center py-12">
            <div className="max-w-6xl flex justify-center items-center gap-12">
               <div className="w-full">
                  <h1 className="text-[#252525] font-bold  text-4xl mb-3">About DTS</h1>
                  <div className="text-[#252525] font-normal text-md pb-2">
                     Welcome to DTS, where your journey is our priority. Our story began in 2011
                     with a simple yet ambitious goal: to provide reliable, safe, and comfortable
                     transportation solutions. From our humble beginnings, we have grown steadily,
                     driven by a commitment to exceptional service and customer satisfaction.
                  </div>
                  <div className="text-[#252525] font-normal text-md pb-2">
                     In our early years, we focused on building a foundation of trust with our
                     customers. We listened to their needs, ensured their safety, and delivered
                     comfort in every ride. As word spread, so did our reputation, and we quickly
                     became a trusted name in the industry.
                  </div>
                  <div className="text-[#252525] font-normal text-md pb-2">
                     Today, our mission is to redefine your travel experience. We continually strive
                     to exceed your expectations with our unwavering dedication to providing
                     top-notch service. When you choose DTS, you're choosing a company that values
                     your journey as much as you do.
                  </div>
                  <div className="text-[#252525] font-normal text-md ">
                     Discover why thousands of travelers trust DTS for their transportation needs.
                     Your satisfaction is our destination.
                  </div>
               </div>
               <div className="w-full">
                  <img src={about} alt="about" className="max-w-full h-full " />

               </div>
            </div>

         </div>
     
         <How/>
         <FaqSection/>
         <Testimonials/>
      </>
   )
}