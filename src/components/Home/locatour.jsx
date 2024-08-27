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
            animation: bounce 2s infinite; /* Adjust timing as needed */
          }
        `}
            </style>

            <div
                className="w-screen flex justify-center items-center py-8 flex-col"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <h1 className="text-4xl text-white font-[700] text-center pb-7">
                    Local Delhi Tour
                </h1>
                <div className="flex justify-center align-items-center gap-5 pb-8">
                    <div className="animated-item">
                        <img src={redfort} alt="redfort" className="max-w-full" />
                        <div className="text-center bg-[#FFBE00] text-2xl font-[700] text-[#252525] py-1">
                            Red Fort
                        </div>
                    </div>
                    <div className="animated-item">
                        <img src={jantarmantar} alt="jantarmantar" className="max-w-full" />
                        <div className="text-center bg-[#FFBE00] text-2xl font-[700] text-[#252525] py-1">
                            Jantar Mantar
                        </div>
                    </div>
                    <div className="animated-item">
                        <img src={delhi} alt="delhi" className="max-w-full" />
                        <div className="text-center bg-[#FFBE00] text-2xl font-[700] text-[#252525] py-1">
                            India Gate
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
