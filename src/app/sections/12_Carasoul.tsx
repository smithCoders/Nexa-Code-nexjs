"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GoDot } from 'react-icons/go';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import img from "../data/carasoul";
import iconImage from "../assets/Ellipse 902.png";


type Image = {
  src: string;
  alt: string;
};

const CarasoulPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
  };

  return (
   <section className=" bg-[#000] pt-[125px] pb-[160px] mt-10 r overflow-hidden relative ">
     {/* Portfolio heading */}
      <h2 className="text-[#fff] text-[50px] text-center font-bold tracking-[-1.5px] mb-8">
        포트폴리오
      </h2>
  {/* Navigation with right and left icons */}
 
      {/* <div className="absolute inset-0 flex items-center justify-between p-16"> */}
      
    <div className="absolute right-4 top-1/2 transform -translate-x-0 -translate-y-1/2" onClick={handleRightClick}>
      <Image src={iconImage} alt="ellipse-image" className="w-11 h-11 rounded-full relative border border-slate-300" />
      <p className={"text-[35px] font-normal  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}> {`>`} </p>
      {/* <FaChevronRight size={24} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" /> */}
    </div>
    <div className="absolute left-4 top-1/2 transform -translate-x-0 -translate-y-1/2" onClick={handleLeftClick}>
      <Image src={iconImage} alt="ellipse-image" className="w-12 h-12 rounded-full relative border border-slate-300" />
      <p className={"text-[30px] font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}> {`<`} </p>
      {/* <FaChevronRight size={24} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" /> */}
    </div>
    
  {/* </div> */}

     {/* Carousel container with individual image divs */}
      <div className="  flex items-center justify-center transition-opacity duration-300">
        <div className="carousel">
          {img.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                width={230}
                height={300}
                alt={image.alt}
                style={{ margin: '0 6px', borderRadius: '10px' }}
                className={`inline-block p-4 rounded-[15px] `} 
              />
            </div>
          ))}
        </div>
      </div>
    {/* Navigation with right and left icons */}

   
  
  {/* </div> */}

     

      {/* Pagination dots */}
{/* Pagination dots */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
  <div className="flex items-center justify-center gap-3">
    {img.map((_, index) => (
      <div
        key={index}
        className={`transition-all w-3 h-3 p-1 mb-2 ${index === currentIndex ? 'opacity-50' : ''}`}
        onClick={() => setCurrentIndex(index)}
      >
        <GoDot size={10} color={index === currentIndex ? 'white' : 'text-slate-500'} className="bg-white rounded-full" />
      </div>
    ))}
  </div>
</div>



    </section>
  );
};

export default CarasoulPage;
