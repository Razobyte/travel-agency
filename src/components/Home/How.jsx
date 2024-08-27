import React from 'react';
import form from '../../../public/Imgae/form.png';
import enjoytrip from '../../../public/Imgae/enjoytrip.png';
import enquiry from '../../../public/Imgae/enquiry.png';
import callnow from '../../../public/Imgae/callnow.png';
import bg from '../../../public/Imgae/howbg.png';
import './Home.css'

const Step = ({ icon, title, description, isEven, isLast }) => (
  
  <div className={`relative w-full bg-white rounded-lg px-4 py-6 shadow-md zoom-animation  ${isEven ? 'md:mt-16' : 'md:mb-16'}`}>
    <div className="flex flex-col items-center text-center">
      <img src={icon} alt={title} width={50} height={50} className="mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
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
      className="w-full flex flex-col justify-center items-center py-16 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url(${bg})`}}
    >
      <h2 className="text-4xl font-bold text-white mb-12">How It Work</h2>
      <div className="w-full max-w-6xl flex  justify-between items-stretch gap-8 ">
        {steps.map((step, index) => (
          <Step key={index} {...step} isEven={index % 2 !== 1} isLast={index === steps.length - 5} />
        ))}
      </div>
    </div>
  );
}