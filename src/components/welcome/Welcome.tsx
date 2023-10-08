import React from 'react';
import church from '/src/assets/church-image.webp';

const Welcome = () => {
  return (
    <div className="w-full bg-[#f5f3f1]">
      <div className="py-28 px-10 max-w-7xl mx-auto flex flex-col items-center">
        <img
          src={church}
          alt="Image"
          className="h-full max-h-[300px] max-w-[350px] mb-8"
        />
        <h6 className="text-[#afafaf] tracking-wider mb-6 text-2xl">
          Welcome to Our Church
        </h6>
        <h3 className="text-[#231917] mt-4 font-cormorant-infant text-4xl font-normal max-w-5xl leading-[3rem] align-middle">
          "Our common creed is our belief in the Bible, our deep faith in Jesus
          Christ, and our acceptance of the unconditional love of God."
        </h3>
        <div className="text-[#832732] text-lg mt-4">Genesis 20:14 </div>
      </div>
    </div>
  );
};

export default Welcome;
