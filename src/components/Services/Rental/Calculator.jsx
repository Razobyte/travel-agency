import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function Calculator() {
    const rates = [
        { period: 10, rate: 1200, unit: 'hour', rateunit: "INR" },
        { period: 16, rate: 1500, unit: 'hour', rateunit: "INR" },
        { period: 24, rate: 2400, unit: 'hour', rateunit: "INR" },
        // { period: 16, rate: 2400, unit: 'hour', rateunit: "INR" },
    ];
    const check = [
        'Free cancellation (48h)',
        'Fuel Policy: same-to-same',
        'Unlimited mileage included',
        'Collision damage waiver',
    ];

    return (
        <div className="w-full flex justify-center items-center h-full px-2">
            <div className=" max-w-full border border-gray-500 shadow-lg">
                <div className="grid grid-cols-2 items-center bg-[#FF9307]">
                    <div className="bg-[#FF9307] text-center border-r border-gray-400 text-[#252525] font-bold py-3 px-4 text-xl">
                        Short Period Times
                    </div>
                    <div className="bg-[#FF9307] text-center text-[#252525] font-bold py-3 px-4 text-xl">
                        Rates
                    </div>
                </div>
                {rates.map((item, index) => (
                    <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-[#303030]'}`}>
                        <div className={`py-2 px-4 text-center ${index % 2 === 0 ? 'text-[#303030] border-r border-gray-400 font-bold' : 'text-[#FF9307] font-bold'}`}>
                            {`${item.period} ${item.unit}`}
                        </div>
                        <div className={`py-2 px-4 text-center font-bold ${index % 2 === 0 ? 'text-black' : 'text-[#FF9307]'}`}>
                            {`${item.rate} ${item.rateunit}`}
                        </div>
                    </div>
                ))}
                <div className='flex flex-col justify-center items-center bg-gray-100 p-4'>
                    <h3 className='text-lg font-bold text-[#353535] text-center pb-3'>For Your Note</h3>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {check.map((item, index) => (
                            <div key={index} className='flex items-center'>
                                <FaCheck className='text-green-700 mr-1' size={14}/>
                                <span className='text-sm text-[#303030]'>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}