import React from 'react';
import pray from '/src/assets/pray.webp';
import ControlledAccordions from '../material/accordion/Accordion';

const Vision = () => {
  return (
    <div className="w-full bg-white">
      <div className="px-20 py-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <div className="relative my-20">
            <div>
              <div className="text-[#afafaf] tracking-wider mb-6 text-2xl leading-1.4em">
                It's important
              </div>
              <div className="text-[#231917] capitalize my-[10px] font-cormorant-infant text-[48px] font-normal">
                A Church That Loves God
              </div>
              <div className="text-[#231917] mb-10 font-jost text-xl font-light leading-[1.5rem]">
                Worry Ends When Faith Begins. The Magnificent Story of a
                Life-Changing Journey to God.
              </div>
              <ControlledAccordions></ControlledAccordions>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:py-20 lg:my-28">
          <img src={pray} className=" objec-cover" alt="pray" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
