"use client"
 // components/ImageCard.tsx
import { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import Image, { StaticImageData } from 'next/image';
import first from "../assets/how_work_expanded_1.png";
import sec from "../assets/how_work_non_expanded_2.png";
import third from "../assets/how_work_non_expanded_3.png";

type ImageData = {
  id: number;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  top: number;
  left: number;
  borderRadius: number;
  opacity: number;
  isClicked: boolean;
  content?: {
    title: string;
    subtitle: string;
    description: string;
    buttonLabel: string;
  };
};

const initialImages: ImageData[] = [
  {
    id: 1,
    src: first,
    alt: 'First image',
    width: 1000, // Updated width for the first image
    height: 400, // Updated height for the first image
    top: 0,
    left: 0,
    borderRadius: 0,
    opacity: 1,
    isClicked: false,
    content: {
      title: '프로젝트를 진단해 방향성과',
      subtitle: '성장성을 같이 고민합니다',
      description: '결코, 고객을 탓하지 않습니다. 고객의 성공에 기여하기 위해 성심을 다합니다.',
      buttonLabel: '프로세스',
    },
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
    isClicked: false,
    content: {
      title: '미끼견적과 가짜 포트폴리오로',
      subtitle: '고객을 현혹하지 않아요',
      description: '겪어보지 않으면 모르는 부분들을 경험으로 짚어드립니다. 위험을 예방하고 제품 출시로 달려갑니다',
      buttonLabel: '검증된 공식',
    },
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
    isClicked: false,
    content: {
      title: '미끼견적과 가짜 포트폴리오로',
      subtitle: '고객을 현혹하지 않아요',
      description: '겪어보지 않으면 모르는 부분들을 경험으로 짚어드립니다. 위험을 예방하고 제품 출시로 달려갑니다',
      buttonLabel: '검증된 공식',
    },
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
              height: firstImage.height,
              isClicked:true,
            };
          } else if (image.id === 1) {
            return {
              ...image,
              width: clickedImage.width,
              height: clickedImage.height,
              isClicked:false
            };
          }
          return image;
        });
      }
      return prevImages;
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
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover w-full h-full rounded-lg"
          />
          {image.isClicked && image.content && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mb-4 flex flex-col">
                <p className="text-xl text-center leading-10 font-bold text-slate-50 overflow-hidden">
                  {image.content.title}
                </p>
                <p className="text-lg font-bold text-slate-50 overflow-hidden">
                  {image.content.subtitle}
                </p>
              </div>
              <div className="flex flex-col mb-4">
                <p className="text-sm text-slate-50">
                  <span className="text-[10px] text-slate-50 block">{image.content.description}</span>
                </p>
              </div>
              <button className="bg-white py-[5px] px-[13px] rounded-[25px] text-[10px]">
                <span className="text-slate-900 block">{image.content.buttonLabel}</span>
              </button>
            </div>
          )}

{/* img-1 */}
 {image.id === 1 && (
            <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mb-4  flex flex-col">
                <p className="text-xl text-center leading-10 font-bold  text-slate-50 overflow-hidden hover:border-b-[2px] border-blue-700   ">
                  프로젝트를 진단해 방향성과
                </p>
                 <p className="text-lg font-bold text-slate-50  overflow-hidden hover:border-b-[2px] border-b-blue-700 ">
                  성장성을 같이 고민합니다
                </p>
              </div>
              <div className=" flex flex-col mb-4">
               
                <p className="text-sm text-slate-50">
                 <span className="text-[10px] text-slate-50 block hover:border-b-[2px] border-blue-700 ">결코, 고객을 탓하지 않습니다</span>
                 <span className="text-[10px] text-slate-50 block hover:border-b-[2px] border-blue-700 ">고객의 성공에 기여하기 위해 성심을 다합니다</span>
                </p>
              </div>
              <button className="bg-white py-[5px] px-[13px] rounded-[25px] text-[10px] ">
                 <span className=' text-slate-900  block  hover:border-b-[2px] border-blue-700 '> 프로세스</span> 
              </button>
            </div>
          )}

          {image.id !== 1 && (
            <div 
              className="absolute bottom-4 right-4"
              style={{
                borderRadius: '50%',
                padding: '4px',
                backgroundColor: 'white',
              }}
              onClick={() => handleClick(image.id)}
            >
              <CiCirclePlus size={24} color="gray" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
