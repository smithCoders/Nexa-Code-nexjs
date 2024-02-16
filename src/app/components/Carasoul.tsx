"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import  iconImage from "../assets/Ellipse 902.png"


type Image = {
  src: string;
  alt: string;
};

interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" relative carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={300}
            height={200}
            alt={image.alt}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="max-small:hidden   md:hidden lg:block absolute bottom-4 right-4" onClick={handleRightClick}>
                            <Image src={iconImage} alt='ellipse-image' className='w-10 h-10 rounded-full relative'/>
                               <FaChevronRight size={24}  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                        </div>
                            
  <div className="max-small:hidden   md:hidden lg:block absolute bottom-4 right-4" onClick={handleLeftClick}>
                            <Image src={iconImage} alt='ellipse-image' className='w-10 h-10 rounded-full relative'/>
                               <FaChevronLeft size={24}  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                        </div>
                            
    </div>
  );
};

export default Carousel;
