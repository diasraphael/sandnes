import React from 'react';
import logo from '/src/assets/logo.png';

const Header = () => {
  return (
    <div className="absolute flex flex-row justify-between items-center h-16 z-10 top-10 w-full">
      <div className="w-20 my-8 mx-16">
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex flex-row justify-center flex-1 text-white">
        <div className="mx-8 text-xl">Home</div>
        <div className="mx-8 text-xl">About us</div>
        <div className="mx-8 text-xl">Ministries</div>
        <div className="mx-8 text-xl">Gallery</div>
        <div className="mx-8 text-xl">Sermons</div>
      </div>
      <div className="hidden">
        <button>Dias</button>
      </div>
    </div>
  );
};
export default Header;
