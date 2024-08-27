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
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <div className="w-screen flex justify-center items-center py-12 ">
                <div className="max-w-6xl flex justify-center items-center gap-0">

                    <div className="w-full flex flex-col items-start space-y-4 ">
                        <div className="flex items-center">
                            <img src={seat} alt="5 Seater Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">5 Seater</span>
                        </div>
                        <div className="flex items-center">
                            <img src={learne} alt="Swift Desire Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">Swift Desire</span>
                        </div>
                        <div className="flex items-center">
                            <img src={rupee} alt="Price Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">Price - Rs12/km</span>
                        </div>
                        <div className="flex items-center">
                            <img src={hours} alt="24 Hours Support Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">24 Hours Support</span>
                        </div>
                       <CarActionButtons buttonName="Request to Book"/>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <img
                            src={img}
                            alt="Maruti Suzuki Swift Dzire"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12 ">
                <div className="max-w-6xl flex justify-between items-center gap-20">
                <div className="w-full flex justify-center items-center">
                        <img
                            src={img2}
                            alt="Maruti Suzuki Swift Dzire"
                            className='max-w-full h-auto'
                        />
                    </div>

                    <div className="w-full flex flex-col items-start space-y-4 ">
                        <div className="flex items-center">
                            <img src={seat} alt="5 Seater Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">7 Seater</span>
                        </div>
                        <div className="flex items-center">
                            <img src={learne} alt="Swift Desire Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">Ertiga</span>
                        </div>
                        <div className="flex items-center">
                            <img src={rupee} alt="Price Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">Price - Rs15/km</span>
                        </div>
                        <div className="flex items-center">
                            <img src={hours} alt="24 Hours Support Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">24 Hours Support</span>
                        </div>
                        <CarActionButtons buttonName="Request to Book"/>
                    </div>

                  
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12 ">
                <div className="max-w-6xl flex justify-center items-center gap-0">

                    <div className="w-full flex flex-col items-start space-y-4 ">
                        <div className="flex items-center">
                            <img src={seat} alt="5 Seater Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">7 Seater</span>
                        </div>
                        <div className="flex items-center">
                            <img src={learne} alt="Swift Desire Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">Innova</span>
                        </div>
                        <div className="flex items-center">
                            <img src={rupee} alt="Price Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">Price - Rs20/km</span>
                        </div>
                        <div className="flex items-center">
                            <img src={hours} alt="24 Hours Support Icon" className="w-6 h-6 mr-2" />
                            <span className="text-lg font-semibold">24 Hours Support</span>
                        </div>
                        <CarActionButtons buttonName="Request to Book"/>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <img
                            src={img3}
                            alt="Maruti Suzuki Swift Dzire"
                            className='max-w-full h-auto'
                        />
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
