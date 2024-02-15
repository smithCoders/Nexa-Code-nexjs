import Image from "next/image"
import CallToImg from "../assets/home_img.jpeg"

import { FaArrowRight } from "react-icons/fa6";
const CallToAction=()=>{
return <section className="mt-10">
    <div className="relative">
        <Image src={CallToImg}  alt="call-to-action" className="h-[400px] w-full object-cover overflow-hidden "/>
        {/* overlay */}s
        <div className="bg-[#000] bg-opacity-50 inset-0 absolute"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mb-8 flex flex-col gap-3 space-y-1 font-[400]  ">
                <p className="text-[30px] text-center line-height-[5px]  text-slate-50 overflow-hidden leading-6">
                  앱 개발 업체
                </p>
                <p className="text-[30px]  text-center text-slate-50 overflow-hidden leading-6">
                  홈페이지 제작 업체
                </p>
              </div>
              <div className="flex flex-col mb-14">
                <p className="text-sm text-slate-50">
                  <span className="text-[30px] text-slate-50 font-bold block">찾지 말고 넥사코드에 연락하세요!</span>
                  
                </p>
              </div>
              <div className="flex items-center justify-center mt-3">
                 <button className="  bg-transparent py-[15px] px-[35px] rounded-[100px] text-[18px] text-center flex items-center   gap-[6px] bg-opacity-10  border border-white backdrop-blur-[10px] cursor-pointer ">
                <span className="text-slate-50 font-normal font-['Noto Sans KR']" >상담 신청하러가기</span>
                <FaArrowRight   size={25} color="white"/>
              </button>
              </div>
             
            </div>
    </div>
    

</section>

}
export default CallToAction