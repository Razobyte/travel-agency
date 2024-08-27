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
          className="border border-gray-300 px-4 py-3 w-[35%] focus:outline-none focus:ring-1 focus:ring-yellow-100"
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
          className="border border-gray-300 px-4 py-3 w-[35%] focus:outline-none focus:ring-1 focus:ring-yellow-100"
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
    <div className="w-screen flex flex-col px-12 mt-[-100px]">
      <div className="max-w-6xl">
        <nav>
          <ul className="flex justify-evenly bg-white shadow w-[40%] py-2 text-[#474747] font-bold text-lg">
            {['Taxi', 'Rental', 'Airport', 'Tempo'].map((tab) => (
              <li key={tab}>
                <button
                  className={`border-b-2 focus:border-b-2 focus:border-blue-500 active:border-b-2 active:border-blue-500 ${
                    activeTab === tab ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <form className="flex gap-5 p-4 bg-gray-100">
          <input
            type="text"
            placeholder="Current Location"
            className="border border-gray-300 px-4 py-3 w-[35%] focus:outline-none focus:ring-1 focus:ring-yellow-100"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />
          {renderSecondInput()}
          <Link
            to={isButtonDisabled() ? '#' : getButtonLink()}
            className="w-[30%]"
            onClick={(e) => isButtonDisabled() && e.preventDefault()}
          >
            <button
              className={`bg-[#FF9307] px-5 py-3 rounded text-lg font-bold text-[#252525] flex justify-center items-center gap-2 w-full ${
                isButtonDisabled() ? 'opacity-80 cursor-not-allowed' : ''
              }`}
              disabled={isButtonDisabled()}
            >
              {getButtonText()}
              <FaArrowAltCircleRight />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
