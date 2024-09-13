import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import ertiga from '../../../public/Imgae/ertiga.png';
import Innova from '../../../public/Imgae/inova.png';
import swift from '../../../public/Imgae/swift-desire.png';

const TempoCard = ({ carName, imageSrc, link }) => (
  <div className="bg-white p-4 border border-gray-200  w-full">
    <img src={imageSrc} alt={carName} className="max-w-full h-64 object-cover rounded-lg mb-4" />
    <h3 className="text-lg font-semibold mb-4 text-center text-[#252525]">{carName}</h3>
    <div className='flex justify-center items-center'>
      <Link to={link}>
        <button className="sm:font-bold font-normal bg-[#FF9307] text-[#ffff] rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 lg:text-2xl text-base md:text-lg lg:px-4 px-2 lg:py-2 py-1">
          Know More
        </button>
      </Link>
    </div>
  </div>
);

const PremiumTempoExperience = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const cars = [
    { name: 'ERTIGA', image: ertiga, link: "/ourservices/taxi" },
    { name: 'Innova', image: Innova, link: "/ourservices/taxi" },
    { name: 'Swift Desire', image: swift, link: "/ourservices/taxi" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-ful py-8 sm:py-12 lg:py-16'>
      <div  className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-center md:mb-2 mb-1">Experience Premium DTS Taxi</h1>
        <p className="text-center text-gray-800 md:mb-8 mb-4 md:text-lg sm:text-base text-sm md:font-semibold font-normal">
          Ensuring a pleasant experience with every DTS taxi ride.
        </p>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {cars.map((car) => (
            <SwiperSlide key={car.name}>
              <TempoCard carName={car.name} imageSrc={car.image} link={car.link} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PremiumTempoExperience;