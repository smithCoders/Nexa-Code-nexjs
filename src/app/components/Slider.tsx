"use client"
import { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import Image, { StaticImageData } from 'next/image';
import first from "../assets/how_work_expanded_1.png";
import sec from "../assets/how_work_non_expanded_2.png";
import third from "../assets/how_work_non_expanded_3.png";

interface ImageData {
  id: number;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  top: number;
  left: number;
  borderRadius: number;
  opacity: number;
}

const initialImages: ImageData[] = [
  {
    id: 1,
    src: first,
    alt: 'First image',
    width: 1000,
    height: 400,
    top: 0,
    left: 0,
    borderRadius: 0,
    opacity: 1,
   
  },
  {
    id: 2,
    src: sec,
    alt: 'Second image',
    width: 337,
    height: 400,
    top: 0,
    left: 0,
    borderRadius: 0,
    opacity: 1,
  },
  {
    id: 3,
    src: third,
    alt: 'Third image',
    width: 337,
    height: 400,
    top: 0,
    left: 0,
    borderRadius: 0,
    opacity: 1,
  },
];

const ImageContainer = () => {
  const [images, setImages] = useState<ImageData[]>(initialImages);
const handleClick = (imageId: number) => {
    setImages(prevImages => {
      const clickedImage = prevImages.find(image => image.id === imageId);
      const firstImage = prevImages.find(image => image.id === 1);
      if (clickedImage && firstImage) {
        return prevImages.map(image => {
          if (image.id === imageId) {
            return {
              ...image,
              width: firstImage.width,
              height: firstImage.height
            };
          } else if (image.id === 1) {
            return {
              ...image,
              width: clickedImage.width,
              height: clickedImage.height
            };
          }
          return image;
        });
      }
      return prevImages;
    });
  };



  const handleHover = (imageId: number) => {
    setImages(prevImages => {
      return prevImages.map(image => {
        if (image.id === imageId) {
          return { ...image, isHovered: true };
        }
        return image;
      });
    });
  };

  const handleMouseLeave = (imageId: number) => {
    setImages(prevImages => {
      return prevImages.map(image => {
        if (image.id === imageId) {
          return { ...image, isHovered: false };
        }
        return image;
      });
    });
  };

  return (
    <div className="flex space-x-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative"
          style={{
            width: image.width,
            height: image.height,
            top: image.top,
            left: image.left,
            borderRadius: image.borderRadius,
            opacity: image.opacity,
            border: image.isHovered ? '2px solid blue' : 'none',
          }}
          onMouseEnter={() => handleHover(image.id)}
          onMouseLeave={() => handleMouseLeave(image.id)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover w-full h-full rounded-lg"
          />
          {/* img-1 */}
           {image.id === 1 && (
            <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mb-4">
                <p className="text-xl text-center leading-10 font-bold  text-slate-50 ">
                  프로젝트를 진단해 방향성과
                </p>
                 <p className="text-lg font-bold text-slate-50">
                  성장성을 같이 고민합니다
                </p>
              </div>
              <div className="mb-4">
               
                <p className="text-sm text-slate-50">
                 <span className="text-[10px] text-slate-50 block">결코, 고객을 탓하지 않습니다</span>
                 <span className="text-[10px] text-slate-50 block">고객의 성공에 기여하기 위해 성심을 다합니다</span>
                </p>
              </div>
              <button className="bg-white py-2 px-4 rounded-lg text-[10px] text-slate-900 ml-8">
                  프로세스
              </button>
            </div>
          )}


          {image.id !== 1 && (
            <div 
              className="absolute bottom-4 right-4"
              style={{
                border: image.isHovered ? '1px solid blue' : 'none',
                borderRadius: '50%',
                padding: '4px',
                backgroundColor: 'white',
              }}
              onMouseEnter={() => handleHover(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              onClick={() => handleClick(image.id)}
            >
              
              <CiCirclePlus size={24} color={image.isHovered ? 'blue' : 'gray'} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
