import React, { useCallback, useState } from 'react';
import { clsx } from 'clsx';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import Button from '../button/Button';

interface SliderContentProps {
  title: string;
  description: string;
}

const SliderContent = ({ title, description }: SliderContentProps) => {
  return (
    <div className="h-auto max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] px-4 pt-8 sm:pt-20 pb-20 min-h-screen text-center flex flex-col justify-center items-center mx-auto">
      <h1 className="text-white text-[40px] sm:text-[72px] lg:text-[115px] my-3 leading-[1.2em]">
        {title}
      </h1>
      <p className="max-w-[700px] text-white text-center mt-5 mb-10 font-['Jost'] text-base font-light leading-loose">
        {description}
      </p>
      <div className="mt-8">
        <Button label="Explore now"></Button>
      </div>
    </div>
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      className: 'bg-landing z-[100]',
      title: 'Faith Baptist Church Sandnes',
      description:
        'Faith Baptist Church welcomes everyone irrespective of the language, culture and religion. We love God. We are a group of tamil christians come together to worship Jesus and have fellowship. We would like to transform people and their lives by teaching them about Jesus.',
    },
    {
      className: 'bg-interior z-[100]',
      title: 'Oneness Gospel Nations',
      description:
        'And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it',
    },
    {
      className: 'bg-church z-[100]',
      title: 'Jesus-Way Truth Life',
      description:
        '“I am the way and the truth and the life. No one comes to the Father except through me” (John 14:6)',
    },
  ];

  const handleButtonClick = useCallback(
    (offset: number) => {
      setActiveIndex((prevIndex: number) => {
        let newIndex = prevIndex + offset;
        const slideCount = slides.length;

        if (newIndex < 0) {
          newIndex = slideCount - 1;
        } else if (newIndex >= slideCount) {
          newIndex = 0;
        }

        return newIndex;
      });
    },
    [slides.length]
  );

  return (
    <div className="w-full h-screen relative">
      <button
        onClick={() => handleButtonClick(-1)}
        className="absolute z-20 left-8 w-[50px] h-[50px] text-[#f5f3f1] border-[1px] border-[rgba(255, 255, 255, 0.5)] rounded-full transition-all bottom-[0%] text-5xl top-1/2 -translate-y-1/2 text-opacity-50 cursor-pointer px-2 bg-opacity-10 hover:text-white focus:text-white duration-300 focus:outline-black flex justify-center items-center hover:bg-[#832732] hover:border-[#832732]"
      >
        <HiArrowNarrowLeft size={18} />
      </button>
      <button
        onClick={() => handleButtonClick(1)}
        className="absolute z-20 right-8 w-[50px] h-[50px] text-[#f5f3f1] border-[1px] border-[rgba(255, 255, 255, 0.5)] rounded-full transition-all bottom-[0%] text-5xl top-1/2 -translate-y-1/2 text-opacity-50 cursor-pointer px-2 bg-opacity-10 hover:text-white focus:text-white duration-300 focus:outline-black flex justify-center items-center hover:bg-[#832732] hover:border-[#832732]"
      >
        <HiArrowNarrowRight size={18} />
      </button>
      <div className="m-0 p-0 relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx(
              'absolute inset-0 transition-opacity duration-500 ease-in-out delay-500',
              index === activeIndex ? 'opacity-1' : 'opacity-0'
            )}
          >
            <div
              className={clsx(
                'bg-[0% 0%], bg-[50%] bg-[auto], bg-[cover] block w-full h-full object-cover object-center',
                activeIndex === index ? 'opacity-100 transition-delay-0' : '',
                slide.className
              )}
            >
              <SliderContent
                title={slide.title}
                description={slide.description}
              ></SliderContent>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
