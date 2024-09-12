import React from 'react';
import ertiga from '../../../public/Imgae/ertiga.png';
import Innova from '../../../public/Imgae/inova.png';
import swift from '../../../public/Imgae/swift-desire.png';
import { Link } from 'react-router-dom';

const TempoCard = ({ carName, imageSrc, link }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-shrink-0 w-72 sm:w-80 lg:w-96">
    <img src={imageSrc} alt={carName} className="max-w-full h-64 object-cover rounded-lg mb-4" />
    <h3 className="text-lg font-semibold mb-4 text-center text-[#252525]">{carName}</h3>
    <div className='flex justify-center items-center'>
      <Link to={link}>
        <button className="sm:font-bold
 font-normal         bg-[#FF9307] text-[#ffff] rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 lg:text-2xl
         text-base md:text-lg lg:px-4 px-2 lg:py-2 py-1 ">
          Know More
        </button>
      </Link>
    </div>
  </div>
);

const PremiumTempoExperience = () => {
  const cars = [
    { name: 'ERTIGA', image: ertiga, link: "/ourservices/taxi" },
    { name: 'Innova', image: Innova, link: "/ourservices/taxi" },
    { name: 'Swift Desire', image: swift, link: "/ourservices/taxi" },
  ];

  return (
    <div className='flex flex-col items-center justify-center w-screen md:py-12 py-4'>
      <div className="max-w-6xl w-full px-4">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl  text-xl  font-bold text-center md:mb-2 mb-1">Experience Premium DTS Taxi</h1>
        <p className="text-center text-gray-800 md:mb-8 mb-4 md:text-lg sm:text-base text-sm md:font-semibold font-normal">
          Ensuring a pleasant experience with every DTS taxi ride.
        </p>
        <div className="flex overflow-x-auto gap-5 no-scrollbar">
          {cars.map((car) => (
            <TempoCard key={car.name} carName={car.name} imageSrc={car.image} link={car.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumTempoExperience;
