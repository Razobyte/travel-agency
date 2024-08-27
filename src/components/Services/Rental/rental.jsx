
import banner from '../../../../public/Imgae/rentalbanner.png'
import img from '../../../../public/Imgae/maruti.png'
import img2 from '../../../../public/Imgae/maruti2.png'
import img3 from '../../../../public/Imgae/maruti3.png'
import img4 from '../../../../public/Imgae/maruti4.png'
import img5 from '../../../../public/Imgae/maruti5.png'
import img6 from '../../../../public/Imgae/maruti6.png'
import img8 from '../../../../public/Imgae/maruti8.png'
import img9 from '../../../../public/Imgae/maruti9.png'
import img10 from '../../../../public/Imgae/maruti10.png'
import img11 from '../../../../public/Imgae/maruti11.png'
import img12 from '../../../../public/Imgae/maruti12.png'
import img13 from '../../../../public/Imgae/maruti13.png'
import img14 from '../../../../public/Imgae/maruti14.png'
import img15 from '../../../../public/Imgae/maruti15.png'
import img16 from '../../../../public/Imgae/maruti16.png'
import Calculator from './Calculator'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import CarActionButtons from '../Button'

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
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Swift Lxi</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2019</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong> Grey</li>
                        </ul>
                        <CarActionButtons/>
                        
                  
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Swift Lxi</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2020</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong> White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img2}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img3}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Baleno Zeta</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2023</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong> Grey</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Swift Lxi</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2022</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>Blue</li>
                        </ul>
                        <CarActionButtons/>
                       
                

                  
                    </div>
                    <div className="w-screen">
                        <img
                            src={img4}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img5}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Baleno Sigma</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2024</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Eartiga</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2017</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol=CNG</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>Silver</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img6}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img8}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Maruti Suzuki Swift Lxi</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2024</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Hyundai Aura S</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2023</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant -</strong> Petrol=CNG</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>Silver</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img9}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img10}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Hyundai Nios</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2024</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong> Red</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Nissan Magnite</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2022</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant -  </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img11}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img12}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Hyundai Creta Sx</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2017</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong>Diesel</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Tata Tiago</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2023</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img13}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img11}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Nissan Magnite</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2023</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong>Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                        
                        
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">

                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Tata Punch</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2023</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>White</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img14}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-screen">
                        <img
                            src={img15}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Tata Tigor</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className=' text-xl font-[500]'><strong>Model -</strong> 2022</li>
                            <li className=' text-xl font-[500]'><strong>Fuel Variant - </strong>Petrol+CNG</li>
                            <li className=' text-xl font-[500]'><strong>Color - </strong>Maroon</li>
                        </ul>
                        <CarActionButtons/>
                     
                        
                    </div>
                </div>
               
            </div>
            <div className="w-screen flex justify-center items-center py-12">
                <div className="max-w-6xl flex justify-center items-center gap-8">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Tata Altroz</h2>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                            <li className='text-xl font-[500]'><strong>Model -</strong> 2024</li>
                            <li className='text-xl font-[500]'><strong>Fuel Variant - </strong> Petrol</li>
                            <li className='text-xl font-[500]'><strong>Color - </strong>Blue</li>
                        </ul>
                        <CarActionButtons/>
                    </div>
                    <div className="w-screen">
                        <img
                            src={img16}
                            alt="Maruti Suzuki Swift Lxi"
                            className='max-w-full h-auto'
                        />
                    </div>
                </div>
            </div>
            {/* <Calculator/>
            <FormComponent/> */}
            
        </>
    );
}
