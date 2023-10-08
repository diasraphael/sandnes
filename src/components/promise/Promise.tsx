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
          Our Lord's Promise 2023
        </div>
        <div className="text-[#231917] mt-4 font-cormorant-infant text-4xl font-normal max-w-5xl leading-[3rem] align-middle">
          Look, there on the mountains, the feet of one who brings good news,
          who proclaims peace! Celebrate your festivals, Judah, and fulfill your
          vows. No more will the wicked invade you; they will be completely
          destroyed.
        </div>
        <div className="text-[#832732] text-lg mt-4">Nahum 1:15</div>
      </div>
    </div>
  );
};

export default Promise;
