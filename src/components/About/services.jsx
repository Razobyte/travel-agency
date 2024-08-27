
export default function Services({ imgSrc, title, description }) {
    return (
        <>
            <div className='flex items-center '>
                <div className="bg-[#FF9307] flex items-center  h-28  px-4 rounded-l-xl cursor-pointer">
                    <img src={imgSrc} alt={title} className='w-16 h-14' />
                </div>
                <div className="bg-[#D9D9D9]  h-28 flex items-center w-[100%] px-4  cursor-pointer rounded-r-xl">
                    <h2 className='text-xl font-bold'>{title} - <span className="text-md font-normal">{description}</span>

                    </h2>
                   
                </div>
            </div>
        </>
    )
}