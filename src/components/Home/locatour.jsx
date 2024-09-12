import bg from '../../../public/Imgae/iindsechomebg.png';
import redfort from '../../../public/Imgae/red-fort.png';
import jantarmantar from '../../../public/Imgae/jantarmantar.png';
import delhi from '../../../public/Imgae/indiagate.png';

export default function LocalTour() {
    return (
        <>
            <style>
                {`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(-5%);
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        transform: translateY(0%);
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                }
                .animated-item {
                    animation: bounce 2s infinite;
                }
                `}
            </style>
            
            <div
                className="w-full flex justify-center items-center py-4 sm:py-6 md:py-8 flex-col"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center pb-4 sm:pb-5 md:pb-7">
                    Local Delhi Tour
                </h1>
                <div className="flex justify-center items-center gap-2 sm:gap-5 pb-4 sm:pb-6 md:pb-8">
                    <div className="animated-item w-28 sm:w-auto">
                        <img src={redfort} alt="redfort" className="w-28 sm:w-auto max-w-full h-auto" />
                        <div className="text-center bg-[#FFBE00] text-lg sm:text-xl md:text-2xl font-bold text-[#252525] py-1">
                            Red Fort
                        </div>
                    </div>
                    <div className="animated-item w-32 sm:w-auto">
                        <img src={jantarmantar} alt="jantarmantar" className="w-32 sm:w-auto max-w-full h-auto" />
                        <div className="text-center bg-[#FFBE00] text-lg sm:text-xl md:text-2xl font-bold text-[#252525] py-1">
                            Jantar Mantar
                        </div>
                    </div>
                    <div className="animated-item w-28 sm:w-auto">
                        <img src={delhi} alt="delhi" className="w-28 sm:w-auto max-w-full h-auto" />
                        <div className="text-center bg-[#FFBE00] text-lg sm:text-xl md:text-2xl font-bold text-[#252525] py-1">
                            India Gate
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}