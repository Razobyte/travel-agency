import React from 'react';
import ertiga from '../../../public/Imgae/ertiga.png';
import Innova from '../../../public/Imgae/inova.png';
import swift from '../../../public/Imgae/swift-desire.png';
import { Link } from 'react-router-dom';


const TempoCard = ({ carName, imageSrc,link }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
    <img src={imageSrc} alt={carName} className="max-w-full h-64 object-cover rounded-lg mb-4" />
    <h3 className="text-lg font-semibold mb-4 text-center text-[#252525]">{carName}</h3>
    <div className='flex justify-center items-center'>
    <Link to={link}>
        <button className="text-lg font-bold bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl px-4 py-2">
          Know More
        </button>
      </Link>
    </div>
  </div>
);

const PremiumTempoExperience = () => {
  const cars = [
    { name: 'ERTIGA', image: ertiga, link:"/ourservices/taxi" },
    { name: 'Innova', image: Innova , link:"/ourservices/taxi"},
    { name: 'Swift Desire', image: swift ,link:"/ourservices/taxi" },
  ];

  return (
    <div className='flex flex-col items-center justify-center w-screen py-12 '>
       <div className="max-w-6xl flex justify-center flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-2">Experience Premium DTS Taxi</h1>
      <p className="text-center text-gray-800 mb-8 text-lg font-semibold">
        Ensuring a pleasant experience with every DTS taxi ride.
      </p>
      <div className="flex gap-5">
        {cars.map((car) => (
          <TempoCard key={car.name} carName={car.name} imageSrc={car.image} link={car.link} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default PremiumTempoExperience;