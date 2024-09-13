import React, { useState, useCallback, useEffect } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline, IoCloseOutline } from 'react-icons/io5';
import banner from '../../../public/Imgae/gallerybanner.png';
import gallery from '../../../public/Imgae/gallery (25).png';
import gallery1 from '../../../public/Imgae/gallery (24).png';
import gallery2 from '../../../public/Imgae/gallery (23).png';
import gallery3 from '../../../public/Imgae/gallery (22).png';
import gallery4 from '../../../public/Imgae/gallery (21).png';
import gallery5 from '../../../public/Imgae/gallery (20).png';
import gallery6 from '../../../public/Imgae/gallery (19).png';
import gallery7 from '../../../public/Imgae/gallery (18).png';
import gallery8 from '../../../public/Imgae/gallery (17).png';
import gallery9 from '../../../public/Imgae/gallery (16).png';
import gallery10 from '../../../public/Imgae/gallery (15).png';
import gallery11 from '../../../public/Imgae/gallery (14).png';
import gallery12 from '../../../public/Imgae/gallery (13).png';
import gallery13 from '../../../public/Imgae/gallery (12).png';
import gallery14 from '../../../public/Imgae/gallery (11).png';
import gallery15 from '../../../public/Imgae/gallery (10).png';
import gallery16 from '../../../public/Imgae/gallery (9).png';
import gallery17 from '../../../public/Imgae/gallery (8).png';
import gallery18 from '../../../public/Imgae/gallery (7).png';
import gallery19 from '../../../public/Imgae/gallery (6).png';
import gallery20 from '../../../public/Imgae/gallery (5).png';
import gallery21 from '../../../public/Imgae/gallery (4).png';
import gallery22 from '../../../public/Imgae/gallery (3).png';
import gallery23 from '../../../public/Imgae/gallery (2).png';
import gallery24 from '../../../public/Imgae/gallery (1).png';
import gallery25 from '../../../public/Imgae/gallery 26.png';
import gallery26 from '../../../public/Imgae/gallery 27.png';

export default function Gallery() {
    const images = [
        gallery, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
        gallery10, gallery11, gallery12, gallery7, gallery8, gallery9, gallery13,
        gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20,
        gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery2
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeModal();
    }, [prevImage, nextImage, closeModal]);

    useEffect(() => {
        if (modalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown, modalOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <div className="w-screen">
                <img src={banner} alt="banner" className="w-full" />
            </div>
            <div className="w-screen flex justify-center items-center flex-col lg:py-12 md:py-6 py-4">
                <h1 className='sm:text-3xl text-xl lg:text-4xl font-bold text-[#252525] sm:pb-8 pb-4'>
                    Gallery
                </h1>
                <div className="max-w-6xl grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:px-0 px-2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="transition-transform duration-300 hover:scale-110 cursor-pointer md:max-w-full md:h-auto  w-32 h-32 object-cover"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleBackdropClick}
                >
                    <div className="relative max-w-2xl w-full md:px-0 px-3">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-gray-800 bg-opacity-50 rounded-full p-2"
                        >
                            <IoCloseOutline size={24} />
                        </button>
                        <img
                            src={images[currentImageIndex]}
                            alt={`Large gallery image ${currentImageIndex + 1}`}
                            className="md:w-full md:h-[650px] object-cover w-full h-40"
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-gray-800 bg-opacity-50 rounded-full p-2"
                        >
                            <IoChevronBackOutline size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-gray-800 bg-opacity-50 rounded-full p-2"
                        >
                            <IoChevronForwardOutline size={24} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
