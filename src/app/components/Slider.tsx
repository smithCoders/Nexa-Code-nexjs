"use client"
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import Image, { StaticImageData } from 'next/image';
import first from "../assets/how_work_expanded_1.png";
import sec from "../assets/how_work_non_expanded_2.png";
import third from "../assets/how_work_non_expanded_3.png";
import  iconImage from "../assets/Ellipse 902.png"


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
    isContentVisible: boolean;
    content?: {
        title: string;
        subtitle: string;
        description1: string;
        description2: string;
        buttonLabel: string;
    };
};

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
       isClicked: false,
        isContentVisible: true, // Content of the first image is visible by default
        content: {
            title: '프로젝트를 진단해 방향성과',
            subtitle: '성장성을 같이 고민합니다',
      description1: '결코, 고객을 탓하지 않습니다',
            description2: '고객의 성공에 기여하기 위해 성심을 다합니다',
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
        isContentVisible: false, // Initially set to false for images 2 and 3
        content: {
            title: '미끼견적과 가짜 포트폴리오로',
            subtitle: '고객을 현혹하지 않아요',
            description1: '겪어보지 않으면 모르는 부분들을 경험으로 짚어드립니다',
            description2: '위험을 예방하고 제품 출시로 달려갑니다',
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
        isContentVisible: false, // Initially set to false for images 2 and 3
        content: {
            title: '미끼견적과 가짜 포트폴리오로',
            subtitle: '고객을 현혹하지 않아요',
             description1: '담당 매니저가 체계적인 프로세스로',
            description2: '기획부터 개발까지 이끌어 드립니다',
            buttonLabel: '검증된 공식',
        },
    },
];

const ImageContainer = () => {
    const [images, setImages] = useState<ImageData[]>(initialImages);


const handleClick = (imageId: number) => {
    setImages(prevImages => {
        let firstImageWidth = 337;
        let firstImageHeight = 400;
        prevImages.forEach(image => {
            if (image.id === 1) {
                firstImageWidth = image.width;
                firstImageHeight = image.height;
            }
        });
        
        return prevImages.map(image => {
            if (image.id === imageId) {
                const isClicked = !image.isClicked;
                return {
                    ...image,
                    width: isClicked ? 1000 : firstImageWidth,
                    height: isClicked ? 400 : firstImageHeight,
                    isClicked,
                    isContentVisible: isClicked || image.id === 1 // Display content when clicked or for Image 1
                };
            } else if (image.id === 1 && (imageId === 2 || imageId === 3)) {
                // Set Image 1 to original size when Image 2 or Image 3 is clicked
                return {
                    ...image,
                    width: 337,
                    height: 400,
                    isContentVisible: true // Always show content for Image 1
                };
            } else if (image.id === 1) {
                // Keep Image 1 at its original size when other images are clicked
                return {
                    ...image,
                    width: firstImageWidth,
                    height: firstImageHeight,
                    isContentVisible: true // Always show content for Image 1
                };
            } else {
                return image;
            }
        });
    });
};


    return (
        <div className=" flex  max-small:flex-col max-small:gap-4   space-x-4">
            {images.map((image) => (
                <div
                    key={image.id}
                    className="relative md:w-1/3"
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
                        className="max-small:w-[350px]  w-full object-cover h-full rounded-lg"
                    />
                    {image.isClicked && image.isContentVisible && image.content && (
                        <div className=" max-small:hidden   absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="mb-4 flex flex-col items-center justify-center">
                                <p className="text-xl text-center leading-10 font-bold text-slate-50 overflow-hidden">
                                    {image.content.title}
                                </p>
                                <p className="text-lg font-bold text-slate-50 overflow-hidden">
                                    {image.content.subtitle}
                                </p>
                            </div>
                            <div className="fb-4  flex flex-col items-center justify-center">
                                <p className="text-sm text-slate-50 flex flex-col">
                                    <span className="text-[10px] text-slate-50 block">{image.content.description1}</span>
                                    <span className="text-[10px] text-slate-50 block">{image.content.description2}</span>
                                </p>
                            </div>
                            <div className='text-center mt-6'>
                                <button className="bg-white py-[5px] px-[13px] rounded-[25px] text-[10px]">
                                <span className="text-slate-900 block">{image.content.buttonLabel}</span>
                            </button>
                            </div>
                            
                        </div>
                    )}
                     {image.id === 1 && (
            <div className=" max-small:hidden  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mb-4  flex flex-col">
                <p className="text-xl text-center leading-10 font-bold  text-slate-50 overflow-hidden   ">
                  프로젝트를 진단해 방향성과
                </p>
                 <p className="text-lg font-bold text-slate-50  overflow-hidden  ">
                  성장성을 같이 고민합니다
                </p>
              </div>
              <div className=" flex flex-col mb-4">
               
                <p className="text-sm text-slate-50">
                 <span className="text-[10px] text-slate-50 block  ">고객의 성공에 기여하기 위해 성심을 다합니다</span>
                 <span className="text-[10px] text-slate-50 block  ">고객의 성공에 기여하기 위해 성심을 다합니다</span>
                </p>
              </div>
              <div className='text-center mt-6'>
                 <button className="bg-white py-[5px] px-[13px] rounded-[25px] text-[10px] ">
                 <span className=' text-slate-900  block  '> 프로세스</span> 
              </button>
              </div>
             
            </div>
          )}

                    {image.id !== 1 && (
                       
                        <div className="max-small:hidden   md:hidden lg:block absolute bottom-4 right-4" onClick={() => handleClick(image.id)}>
                            <Image src={iconImage} alt='ellipse-image' className='w-10 h-10 rounded-full relative'/>
                               <FiPlus size={24}  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                        </div>
                            
                      
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageContainer;
