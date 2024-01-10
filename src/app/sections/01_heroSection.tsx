import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";

import rightArrow from "../assets/right-arrow.svg";

const HeroSection = () => {
  return (
    <section className="hero-section  pb-[150px]">
      <NavBar />
      <div className=" flex flex-col justify-center items-center mt-[200px]">
        <div className="text-center text-white text-6xl font-normal font-['Noto Sans KR'] mb-3">
          앱 개발 업체
        </div>
        <div className="text-center text-white text-6xl font-normal font-['Noto Sans KR'] leading-[-1.8]">
          {" "}
          홈페이지 제작 업체
        </div>
        <div className="text-center mt-10 mb-10">
          <p className=" text-white text-3xl font-normal font-['Noto Sans KR']">
            찾고계신다면 저희에게 맡기세요
            <br />
          </p>
          <p className="mt-10 text-white text-6xl font-bold font-['Noto Sans KR']">
            개발하지 못하면 환불해 드립니다
          </p>
        </div>
        <div className="flex items-center justify-center gap-5  mt-10 w-[180px] h-[56.67px] bg-white bg-opacity-10 rounded-[50px] border border-white backdrop-blur-[10px] ">
          <p className="text-white text-[15px] font-normal font-['Noto Sans KR']">
            상담 문의
          </p>
          <div>
            <Image src={rightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
