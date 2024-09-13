import { useState } from 'react';
import banner from '../../../../public/Imgae/taxibanner.png'
import img from '../../../../public/Imgae/swift.png'
import img2 from '../../../../public/Imgae/ertiga-right-front.png'
import img3 from '../../../../public/Imgae/innova.png'
import rupee from '../../../../public/Imgae/rupee.png'
import seat from '../../../../public/Imgae/seat.png'
import hours from '../../../../public/Imgae/24-hours-support.png'
import learne from '../../../../public/Imgae/learne.png'
import How from '../../Home/How';
import Testimonials from '../../Home/Testominials';
import CarActionButtons from '../../Navbar/NavbarButton';

export default function Taxi() {
    return (
        <>
            <div className='w-full'>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            
            {/* Swift Desire */}
            <div className="w-full flex justify-center items-center py-8 px-4 md:py-12">
                <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
                        <CarInfo seats="5" car="Swift Desire" price="12" />
                        <CarActionButtons buttonName="Request to Book"/>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={img} alt="Maruti Suzuki Swift Dzire" className='max-w-full h-auto' />
                    </div>
                </div>
            </div>
            
            {/* Ertiga */}
            <div className="w-full flex justify-center items-center py-8 px-4 md:py-12 bg-gray-100">
                <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={img2} alt="Maruti Suzuki Ertiga" className='max-w-full h-auto' />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
                        <CarInfo seats="7" car="Ertiga" price="15" />
                        <CarActionButtons buttonName="Request to Book"/>
                    </div>
                </div>
            </div>
            
            {/* Innova */}
            <div className="w-full flex justify-center items-center py-8 px-4 md:py-12">
                <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
                        <CarInfo seats="7" car="Innova" price="20" />
                        <CarActionButtons buttonName="Request to Book"/>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={img3} alt="Toyota Innova" className='max-w-full h-auto' />
                    </div>
                </div>
            </div>
        
            <div className='mb-12'>   
                <How/>
            </div>
            <Testimonials/>
        </>
    );
}

function CarInfo({ seats, car, price }) {
    return (
        <>
            <div className="flex items-center">
                <img src={seat} alt={`${seats} Seater Icon`} className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">{seats} Seater</span>
            </div>
            <div className="flex items-center">
                <img src={learne} alt={`${car} Icon`} className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">{car}</span>
            </div>
            <div className="flex items-center">
                <img src={rupee} alt="Price Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">Price - Rs{price}/km</span>
            </div>
            <div className="flex items-center">
                <img src={hours} alt="24 Hours Support Icon" className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">24 Hours Support</span>
            </div>
        </>
    );
}