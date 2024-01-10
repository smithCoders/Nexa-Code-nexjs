"use client";

import React from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import navBarLinks from "../data/navBarLinks";

import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <section>
      <nav className="flex justify-between items-center pt-[50px] ml-[100px] mr-[60px] ">
        <div>
          <Image src={logo} alt="Logo" width={36.235} height={84} />
        </div>
        <div className="flex gap-[35px]">
          {navBarLinks.map((nav) => (
            <Link
              key={Math.random()}
              to={nav.to}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer"
            >
              <span className="text-[#fff] z-[1000] font-poppins text-[14px] font-medium leading-[-0.54]">
                {nav.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
