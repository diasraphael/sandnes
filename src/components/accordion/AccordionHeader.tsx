import React from 'react';
import clsx from 'clsx';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

interface AccordionHeaderProps {
  header: () => JSX.Element;
  open: boolean;
  onClick: () => void;
  classNames?: string;
  disabled: boolean;
}

const AccordionHeader = ({
  open,
  header: HeaderComponent,
  onClick,
  disabled,
  classNames,
}: AccordionHeaderProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          'flex justify-between items-center w-full transition duration-300 cursor-pointer rounded-md text-sm relative',
          { 'font-bold': open },
          'hover:bg-day-light-3 bg-day-light-5 text-day-neutral-subtle'
        )}
      >
        <div className={clsx('w-full text-left z-0 py-2 px-3', classNames)}>
          <HeaderComponent></HeaderComponent>
        </div>
        {!disabled && (
          <div className="absolute right-0 px-3">
            {open ? <FaAngleDown /> : <FaAngleRight></FaAngleRight>}
          </div>
        )}
      </button>
    </>
  );
};

export default AccordionHeader;
