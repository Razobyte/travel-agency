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

    <div className="bg-white rounded-2xl p-6 shadow-md h-64">
        <div className="flex items-center mb-4">
            <img src={image} alt={name} className="max-w-full rounded-full mr-4" />
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="flex text-[#FF9307]">
                    {[...Array(rating)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <div className='absolute top-10 right-10'>
                    <img src={icon} alt="thumb" className='max-w-full h-10 ' />
                </div>
            </div>
        </div>
        <p className="text-gray-600">{review}</p>
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
        <div className="w-screen py-16 bg-cover bg-center bg-no-repeat flex justify-center flex-col items-center"
            style={{ backgroundImage: `url(${bg})` }}>
            <div className="max-w-6xl px-4">
                <h2 className="text-4xl font-bold text-center mb-2 text-white">What People say about us?</h2>
                <p className="text-center mb-12 text-white" >Discover what our customers think about us</p>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    modules={[Autoplay, Pagination,Navigation]}
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
