import React from "react";
import Feature from "../components/Feature";
import feature01 from "../assets/feature01.svg";
import feature03 from "../assets/feature03.svg";

const FeatureSection = () => {
  return (
    <section className="bg-white pt-[190px] pb-[180px]">
      <div className="mb-[74px]">
        <p className="text-center text-black text-[50px] font-light leading-[1.5]">
          개발사 선정에 <span className="font-bold">고민이 많으시죠?</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <Feature
          textColor="white"
          number="01"
          text01="제대로 결과물이"
          text02="안나오면 어떡하지?"
          imageFile={feature01}
          bgColor="333"
          borderColor="333"
          btnText="결과물에 대한 걱정"
          btnTextColor="fff"
          btnBorderColor="fff"
        />
        <Feature
          textColor="black"
          number="02"
          text01="중간에 비용이"
          text02="늘어나진 않는가?"
          imageFile={feature03}
          bgColor="fff"
          borderColor="D9D9D9"
          btnText="고무줄 같은 비용 책정"
          btnTextColor="#A4A4A4"
          btnBorderColor="D9D9D9"
        />
        <Feature
          textColor="black"
          number="03"
          text01="마감시간은"
          text02="잘 지키나?"
          imageFile={feature01}
          bgColor="fff"
          borderColor="D9D9D9"
          btnText="갑작스런 시간 지연"
          btnTextColor="#A4A4A4"
          btnBorderColor="D9D9D9"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
