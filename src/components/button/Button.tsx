import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'z-20 bg-[#832732] hover:bg-[#231917] tracking-[.7px] text-[#f9f9fa] text-lg text-center px-6 py-4 transition-all duration-300 inline-block hover:text-white',
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
