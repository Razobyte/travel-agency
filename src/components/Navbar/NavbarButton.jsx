import React, { useState, useEffect } from 'react';
import FormCommon from '../FormCommon';
import { CgClose } from 'react-icons/cg';

const CarActionButtons = ({buttonName}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isBookingOpen) setIsBookingOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isBookingOpen]);

  const ModalWrapper = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white sm:p-6 p-4 rounded-lg shadow-xl sm:max-w-3xl w-10/12">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <CgClose size={24} />
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div>
      <button
        onClick={openBooking}
        className="sm:mt-6 sm:px-8  px-3  py-1 sm:py-2 bg-[#FF9307] text-[#ffff]   rounded hover:bg-orange-500
         hover:text-[#252525] transition duration-300 lg:text-2xl sm:text-lg xs:text-sm text-sm sm:font-bold font-medium"
      >
      {buttonName}
      </button>
      <ModalWrapper isOpen={isBookingOpen} onClose={closeBooking}>
        <FormCommon/>
      </ModalWrapper>
    </div>
  );
};

export default CarActionButtons;