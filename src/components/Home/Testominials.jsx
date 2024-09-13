import React from 'react';
import { FaStar } from 'react-icons/fa';
import bg from '../../../public/Imgae/testominilasbg.png';
import testominials1 from '../../../public/Imgae/testominals1 (1).png';
import testominials2 from '../../../public/Imgae/testominals1 (2).png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import icon from '../../../public/Imgae/thumb.png'

const TestimonialCard = ({ name, image, rating, review }) => (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md h-auto sm:h-64 relative">
        <div className="flex flex-col sm:flex-row items-center mb-4">
            <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4 mb-2 sm:mb-0" />
            <div>
                <h3 className="font-bold text-lg text-center sm:text-left">{name}</h3>
                <div className="flex justify-center sm:justify-start text-[#FF9307]">
                    {[...Array(rating)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
            </div>
            <div className='absolute top-2 right-2 sm:top-6 sm:right-6'>
                <img src={icon} alt="thumb" className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">{review}</p>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Bizzare Dreams",
            image: testominials2,
            rating: 5,
            review: "I recently booked their services for wedding in triyuginarayan temple uttarakhand ...very supportive ..no hassels ...very good experience and would highly recomend them for any good travel experience ."
        },
        {
            name: "Pawan Kumar",
            image: testominials1,
            rating: 5,
            review: "It's been an amazing experience with Dasmesh Travel Services. Recently we had a Trip to Nanital, the CAB Driver was too supportive and skilled. We enjoyed it a lot. We will look forward to availing the Car Rental Service by Dasmesh Travel in future."
        },
        {
            name: "Pawan Kumar",
            image: testominials1,
            rating: 5,
            review: "It's been an amazing experience with Dasmesh Travel Services. Recently we had a Trip to Nanital, the CAB Driver was too supportive and skilled. We enjoyed it a lot. We will look forward to availing the Car Rental Service by Dasmesh Travel in future."
        },
    ];

    return (
        <div className="w-full py-12 sm:py-16 bg-cover bg-center bg-no-repeat flex justify-center flex-col items-center"
            style={{ backgroundImage: `url(${bg})` }}>
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-white">What People say about us?</h2>
                <p className="text-center mb-8 sm:mb-12 text-white text-sm sm:text-base">Discover what our customers think about us</p>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;