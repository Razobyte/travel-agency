import taxi from '../../../public/Imgae/taxi.png'
import customer from '../../../public/Imgae/rating_.png'
import car from '../../../public/Imgae/car_.png'
import del from '../../../public/Imgae/delivery-truck.png'
import iso from '../../../public/Imgae/iso-symbol.png'




export default function Delivers(){
    return(
        <>
        <div className="w-screen bg-gray-200 md:flex hidden justify-center items-center py-12 flex-col">
        <h1 className="text-4xl text-[#252525] font-[700] text-center pb-8">What We Delivers</h1>
            <div className="max-w-6xl flex justify-center items-center gap-8">
            <div className='bg-white py-6 px-16 w-full flex justify-center items-center flex-col rounded-lg shadow transition-transform duration-300 hover:rotate-6 cursor-pointer'>

                    <img src={customer} alt="customer"  className='max-w-full h-auto' />
                    <h6 className='text-lg font-semibold text-center pt-3'>Customer  <br/>
                    Satisfaction</h6>
                </div>
                <div className='bg-white py-6  px-16 w-full flex justify-center items-center flex-col rounded-lg shadow transition-transform duration-300 hover:rotate-6 cursor-pointer' >
                    <img src={car} alt="car"  className='max-w-full h-auto' />
                    <h6 className='text-lg font-semibold text-center'> Maintained Fleet</h6>
                </div>
                <div className='bg-white py-6   px-16 w-full flex justify-center items-center flex-col rounded-lg shadow transition-transform duration-300 hover:rotate-6 cursor-pointer'  >
                    <img src={taxi} alt="taxi"  className='max-w-full h-auto' />
                    <h6 className='text-lg font-semibold text-center'>24x7 Operations</h6>
                </div>
                <div  className='bg-white py-6  px-16 w-full flex justify-center items-center flex-col rounded-lg shadow transition-transform duration-300 hover:rotate-6 cursor-pointer' >
                    <img src={del} alt="del"  className='max-w-full h-auto' />
                    <h6 className='text-lg font-semibold text-center'>GPS Tracking</h6>
                </div>
                <div className='bg-white py-6  px-16 w-full flex justify-center items-center flex-col rounded-lg shadow transition-transform duration-300 hover:rotate-6 cursor-pointer' >
                    <img src={iso} alt="iso"  className='max-w-full h-auto' />
                    <h6 className='text-lg font-semibold text-center'>ISO Certified</h6>
                </div>
               

            </div>

        </div>

        </>
    )
}