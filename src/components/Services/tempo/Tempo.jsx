import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import banner from '../../../../public/Imgae/tempo-banner.png';
import img from '../../../../public/Imgae/tempo.png';
import img2 from '../../../../public/Imgae/tempo (3).png';
import img3 from '../../../../public/Imgae/tempo (2).png';
import img4 from '../../../../public/Imgae/tempo (1).png';
import img5 from '../../../../public/Imgae/swift2.png';
import img6 from '../../../../public/Imgae/ergita2.png';
import img7 from '../../../../public/Imgae/innova2.png';
import CarActionButtons from '../../Navbar/NavbarButton';
import How from '../../Home/How';
import Testimonials from '../../Home/Testominials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Tempo() {
  const navigate = useNavigate();
  const [slidesPerView, setSlidesPerView] = useState(1);
  const cars = [
    { name: 'Ertiga', image: img6 },
    { name: 'Innova', image: img7 },
    { name: 'Swift Desire', image: img5 },
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
    <>
      <div className='w-screen'>
        <img src={banner} alt="banner" className='w-full object-cover' />
      </div>

      <div className="w-screen flex flex-col md:flex-row justify-center items-start lg:py-12 md:py-6 py-4 bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-0 md:mb-0">
            <img src={img} alt="Tempo" className='w-full max-w-md h-auto rounded-lg shadow-lg' />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 text-gray-800 px-4">
            <h2 className="md:text-3xl  sm:text-xl text-lg font-bold sm:mb-4 mb-0 sm:mt-0 mt-3">Tempo</h2>
            <div className="flex items-center sm:mb-2 mb-0">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className='text-yellow-500' />
              ))}
            </div>
            <span className="md:text-lg sm:text-base text-sm sm:font-semibold font-normal bg-gray-200 rounded px-3 py-1">24 Person</span>
            <span className="md:text-lg sm:text-base text-sm sm:font-semibold font-normal bg-gray-200 rounded px-3 py-1">Price in Plains - Rs26/km</span>
            <span className="md:text-lg sm:text-base text-sm sm:font-semibold font-normal bg-gray-200 rounded px-3 py-1">Price in Mountains - Rs28/km</span>
            <span className="md:text-lg sm:text-base text-sm sm:font-semibold font-normal bg-gray-200 rounded px-3 py-1">T&C Apply</span>
            <CarActionButtons buttonName="Know more" />
          </div>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center lg:pb-12 sm:pb-6 pb-4 bg-white px-4">
      <h1 className="sm:text-3xl text-xl lg:text-4xl font-bold text-center lg:mb-12 sm:mb-6 mb-4">
        You Might be Interested in our taxi services
      </h1>
      <div className="max-w-6xl w-full">
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
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg  border border-gray-200 w-full">
                <img src={car.image} alt={car.name} className="w-full object-cover rounded-t-lg" />
                <h3 className="md:text-lg sm:text-base text-sm sm:font-semibold font-normal sm:mb-4 mb-2 text-center text-gray-800">
                  {car.name}
                </h3>
                <div className='flex justify-center items-center sm:pb-5 pb-2'>
                  <button
                    className="md:text-lg sm:text-base text-sm font-semibold
                    sm:font-bold bg-[#FF9307] text-white rounded hover:bg-orange-500 transition duration-300 
                    md:px-6 sm:px-3 px-1 md:py-3 sm:py-2 py-1"
                    onClick={() => navigate('/ourservices/taxi')}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

      <div className='mb-12'>
        <How />
      </div>
      <Testimonials />
    </>
  );
}
