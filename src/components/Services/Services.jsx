import banner from '../../../public/Imgae/services-banner.png';
import PremiumTempoExperience from '../Home/Tempo';
import ambulance from '../../../public/Imgae/ambulance.png'
import PremiumRentalExperience from '../Home/Rental';
import How from '../Home/How';
import FaqSection from '../Home/Faq';
import Testimonials from '../Home/Testominials';
import FormComponent from '../Formunderbanner';

export default function Services() {
    return (
        <>
            <div className='w-screen'>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <PremiumTempoExperience/>
            <div className="w-screen flex flex-col justify-center items-center  bg-gray-200">
            <div className="max-w-6xl flex gap-40 ">
               <div className="flex items-center">
                  <img src={ambulance} alt="ambulance" className="max-w-full h-full" />
               </div>
               <div className="pt-8">
                  <h1 className="text-[#303030] text-4xl font-extrabold">Discover Reliable
                     DTS Tempo travellers</h1>
                  <p className="text-[#303030] text-lg my-3 font-medium">Access our tempo any time, day or night</p>
                  <h6 className="text-[#252525] font-semibold text-lg mb-3">Tempo</h6>
                  <div className="pt-6">
                     <button className="bg-[#FF9307] font-bold text-lg text-[#252525] px-6 py-2 mb-12 ">Know More</button>
                  </div>
               </div>

            </div>

         </div>
         <PremiumRentalExperience/>
      <How/>
      <FaqSection/>
      <Testimonials/>
      <FormComponent/>



        </>
    )
}