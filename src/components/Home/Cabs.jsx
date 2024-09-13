import { useNavigate } from 'react-router-dom';
import image from '../../../public/Imgae/arrow.png';
import bg from '../../../public/Imgae/cabs-bg.png';
import CarActionButtons from '../Navbar/NavbarButton';

const CabServiceSection = ({ title, routes }) => (
  <div className="flex flex-col items-center p-3 justify-center bg-black bg-opacity-60 rounded-lg shadow-md flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-1/4">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h2>
    <ul className="space-y-2">
      {routes.map((route, index) => (
        <li key={index} className="flex items-center gap-2 text-white text-sm md:text-base cursor-pointer">
          <img src={image} alt="arrow" className='h-4 w-4 md:h-5 md:w-5 object-contain' />
          {route}
        </li>
      ))}
    </ul>
  </div>
);

const CabServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Delhi Cabs",
      routes: [
        "Delhi to Charkhi Dadri",
        "Delhi to Faridabad",
        "Delhi to Gurgaon",
        "Delhi to Jhajjar",
        "Delhi to Jind",
        "Delhi to Karnal",
        "Delhi to Mahendragarh"
      ]
    },
    {
      title: "Noida Cabs",
      routes: [
        "Noida to Nuh",
        "Noida to Palwal",
        "Noida to Panipat",
        "Noida to Rewari",
        "Noida to Rohtak",
        "Noida to Sonipat",
        "Noida to Bharatpur"
      ]
    },
    {
      title: "Gurgaon Cabs",
      routes: [
        "Gurgaon to Bulandshahr",
        "Gurgaon to Gautam Buddh Nagar",
        "Gurgaon to Ghaziabad",
        "Gurgaon to Hapur",
        "Gurgaon to Meerut",
        "Gurgaon to Muzaffarnagar",
        "Gurgaon to Shamli"
      ]
    }
  ];

  return (
    <div className="w-screen flex flex-col justify-center items-center py-8 bg-gradient-to-r from-black to-gray-800 bg-cover
     bg-center mt-8"
         style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-7xl w-full px-4">
        <div className="flex justify-center items-center overflow-x-auto gap-4 no-scrollbar">
          {services.map((service, index) => (
            <CabServiceSection key={index} title={service.title} routes={service.routes} />
          ))}
        </div>
        {/* 
         */}
       <div className='justify-center items-center flex'>
       <CarActionButtons buttonName="Enquiry Now"/>
       </div>
      </div>
    </div>
  );
};

export default CabServices;
