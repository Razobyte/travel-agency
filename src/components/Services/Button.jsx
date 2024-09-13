import React, { useState, useEffect } from 'react';
import Calculator from './Rental/Calculator';
import FormComponent from '../Formunderbanner';
import { CgClose } from 'react-icons/cg';

const CarActionButtons = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openCalculator = () => setIsCalculatorOpen(true);
  const closeCalculator = () => setIsCalculatorOpen(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isCalculatorOpen) setIsCalculatorOpen(false);
      if (isBookingOpen) setIsBookingOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCalculatorOpen, isBookingOpen]);

  const ModalWrapper = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white sm:p-6 p-2 rounded-lg shadow-xl sm:max-w-3xl w-[95%]">
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
        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#FF9307] text-[#ffff] font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
      >
        Request to Book
      </button>
      <button
        onClick={openCalculator}
        className="ms-3 mt-6 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#FF9307] text-[#ffff] font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
      >
        View Fare
      </button>

      <ModalWrapper isOpen={isCalculatorOpen} onClose={closeCalculator}>
        <Calculator />
      </ModalWrapper>

      <ModalWrapper isOpen={isBookingOpen} onClose={closeBooking}>
        <FormComponent/>
      </ModalWrapper>
    </div>
  );
};

export default CarActionButtons;
