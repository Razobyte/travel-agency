import banner from '../../../public/Imgae/gallerybanner.png'
import gallery from '../../../public/Imgae/gallery (25).png'
import gallery1 from '../../../public/Imgae/gallery (24).png'
import gallery2 from '../../../public/Imgae/gallery (23).png'
import gallery3 from '../../../public/Imgae/gallery (22).png'
import gallery4 from '../../../public/Imgae/gallery (21).png'
import gallery5 from '../../../public/Imgae/gallery (20).png'
import gallery6 from '../../../public/Imgae/gallery (19).png'
import gallery7 from '../../../public/Imgae/gallery (18).png'
import gallery8 from '../../../public/Imgae/gallery (17).png'
import gallery9 from '../../../public/Imgae/gallery (16).png'
import gallery10 from '../../../public/Imgae/gallery (15).png'
import gallery11 from '../../../public/Imgae/gallery (14).png'
import gallery12 from '../../../public/Imgae/gallery (13).png'
import gallery13 from '../../../public/Imgae/gallery (12).png'
import gallery14 from '../../../public/Imgae/gallery (11).png'
import gallery15 from '../../../public/Imgae/gallery (10).png'
import gallery16 from '../../../public/Imgae/gallery (9).png'
import gallery17 from '../../../public/Imgae/gallery (8).png'
import gallery18 from '../../../public/Imgae/gallery (7).png'
import gallery19 from '../../../public/Imgae/gallery (6).png'
import gallery20 from '../../../public/Imgae/gallery (5).png'
import gallery21 from '../../../public/Imgae/gallery (4).png'
import gallery22 from '../../../public/Imgae/gallery (3).png'
import gallery23 from '../../../public/Imgae/gallery (2).png'
import gallery24 from '../../../public/Imgae/gallery (1).png'
import gallery25 from '../../../public/Imgae/gallery 26.png'
import gallery26 from '../../../public/Imgae/gallery 27.png'

export default function Gallery(){
    const images = [
        gallery, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, 
        gallery10, gallery11, gallery12, gallery7,gallery8,gallery9 , gallery13,gallery14, gallery15, gallery16, gallery17, gallery18, 
        gallery19, gallery20, gallery21, gallery22, gallery23, gallery24,gallery25,gallery26,gallery2
    ];
    return(
        <>
        <div className="w-screen">
            <img src={banner} alt="banner" className='w-full' />
          

        </div>
        <div className='w-screen flex justify-center items-center flex-col py-12'>
        <h1 className='text-4xl font-[700] text-[#252525] pb-8'> Gallery</h1>
        <div className='max-w-6xl flex flex-wrap justify-center items-center gap-8'>

   

            {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery image ${index + 1}`} className='transition-transform duration-300 hover:scale-110 cursor-pointer' />
            ))}

            </div>

        </div>

        </>
    )
}