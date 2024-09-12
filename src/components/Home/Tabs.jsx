import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Tab() {
  const [activeTab, setActiveTab] = useState('Taxi');
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [packageSelected, setPackageSelected] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentLocation('');
    setDestination('');
    setPackageSelected('');
  };

  const renderSecondInput = () => {
    if (activeTab === 'Rental') {
      return (
        <select
          className="border border-gray-300 px-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-100  text-sm sm:text-base lg:text-xl"
          value={packageSelected}
          onChange={(e) => setPackageSelected(e.target.value)}
        >
          <option value="">Select Package</option>
          <option value="package1">1 hour 10km</option>
          <option value="package2">2 hours 25km</option>
          <option value="package3">4 hours 40km</option>
          <option value="package4">6 hours 20km</option>
          <option value="package5">8 hours 40km</option>
          <option value="package6">5 hours 30km</option>
        </select>
      );
    } else {
      return (
        <input
          type="text"
          placeholder="Enter Destination"
          className="border border-gray-300 px-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-100 
           text-sm sm:text-base lg:text-xl"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      );
    }
  };

  const getButtonText = () => {
    switch (activeTab) {
      case 'Taxi':
        return 'Search DTS Taxi';
      case 'Rental':
        return 'Search DTS Rental';
      case 'Airport':
        return 'Search DTS Ride for Airport';
      case 'Tempo':
        return 'Search DTS Tempo';
      default:
        return 'Search';
    }
  };

  const getButtonLink = () => {
    switch (activeTab) {
      case 'Taxi':
        return '/ourservices/taxi';
      case 'Rental':
        return '/ourservices/rental';
      case 'Airport':
        return '/ourservices/airport';
      case 'Tempo':
        return '/ourservices/tempo';
      default:
        return '/search';
    }
  };

  const isButtonDisabled = () => {
    if (activeTab === 'Rental') {
      return !currentLocation || !packageSelected;
    } else {
      return !currentLocation || !destination;
    }
  };

  return (
    <div className="w-full flex flex-col lg:mt-[-100px] sm:mt-[-50px] mt-[-20px]">
      <div className="max-w-6xl w-full px-2 sm:px-4 lg:px-12">
        <nav>
          <ul className="flex justify-between bg-white shadow w-full py-2 text-[#474747] font-bold 
          text-sm sm:text-base lg:text-xl rounded-t-lg">
            {['Taxi', 'Rental', 'Airport', 'Tempo'].map((tab) => (
              <li key={tab} className="flex-1 text-center">
                <button
                  className={`w-full py-1 sm:py-2 border-b-2 focus:outline-none ${
                    activeTab === tab ? 'border-[#FF9307]' : 'border-transparent'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <form className="flex gap-1 sm:gap-2 lg:gap-3 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 lg:py-4 bg-gray-100 rounded-b-lg">
          <input
            type="text"
            placeholder="Current Location"
            className="border border-gray-300 px-1 sm:px-2 py-1 sm:py-2 w-full focus:outline-none focus:ring-1 focus:ring-yellow-100  text-sm sm:text-base lg:text-xl"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />
          <div className="w-full">
            {renderSecondInput()}
          </div>
          <Link
            to={isButtonDisabled() ? '#' : getButtonLink()}
            className="w-full"
            onClick={(e) => isButtonDisabled() && e.preventDefault()}
          >
            <button
              className={`bg-[#FF9307] px-1 sm:px-2 py-2 sm:w-full rounded  text-sm sm:text-base lg:text-xl font-bold
                 text-[#252525] flex justify-center items-center gap-1 sm:gap-2 ${
                isButtonDisabled() ? 'opacity-80 cursor-not-allowed' : ''
              }`}
              disabled={isButtonDisabled()}
            >
              <span className="truncate">{getButtonText()}</span>
              <FaArrowAltCircleRight/>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}