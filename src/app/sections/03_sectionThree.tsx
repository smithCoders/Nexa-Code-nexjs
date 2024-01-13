import React from "react";

import Image from "next/image";

import separator from "../assets/separator.svg";

const AboutCompany = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-[20px]">
          <p className="text-black text-[30px] font-normal tracking-[-0.9] font-['Noto Sans KR']">
            외주 개발 업체의 진짜 문제점,
          </p>
          <p className="text-black text-[30px] font-normal tracking-[-0.9] font-['Noto Sans KR']">
            본인들의 서비스를 성공시키지 못했습니다
          </p>
        </div>

        <Image src={separator} alt="separator" />

        <div className="text-center mt-[20px]">
          <p className="text-[#333] text-[50px] font-bold font-['Noto Sans KR'] tracking-[-1.5] ">
            넥사코드는 자사 서비스의
          </p>
          <div
            className="relative text-[#333] z-50 text-[50px] font-bold font-['Noto Sans KR'] tracking-[-1.5] 
          after:content-[' '] after:w-full after:h-4 after:absolute after:left-0 after:bottom-3 after:bg-yellow-400
          after:z-[-1]
          "
          >
            성공 경험을 바탕으로 개발합니다
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
