
import { useNavigate } from 'react-router-dom';
import image from '../../../public/Imgae/arrow.png';
import bg from '../../../public/Imgae/cabs-bg.png'

const CabServiceSection = ({ title, routes}) => (
  <div className="flex flex-col">
    <h2 className="text-4xl font-[700] mb-5 text-white">{title}</h2>
    <ul>
      {routes.map((route, index) => (
        <li key={index} className="flex items-center mb-3 text-white gap-3 text-md font-medium cursor-pointer">
        <img src={image} alt="arrow" className='max-w-full h-5' />
          {route}
        </li>
      ))}
    </ul>
  </div>
);

const CabServices = () => {
  const navigate=useNavigate()
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
    <div className="w-screen flex flex-col justify-center items-center py-8 bg-gradient-to-r from-black z-50 transparent mt-8"
    style={{backgroundImage:`url(${bg})` ,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="max-w-7xl ">
        <div className="flex flex-col md:flex-row gap-40">
          {services.map((service, index) => (
            <CabServiceSection key={index} title={service.title} routes={service.routes} />
          ))}
        </div>
        <div className='flex justify-center items-center mt-8'>
      <button className="font-bold text-xl bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl px-12 py-2 mb-12 "
                     onClick={()=>navigate('/ourservices/tempo')}>
          Enquiry Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default CabServices;