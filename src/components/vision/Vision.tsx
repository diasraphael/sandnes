import React from 'react';
import ControlledAccordions from '../material/accordion/Accordion';

const Vision = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full flex flex-col md:flex-row items-center ga7p-8">
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
        <div className="relative my-20 w-full py-28">
          <img
            src="/src/assets/pray.webp"
            className=" objec-cover"
            alt="pray"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
