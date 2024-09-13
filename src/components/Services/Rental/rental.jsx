import React, { useState } from 'react';
import banner from '../../../../public/Imgae/rentalbanner.png';
import img from '../../../../public/Imgae/maruti.png';
import img2 from '../../../../public/Imgae/maruti2.png';
import img3 from '../../../../public/Imgae/maruti3.png';
import img4 from '../../../../public/Imgae/maruti4.png';
import img5 from '../../../../public/Imgae/maruti5.png';
import img6 from '../../../../public/Imgae/maruti6.png';
import img8 from '../../../../public/Imgae/maruti8.png';
import img9 from '../../../../public/Imgae/maruti9.png';
import img10 from '../../../../public/Imgae/maruti10.png';
import img11 from '../../../../public/Imgae/maruti11.png';
import img12 from '../../../../public/Imgae/maruti12.png';
import img13 from '../../../../public/Imgae/maruti13.png';
import img14 from '../../../../public/Imgae/maruti14.png';
import img15 from '../../../../public/Imgae/maruti15.png';
import img16 from '../../../../public/Imgae/maruti16.png';
import CarActionButtons from '../Button';

const CarInfo = ({ image, title, model, fuelVariant, color, reverse = false }) => (
    <div className={`w-screen flex flex-col sm:px-0 px-5 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
    justify-center items-center lg:py-12 md:py-6 py-4`}>
        <div className={`max-w-6xl flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center items-center lg:gap-8 gap-4`}>
            <div className="w-full lg:w-1/2  ">
                <img
                    src={image}
                    alt={title}
                    className='max-w-full h-auto'
                />
            </div>
            <div className="w-full lg:w-1/2">
                <h2 className="sm:text-3xl text-xl lg:text-4xl font-bold">{title}</h2>
                <div className="flex items-center mt-2 ">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
                <ul className="mt-4 space-y-2 ">
                    <li className='text-lg sm:text-xl font-[500]'><strong>Model -</strong> {model}</li>
                    <li className='text-lg sm:text-xl font-[500]'><strong>Fuel Variant - </strong> {fuelVariant}</li>
                    <li className='text-lg sm:text-xl font-[500]'><strong>Color - </strong> {color}</li>
                </ul>
                <CarActionButtons />
            </div>
        </div>
    </div>
);

export default function Rental() {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    const openCalculator = () => {
        setIsCalculatorOpen(true);
    };

    const closeCalculator = () => {
        setIsCalculatorOpen(false);
    };

    return (
        <>
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <CarInfo 
                image={img}
                title="Maruti Suzuki Swift Lxi"
                model="2019"
                fuelVariant="Petrol"
                color="Grey"
            />
            <CarInfo 
                image={img2}
                title="Maruti Suzuki Swift Lxi"
                model="2020"
                fuelVariant="Petrol"
                color="White"
                reverse={true}
            />
            <CarInfo 
                image={img3}
                title="Maruti Suzuki Baleno Zeta"
                model="2023"
                fuelVariant="Petrol"
                color="Grey"
            />
            <CarInfo 
                image={img4}
                title="Maruti Suzuki Swift Lxi"
                model="2022"
                fuelVariant="Petrol"
                color="Blue"
                reverse={true}
            />
            <CarInfo 
                image={img5}
                title="Maruti Suzuki Baleno Sigma"
                model="2024"
                fuelVariant="Petrol"
                color="White"
            />
            <CarInfo 
                image={img6}
                title="Maruti Suzuki Eartiga"
                model="2017"
                fuelVariant="Petrol=CNG"
                color="Silver"
                reverse={true}
            />
            <CarInfo 
                image={img8}
                title="Maruti Suzuki Swift Lxi"
                model="2024"
                fuelVariant="Petrol"
                color="White"
            />
            <CarInfo 
                image={img9}
                title="Hyundai Aura S"
                model="2023"
                fuelVariant="Petrol=CNG"
                color="Silver"
                reverse={true}
            />
            <CarInfo 
                image={img10}
                title="Hyundai Nios"
                model="2024"
                fuelVariant="Petrol"
                color="Red"
            />
            <CarInfo 
                image={img11}
                title="Nissan Magnite"
                model="2022"
                fuelVariant="Petrol"
                color="White"
                reverse={true}
            />
            <CarInfo 
                image={img12}
                title="Hyundai Creta Sx"
                model="2017"
                fuelVariant="Diesel"
                color="White"
            />
            <CarInfo 
                image={img13}
                title="Tata Tiago"
                model="2023"
                fuelVariant="Petrol"
                color="White"
                reverse={true}
            />
            <CarInfo 
                image={img11}
                title="Nissan Magnite"
                model="2023"
                fuelVariant="Petrol"
                color="White"
            />
            <CarInfo 
                image={img14}
                title="Tata Punch"
                model="2023"
                fuelVariant="Petrol"
                color="White"
                reverse={true}
            />
            <CarInfo 
                image={img15}
                title="Tata Tigor"
                model="2022"
                fuelVariant="Petrol+CNG"
                color="Maroon"
            />
            <CarInfo 
                image={img16}
                title="Tata Altroz"
                model="2024"
                fuelVariant="Petrol"
                color="Blue"
                reverse={true}
            />
        </>
    );
}