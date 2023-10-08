import React from 'react';
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { FaYoutube } from 'react-icons/fa6';

import Button from '../button/Button';
import Input from '../text-input/Input';
const Footer = () => {
  return (
    <div className="w-full bg-[#e1dbcb]">
      <div className="p-16 max-w-7xl mx-auto">
        <div className="flex flex-col bg-footer bg-[0% 0%], bg-[50%] bg-[auto], bg-[cover]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 max-w-[350px]">
              <h1 className="text-2xl mb-8">Faith Baptist Church</h1>
              <div className="text-lg">
                Our Church is a family — a place you can call home. It’s where
                you can find hope, healing, and purpose.
              </div>
              <div className="flex gap-6 items-center cursor-pointer my-8">
                <CgFacebook
                  fontSize={18}
                  className="hover:text-[#832732]"
                ></CgFacebook>
                <CgInstagram
                  fontSize={18}
                  className="hover:text-[#832732]"
                ></CgInstagram>
                <FaYoutube
                  fontSize={18}
                  className="hover:text-[#832732]"
                ></FaYoutube>
              </div>
            </div>
            <div className="text-lg">
              <h1 className="text-2xl mb-8">Visit us</h1>
              <p>Faith Baptist Church</p>
              <p>Sandnes</p>
              <p>Norway</p>
              <p>Email: paulkalai@gmail.com</p>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl mb-8">Stay Tuned</h1>
              <div className="mb-4 text-lg">
                Subscribe to our newsletter and never miss our news
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center  gap-8">
                <Input></Input>
                <Button label="Subscribe" className="px-20"></Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-20">
            <div className="flex flex-col">
              <div className="text-lg">
                All Rights Reserved, Faith Baptist Church, Sandnes. 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
