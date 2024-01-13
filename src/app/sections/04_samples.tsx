import React from "react";
import SampleOne from "../components/SampleOne";
import SampleTwo from "../components/SampleTwo";

const Samples = () => {
  return (
    <main className="flex justify-center items-start gap-[100px] pt-[79px] pb-20 bg-[#fff] px-16">
      <SampleOne />
      <SampleTwo />
    </main>
  );
};

export default Samples;
