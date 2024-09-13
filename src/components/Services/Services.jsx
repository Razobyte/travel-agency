import banner from '../../../public/Imgae/services-banner.png';
import PremiumTempoExperience from '../Home/Tempo';
import ambulance from '../../../public/Imgae/ambulance.png';
import PremiumRentalExperience from '../Home/Rental';
import How from '../Home/How';
import FaqSection from '../Home/Faq';
import Testimonials from '../Home/Testominials';
import FormComponent from '../Formunderbanner';

export default function Services() {
    return (
        <>
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full object-cover' />
            </div>
            <PremiumTempoExperience />
            <div className="w-screen flex flex-col justify-center items-center bg-gray-200 p-4">
                <div className="max-w-6xl w-full flex flex-col md:flex-row gap-4 md:gap-16 items-center">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={ambulance} alt="ambulance" className="w-full max-w-sm h-auto object-contain" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-[#303030] text-2xl md:text-4xl font-extrabold">Discover Reliable DTS Tempo travellers</h1>
                        <p className="text-[#303030] text-base md:text-lg sm:my-3 my-1 font-medium">Access our tempo any time, day or night</p>
                        <h6 className="text-[#252525] font-semibold text-base md:text-lg mb-3">Tempo</h6>
                        <div className="sm:pt-6 pt-3">
                            <button className="bg-[#FF9307] font-bold text-base md:text-lg text-[#252525] px-4 md:px-6 py-2 mb-12 rounded">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
            <PremiumRentalExperience />
            <How />
            <FaqSection />
            <Testimonials />
            
        </>
    )
}
