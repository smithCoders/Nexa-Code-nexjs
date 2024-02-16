"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GoDot } from 'react-icons/go';

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
   <section className="max-container bg-[#000] pt-[125px] pb-[160px] mt-10 relative overflow-hidden">
  {/* Navigation with right and left icons */}
  <div className="absolute inset-0 flex items-center justify-between p-16">
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={handleRightClick}>
      <Image src={iconImage} alt="ellipse-image" className="w-10 h-10 rounded-full relative" />
      <FaChevronRight size={24} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={handleLeftClick}>
      <Image src={iconImage} alt="ellipse-image" className="w-10 h-10 rounded-full relative" />
      <FaChevronLeft size={24} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>



      {/* Portfolio heading */}
      <h2 className="text-[#fff] text-[50px] text-center font-bold tracking-[-1.5px] mb-8">
        포트폴리오
      </h2>

      {/* Carousel container with individual image divs */}
      <div className="flex items-center justify-center transition-opacity duration-300">
        <div className="carousel">
          {img.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                width={200}
                height={300}
                alt={image.alt}
                style={{ margin: '0 10px', borderRadius: '15px' }}
                className={`inline-block p-4 rounded-[15px] border border-[#FFF] mr-4 shadow-md`} // Added responsive shadow
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
{/* Pagination dots */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
  <div className="flex items-center justify-center gap-3">
    <div className="transition-all w-3 h-3 p-1 mr-2 mb-2">
      <GoDot size={10} color="white" className="bg-white rounded-full" onClick={handleRightClick} />
    </div>
    <div className="transition-all w-3 h-3 p-1 mr-2 mb-2">
      <GoDot size={10} color="text-slate-500" className="bg-slate-500 rounded-full"  onClick={handleLeftClick}/>
    </div>
  </div>
</div>


    </section>
  );
};

export default CarasoulPage;
