import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9315535846"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 md:right-4  right-4 top-1/2 transform -translate-y-1/2"
      aria-label="Chat with us on WhatsApp"
    >
      <div 
        className="flex items-center justify-center bg-green-500 text-white 
        md:p-3 p-2 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:bg-green-600"
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      >
        <BsWhatsapp className="text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
