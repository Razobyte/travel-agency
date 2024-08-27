import bg from '../../../public/Imgae/bookbg.png';

export default function BookCab() {
    return (
        <>
            <div
                className='w-screen flex flex-col justify-center items-center py-12'
                style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                 <div>
                 <h1 className='text-white text-4xl  font-bold text-left pb-8'>BOOK A CAB</h1>
                 </div>
                
                <div className='w-screen flex flex-col sm:flex-row justify-evenly items-center  p-6 rounded-lg shadow-md'>
               
                  
                    <div className='flex flex-col items-start sm:items-center mb-4 sm:mb-0'>
                        
                    
                        <input
                            type='text'
                            placeholder='Pickup Date & Time*'
                            className='py-3 px-12  border border-gray-300 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col items-start sm:items-center mb-4 sm:mb-0'>
                        <input
                            type='text'
                            placeholder='Drop off Date & Time*'
                            className='py-3  px-12 border border-gray-300 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 focus:outline-none'
                        />
                    </div>
                    <div>
                        <button className='bg-orange-500 text-white py-3 px-12  shadow-md hover:bg-orange-600'>
                            Submit Inquiry
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
