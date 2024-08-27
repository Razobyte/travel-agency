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
        <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-3xl">
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
        className="mt-6 px-6 py-2 bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl"
      >
        Request to Book
      </button>
      <button
        onClick={openCalculator}
        className="ms-3 mt-6 px-6 py-2 bg-[#FF9307] text-[#ffff] rounded font-bold rounded hover:bg-orange-500 hover:text-[#252525] transition duration-300 text-2xl"
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