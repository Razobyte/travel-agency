import mountains from '../../../public/Imgae/mountains.png';
import plains from '../../../public/Imgae/plains.png';
import Desserts from '../../../public/Imgae/Deserts.png';



export default function Explore() {
    return (
        <>
            <div className="w-screen flex justify-center items-center py-8 flex-col">
                <h1 className='text-4xl text-[#252525] font-[700] text-center pb-9'>Explore With DTS</h1>
                <div className='w-max-6xl flex justify-center align-items-center gap-5 '>
                    <div style={{ backgroundImage: `url(${mountains})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: '350px', maxHeight: "400px", minHeight: "300px" }} className="py-5 flex flex-col justify-center align-items-center  hover:scale-105 transition-transform duration-300" >
                        <div>
                            <div className='text-center bg-black bg-opacity-[30%] text-2xl font-[700] text-[#fff] py-1'>Mountains</div>
                            <div className='flex justify-center items-center  relative'>
                                <button className=' absolute text-[#252525] text-xl font-bold bg-[#FF9307] px-5 rounded-lg py-1 text-center mt-40'>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 flex flex-col justify-center align-items-center hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${Desserts})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: '350px', maxHeight: "400px", minHeight: "300px" }}>
                        <div>
                            <div className=' text-center bg-black bg-opacity-[30%] text-2xl font-[700] text-[#fff] py-1'>Deserts</div>
                            <div className='flex justify-center items-center  relative'>
                                <button className=' absolute text-[#252525] text-xl font-bold bg-[#FF9307] px-5 rounded-lg py-1 text-center mt-40'>Explore More</button>
                            </div>
                        </div>

                    </div>
                    <div className="py-5 flex flex-col justify-center align-items-center hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${plains})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: '350px', maxHeight: "400px", minHeight: "300px" }}>
                        <div>
                            <div className='text-center bg-black bg-opacity-[40%] text-2xl font-[700] text-[#fff] py-1'>Plains</div>
                            <div className='flex justify-center items-center  relative'>
                                <button className=' absolute text-[#252525] text-xl font-bold bg-[#FF9307] px-5 rounded-lg py-1 text-center mt-40'>Explore More</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}