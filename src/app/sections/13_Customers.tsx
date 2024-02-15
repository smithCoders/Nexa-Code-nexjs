// PartnersPage.tsx
import React from 'react';
import PartnersComp from '../components/Partners';
import bgImage from "../assets/bg_img.jpg"

const PartnersPage: React.FC = () => {
  return (
    <main className=" px-20 pt-[50px]
    max-medium:pt-[200px]
    max-small:pt-[150px]
    max-small:px-0"
    style={{backgroundImage:`url("./bg_img.jpg")`,backgroundPosition:"center", backgroundSize:"cover"}}
    >
      <h2
        className="text-[#000] text-[50px] text-center font-bold tracking-[-1.5px]
      max-medium:text-[40px]
      max-small:text-[25px]"
      >
        주요 클라이언트
      </h2>
      <div className="flex items-center justify-center">
        <PartnersComp />
      </div>
    </main>
  );
};

export default PartnersPage;
