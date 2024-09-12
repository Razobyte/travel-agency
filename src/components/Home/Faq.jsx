import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "How old do I need to be to rent a car?",
    answer: "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs, and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you."
  },
  {
    question: "What documents do I need to rent a car?",
    answer: "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs, and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you."
  },
  {
    question: "What types of vehicles are available for rent?",
    answer: "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs, and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you."
  },
  {
    question: "Can I rent a car with a debit card?",
    answer: "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs, and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you."
  },
  {
    question: "What is your fuel policy?",
    answer: "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs, and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you."
  }
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='w-screen flex justify-center items-center py-8 bg-gradient-to-t to-[#D9D9D9] from-[#ffff] md:mt-0 mt-8'>
      <div className='max-w-6xl w-full px-4'>
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-[#111111]  text-xl  font-bold text-center md:mb-2 mb-1">Frequently Asked Questions</h2>
        <p className='md:text-lg text-sm  md:font-semibold  font-normal text-center md:pb-6 pb-2 text-[#111111]'>Here are some versatile options that cater to different needs</p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div className="bg-white rounded-lg mx-auto" key={index}>
              <div
                className="flex items-center justify-between p-4 cursor-pointer border border-gray-300 hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200"
                onClick={() => handleToggle(index)}
              >
                <span className="font-semibold text-lg text-[#3D3D3D]">{faq.question}</span>
                {expandedIndex === index ? (
                  <IoIosArrowUp size={25} className="text-white border border-white-500 rounded-full p-1 bg-yellow-500" />
                ) : (
                  <IoIosArrowDown size={25} className="text-white border border-white-500 rounded-full p-1 bg-black" />
                )}
              </div>
              {expandedIndex === index && (
                <p className="px-4 py-3 text-gray-600 bg-gray-50 border-l-0 mt-2 capitalize text-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
