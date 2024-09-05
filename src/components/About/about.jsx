
import banner from '../../../public/Imgae/aboutbanner.png';
import taxi from '../../../public/Imgae/taxi-driver.png';
import vision from '../../../public/Imgae/vision.png'
import ser1 from '../../../public/Imgae/ser (6).png';
import ser3 from '../../../public/Imgae/ser (4).png';
import ser4 from '../../../public/Imgae/ser (3).png';
import ser5 from '../../../public/Imgae/ser (2).png';
import ser6 from '../../../public/Imgae/ser (1).png';
import aboutse1 from '../../../public/Imgae/aboutsec (1).png';
import aboutse2 from '../../../public/Imgae/aboutsec (2).png';
import aboutse3 from '../../../public/Imgae/aboutsec (3).png';
import aboutse4 from '../../../public/Imgae/aboutsec (4).png';
import aboutse5 from '../../../public/Imgae/aboutsec (5).png'
import Services from './services';
import How from '../Home/How';

export default function About() {
    return (
        <>
            <div className="w-screen">
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <div className='w-screen flex items-center justify-center'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>About DTS</h1>
                        <div className='text-md text-[#252525] font-normal'>Welcome to DTS, where your journey is our priority. Our story began in 2011
                            with a simple yet ambitious goal: to provide reliable, safe, and comfortable
                            transportation solutions. From our humble beginnings, we have grown steadily,
                            driven by a commitment to exceptional service and customer satisfaction.</div>

                        <div className='text-md text-[#252525] font-normal pt-1'>
                            In our early years, we focused on building a foundation of trust with our
                            customers. We listened to their needs, ensured their safety, and delivered
                            comfort in every ride. As word spread, so did our reputation, and we quickly
                            became a trusted name in the industry.

                        </div>
                        <div className='text-md text-[#252525] font-normal pt-1'>
                            Today, our mission is to redefine your travel experience. We continually strive
                            to exceed your expectations with our unwavering dedication to providing
                            top-notch service. When you choose DTS, you're choosing a company that values
                            your journey as much as you do.
                        </div>
                        <div className='text-md text-[#252525] font-normal pt-1'>
                            Discover why 100 of travelers trust DTS for their transportation needs.
                            Your satisfaction is our destination.
                        </div>

                    </div>
                    <div className='w-full'>
                        <img src={taxi} alt="taxi" className='max-w-full h-auto' />
                    </div>
                </div>

            </div>
            <div className='w-screen flex items-center justify-center bg-[#D9D9D9]'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <img src={vision} alt="vision" className='max-w-full h-auto' />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>Our Vision</h1>
                        <div className='text-md text-[#252525] font-normal'>
                            At DTS our vision is to set new standards in the transportation
                            sector by combining innovation, efficiency, and sustainability. We aim to be
                            the leading cab service provider, known for our exceptional service quality,
                            reliability, and commitment to environmental responsibility.</div>
                    </div>

                </div>

            </div>
            <div className='w-screen flex items-center justify-center bg-white'>
                <div className='max-w-6xl py-12'>
                    <h1 className='text-4xl font-[700] py-5 text-[#252525]'>Our Services</h1>
                    <div className='flex flex-col gap-6'>
                        <Services
                            imgSrc={ser1}
                            title="City Rides"
                            description="Whether you need a quick ride across town or a comfortable commute to work, our city ride service ensures you get to your destination swiftly and safely."
                        />
                        <Services
                            imgSrc={ser3}
                            title="Airport Transfers"
                            description="We understand the importance of timely airport transfers. Our punctual and professional drivers ensure you never miss a flight and always arrive relaxed."
                        />
                        <Services
                            imgSrc={ser4}
                            title="Corporate Travel"
                            description="We provide tailored solutions for corporate clients, offering reliable and efficient transportation services to meet your business needs."
                        />
                        <Services
                            imgSrc={ser5}
                            title="Long Distance Journeys"
                            description="Planning a trip out of town? Our well-maintained fleet and experienced drivers make long-distance travel a breeze."
                        />
                        <Services
                            imgSrc={ser6}
                            title="Special Occasions"
                            description="From weddings to parties, we add a touch of elegance to your special occasions with our premium cab services."
                        />
                    </div>
                </div>
            </div>
            <div className='w-screen flex items-center justify-center'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>Our Fleet</h1>

                        <div className='text-md text-[#252525] font-normal'>Our diverse fleet of vehicles is equipped with modern amenities to ensure a
                            comfortable and enjoyable ride. From eco-friendly hybrids to luxurious
                            sedans, we have the perfect vehicle for every occasion.</div>
                    </div>
                    <div className='w-full'>
                        <img src={aboutse5} alt="taxi" className='max-w-full h-auto' />
                    </div>
                </div>

            </div>
            <div className='w-screen flex items-center justify-center bg-[#D9D9D9]'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <img src={aboutse4} alt="vision" className='max-w-full h-auto' />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>Our Drivers</h1>
                        <div className='text-md text-[#252525] font-normal'>
                            Our drivers are the backbone of DTS Professionally trained,
                            courteous, and knowledgeable, they prioritize your safety and comfort. With a
                            deep understanding of the city’s routes and traffic patterns, they ensure you
                            reach your destination on time, every time.</div>
                    </div>

                </div>

            </div>
            <div className='w-screen flex items-center justify-center'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>Safety and Reliability</h1>

                        <div className='text-md text-[#252525] font-normal'>Your safety is paramount at DTS. Our vehicles undergo regular
                            maintenance checks and are equipped with advanced safety features. We
                            adhere to stringent safety protocols to provide you with a secure travel
                            experience.</div>
                    </div>
                    <div className='w-full'>
                        <img src={aboutse3} alt="taxi" className='max-w-full h-auto' />
                    </div>
                </div>

            </div>
            <div className='w-screen flex items-center justify-center bg-[#D9D9D9]'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <img src={aboutse2} alt="vision" className='max-w-full h-auto' />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>Sustainability</h1>
                        <div className='text-md text-[#252525] font-normal'>
                            We are committed to reducing our carbon footprint. By incorporating eco-
                            friendly practices and maintaining a fleet of fuel-efficient vehicles, we strive
                            to contribute positively to the environment.</div>
                    </div>

                </div>

            </div>
            <div className='w-screen flex items-center justify-center'>
                <div className='max-w-6xl flex gap-12 items-center justify-center py-12'>
                    <div className='w-full'>
                        <h1 className='text-4xl font-[700] py-5 color-[#252525]'>Customer Satisfaction</h1>

                        <div className='text-md text-[#252525] font-normal'>At DTS we believe in building lasting relationships with our
                            customers. Our dedicated customer support team is available 24/7 to assist
                            you with your bookings and inquiries, ensuring a seamless and pleasant
                            experience from start to finish.</div>
                    </div>
                    <div className='w-full'>
                        <img src={aboutse1} alt="taxi" className='max-w-full h-auto' />
                    </div>
                </div>

            </div>
            <How/>
   


        </>
    )
}