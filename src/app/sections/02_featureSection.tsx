import React from "react";
import Image from "next/image";
import Feature from "../components/Feature";
import feature01 from "../assets/feature01.svg";
import feature03 from "../assets/feature03.svg";

const FeatureSection = () => {
  return (
    <section className="max-container bg-white pt-[190px] pb-[180px]">
      <div className="mb-[74px]">
        <p className="text-center text-black text-[50px] font-light leading-[1.5]">
          개발사 선정에 <span className="font-bold">고민이 많으시죠?</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <div
          className={`bg-[#333] text-[#fff] flex flex-col justify-center items-center pb-[52px] pt-[50px] px-[40px] border border-[#fff]`}
        >
          <p className={`mb-[29px] text-center text-[35px] font-medium`}>01</p>
          <p className=" text-center text-[35px] font-medium">
            제대로 결과물이
          </p>
          <p className=" mb-[40px] text-center text-[35px] font-medium">
            안나오면 어떡하지?
          </p>
          <Image src={feature01} alt="feature" width={242} height={150} />
          <div
            className={`mt-[30px] flex justify-center items-center w-[302px] h-[69px] rounded-[34.50px] border border-white`}
          >
            <span
              className={`text-center text-white  text-[25px] font-light font-['Pretendard']`}
            >
              결과물에 대한 걱정
            </span>
          </div>
        </div>
        <div
          className={`bg-white text-black flex flex-col justify-center items-center pb-[52px] pt-[50px] px-[40px] border border-[#D9D9D9]`}
        >
          <p className={`mb-[29px] text-center text-[35px] font-medium`}>02</p>
          <p className=" text-center text-[35px] font-medium">중간에 비용이</p>
          <p className=" mb-[40px] text-center text-[35px] font-medium">
            늘어나진 않는가?
          </p>
          <Image src={feature03} alt="feature" width={242} height={150} />
          <div
            className={`mt-[30px] flex justify-center items-center w-[302px] h-[69px] rounded-[34.50px] border border-[#D9D9D9]`}
          >
            <span
              className={`text-center text-[#A4A4A4]  text-[25px] font-light font-['Pretendard']`}
            >
              고무줄 같은 비용 책정
            </span>
          </div>
        </div>
        <div
          className={`bg-white text-black flex flex-col justify-center items-center pb-[52px] pt-[50px] px-[40px] border border-[#D9D9D9]`}
        >
          <p className={`mb-[29px] text-center text-[35px] font-medium`}>03</p>
          <p className=" text-center text-[35px] font-medium">마감시간은</p>
          <p className=" mb-[40px] text-center text-[35px] font-medium">
            잘 지키나?
          </p>
          <Image src={feature01} alt="feature" width={242} height={150} />
          <div
            className={`mt-[30px] flex justify-center items-center w-[302px] h-[69px] rounded-[34.50px] border border-[#D9D9D9]`}
          >
            <span
              className={`text-center text-[#A4A4A4]  text-[25px] font-light font-['Pretendard']`}
            >
              갑작스런 시간 지연
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
