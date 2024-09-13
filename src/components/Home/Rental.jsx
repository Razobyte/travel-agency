import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import ertiga from '../../../public/Imgae/Hyundai Nios.png';
import Innova from '../../../public/Imgae/Hyundai creta.png';
import swift from '../../../public/Imgae/Nisaan.png';

const RentalCard = ({ carName, imageSrc, link }) => (
  <div className="bg-white p-4  border border-gray-200 w-full transition-all duration-300 hover:shadow-xl">
    <img src={imageSrc} alt={carName} className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-lg mb-4" />
    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-center text-[#252525]">{carName}</h3>
    <div className='flex justify-center items-center'>
      <Link to={link}>
        <button className="font-bold bg-[#FF9307] text-white rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
          Know More
        </button>
      </Link>
    </div>
  </div>
);

const PremiumRentalExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const cars = [
    { name: 'Hyundai Nios', image: ertiga, link: "/ourservices/rental" },
    { name: 'Hyundai Creta Sx', image: Innova, link: "/ourservices/rental" },
    { name: 'Nissan Magnite', image: swift, link: "/ourservices/rental" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-full bg-gray-50 py-8 sm:py-12 lg:py-16'>
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 lg:mb-4 text-[#252525]">
          Affordable Rates for Every Journey with DTS Rental
        </h1>
        <p className="text-center text-gray-700 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg max-w-3xl">
          We prioritize your comfort and satisfaction on every ride with DTS
        </p>
        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={isMobile ? 20 : 30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.name}>
              <RentalCard carName={car.name} imageSrc={car.image} link={car.link} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
          <Link to="/ourservices/rental">
            <button className="font-bold bg-[#FF9307] text-white rounded hover:bg-gray-700 transition duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4">
              View All Cars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumRentalExperience;