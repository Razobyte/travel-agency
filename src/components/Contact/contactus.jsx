import banner from '../../../public/Imgae/contact.png';
import ContactForm from './Form';

export default function ContactUs() {
    return (
        <>
            {/* Banner Section */}
            <div className="w-screen">
                <img src={banner} alt="Contact Us Banner" className='w-full h-auto' />
            </div>

            {/* Contact Form Section */}
            <div className="w-screen  justify-center items-center py-12 px-4">
                <div className="max-w-4xl w-full">
                    <ContactForm />
                </div>
            </div>

            {/* Google Map Section */}
            <div className="w-screen flex justify-center items-center lg:py-12 sm:py-6 py-4 px-4">
                <div className="relative w-full max-w-6xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28066.430609411855!2d76.9677412740368!3d28.440256235729084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17b181127475%3A0xd7cebca45f848bbf!2sSignature%20The%20Millennia2%20sector%2037d%20Gurgaon!5e0!3m2!1sen!2sin!4v1722330910869!5m2!1sen!2sin"
                        loading="lazy"
                        title="Google Maps Location"
                        className="w-full h-64 sm:h-80 lg:h-[500px] rounded-xl"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
