import React from "react";
import Image from "next/image";

import howNonExpanded_1 from "../assets/how_work_non_expanded_2.png";
import howNonExpanded_2 from "../assets/how_work_non_expanded_3.png";

const HowNexaWorks = () => {
  return (
    <section className="max-container bg-[#fff] pt-[240px]">
      <div>
        <h2 className="text-center mb-[90px] text-[50px] font-bold tracking-[-1.5px] text-[#000]">
          넥사코드는 어떻게 일할까요?
        </h2>

        <div className="flex gap-[10px] ">
          <section className="how-one w-3/5 ">
            <div className="w-full mt-[50px] flex flex-col justify-center text-center">
              <p className="z-10 text-[#fff] text-[30px] font-semibold tracking-[-1.5px] ">
                프로젝트를 진단해 방향성과
              </p>
              <h1 className="z-10 text-[#fff] text-[30px] font-semibold tracking-[-1.5px] ">
                성장성을 같이 고민합니다
              </h1>

              <p className="z-10 text-[#fff] mt-[30px] text-[20px] font-normal tracking-[-0.6px] ">
                결코, 고객을 탓하지 않습니다
              </p>
              <p className="z-10 text-[#fff]  text-[20px] font-normal tracking-[-0.6px] ">
                고객의 성공에 기여하기 위해 성심을 다합니다
              </p>

              <div className="flex justify-center">
                <button className=" mt-[30px] flex justify-center items-center w-[113px] h-[32px] rounded-[50px] z-10 bg-[#fff]">
                  <span className="text-[#000] text-[18px] font-medium tracking-[-0.54px]">
                    프로세스
                  </span>
                </button>
              </div>
            </div>
          </section>

          <div className="w-1/5 ">
            <Image
              src={howNonExpanded_1}
              alt="how nexa code works"
              className="w-full rounded-[30px] h-full bg-contain"
            />
          </div>

          <div className="w-1/5 ">
            <Image
              src={howNonExpanded_2}
              alt="how nexa code works"
              className="w-full rounded-[30px] h-full"
            />
          </div>

          {/* <div className="how-two">
            <div></div>
          </div>
          <div className="how-three"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HowNexaWorks;
