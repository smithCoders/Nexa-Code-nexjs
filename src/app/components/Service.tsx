import React from "react";

import Image from "next/image";

type serviceProps = {
  title: string;
  description: string;
  description2?: string;
  image: any;
};

const Service = ({ title, description, description2, image }: serviceProps) => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <div className="">
        <Image
          src={image}
          alt="one of our services"
          className="w-[250px] h-[250px]"
        />
      </div>
      <h2
        className="mt-[25px] text-[#333] text-[35px] font-semibold tracking-[-1.05px]
      max-small:text-[25px]
      max-small:mt-[20px]
      
      "
      >
        {title}
      </h2>
      <p
        className="mt-[15px] text-[#333] text-[18px] font-semibold tracking-[-0.6px]
      max-small:text-[16px] max-small:mt-[8px]
      "
      >
        {description}
      </p>
      {description2 && (
        <p
          className=" text-[#333] text-[18px] font-semibold tracking-[-0.6px]
      max-small:text-[16px]
        "
        >
          {description2!}
        </p>
      )}
    </section>
  );
};

export default Service;
