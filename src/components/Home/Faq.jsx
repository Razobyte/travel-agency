import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "What types of transportation services does DTS Cabs offer?",
    answer: (
      <>
        <p>DTS Cabs provides a range of transportation services to meet various needs. We offer:</p>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Taxi Services:</strong> Convenient and reliable rides for short trips within the city or to nearby destinations.</li>
          <li><strong>Rental Services:</strong> Flexible vehicle rentals for personal or business use, with options for various vehicle types.</li>
          <li><strong>Tempo Services:</strong> Spacious tempo vehicles for group travel or transporting goods, ideal for moving or events.</li>
        </ul>
      </>
    )
  },
  {
    question: "How can I book a taxi with DTS Cabs?",
    answer: (
      <>
        <p>Booking a taxi with DTS Cabs is straightforward and convenient. You can choose from the following methods:</p>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Call Us:</strong> Directly call us at the number provided on our website to speak with our customer service team and book your ride.</li>
          <li><strong>WhatsApp:</strong> Send us a message via WhatsApp for quick and easy booking. The WhatsApp number is listed on our site.</li>
          <li><strong>Email Us:</strong> Drop us an email with your booking details, and we'll confirm your taxi reservation.</li>
          <li><strong>Fill Out the Enquiry Form:</strong> Complete the enquiry form available on our website, and our team will get in touch with you to finalize your booking.</li>
        </ul>
      </>
    )
  },
  {
    question: "Are your rental vehicles insured and well-maintained?",
    answer: "Yes, all our rental vehicles are fully insured and undergo regular maintenance checks to ensure safety and reliability. We prioritize the condition of our fleet to provide you with a smooth and worry-free driving experience."
  },
  {
    question: "What is the process for renting a tempo from DTS Cabs?",
    answer: (
      <>
        <p>Renting a tempo with DTS Cabs involves:</p>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Selecting Your Vehicle:</strong> Choose the type and size of the tempo you need based on your requirements.</li>
          <li><strong>Booking:</strong> Contact us via phone, website, or app to reserve your tempo.</li>
          <li><strong>Documentation:</strong> Provide necessary identification and rental agreement details.</li>
          <li><strong>Pickup/Delivery:</strong> Arrange for pickup or delivery of the tempo at your convenience.</li>
        </ul>
      </>
    )
  },
  {
    question: "What are your payment options for taxi and rental services?",
    answer: (
      <>
        <p>DTS Cabs offers multiple payment options for your convenience:</p>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Cash:</strong> Pay directly to the driver or at our rental office.</li>
          <li><strong>Credit/Debit Card:</strong> Secure payments can be made via card at the end of your ride or rental period.</li>
          <li><strong>Online Payment:</strong> Online UPI</li>
        </ul>
      </>
    )
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
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-[#111111] text-xl font-bold text-center md:mb-2 mb-1">Frequently Asked Questions</h2>
        <p className='md:text-lg text-sm md:font-semibold font-normal text-center md:pb-6 pb-2 text-[#111111]'>Here are some common questions about our services</p>
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
                <div className="px-4 py-3 text-gray-600 bg-gray-50 border-l-0 mt-2">
                  {typeof faq.answer === 'string' ? (
                    <p className="text-lg">{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}