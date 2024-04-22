import React from 'react';
import promise from '/src/assets/promise.webp';

const Promise = () => {
  return (
    <div className="w-full bg-[#f5f3f1]">
      <div className="px-16 py-24 max-w-7xl mx-auto flex flex-col items-center">
        <img
          src={promise}
          alt="promise"
          className="h-full max-h-[300px] max-w-[350px] mb-8"
        />
        <div className="text-[#afafaf] tracking-wider mb-6 text-2xl">
          Our Lord's Promise 2024
        </div>
        <div className="text-[#231917] mt-4 font-cormorant-infant text-4xl font-normal max-w-5xl leading-[3rem] align-middle">
          "Enlarge the place of your tent, stretch your tent curtains wide, do
          not hold back; lengthen your cords, strengthen your stakes"
        </div>
        <div className="text-[#832732] text-lg mt-4">Isaiah 54:2</div>
      </div>
    </div>
  );
};

export default Promise;
