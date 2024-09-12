import React from 'react';
import form from '../../../public/Imgae/form.png';
import enjoytrip from '../../../public/Imgae/enjoytrip.png';
import enquiry from '../../../public/Imgae/enquiry.png';
import callnow from '../../../public/Imgae/callnow.png';
import bg from '../../../public/Imgae/howbg.png';
import './Home.css'

const Step = ({ icon, title, description, isEven, isLast }) => (
  
  <div className={`relative w-full bg-white rounded-lg sm:px-5 px-1  sm:py-6 py-3 shadow-md zoom-animation  ${isEven ? 'sm:md:mt-16 mt-0' : 'sm:md:mb-16 mb-0'}`}>
    <div className="flex flex-col items-center text-center">
      <img src={icon} alt={title} className="sm:mb-4 mb-1 sm:w-24 sm:h-24 h-12 w-12 object-contain sm:pt-0 pt-2" />
      <h3 className="font-semibold sm:text-lg text-sm sm:mb-2 mb-0">{title}</h3>
      <p className="text-sm sm:flex hidden text-gray-600">{description}</p>
    </div>
    {!isLast && (
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent"></div>
      </div>
    )}
  </div>
);

export default function How() {
  const steps = [
    {
      icon: form,
      title: "Fill the Form",
      description: "Please fill out the Enquiry form with your details to proceed. We value your privacy and ensure data protection."
    },
    {
      icon: enquiry,
      title: "Click Enquiry Now",
      description: "Click the 'Enquiry Now' button to submit your request. Our team will contact you shortly to assist further."
    },
    {
      icon: callnow,
      title: "You will get call from DTS",
      description: "Submit the form and click 'Enquiry Now'. You will receive a call from DTS for further assistance shortly."
    },
    {
      icon: enjoytrip,
      title: "After Booking Enjoy the Trip",
      description: "After booking, relax and enjoy the trip with our excellent services."
    }
  ];

  return (
    <div 
      className="w-full flex flex-col justify-center items-center lg:py-16 sm:py-8 py-4 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url(${bg})`}}
    >
      <h2 className="lg:text-4xl md:text-3xl sm:text-2xl  text-xl  font-bold lg:mb-12 md:mb-6 mb-2 text-white">How It Work</h2>
      <div className="w-full max-w-6xl flex  justify-between items-stretch lg:gap-8 sm:gap-4 gap-2 md:px-0 px-3">
        {steps.map((step, index) => (
          <Step key={index} {...step} isEven={index % 2 !== 1} isLast={index === steps.length - 5} />
        ))}
      </div>
    </div>
  );
}