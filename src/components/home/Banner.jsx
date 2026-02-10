import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center  ">
      <div className="flex-1  space-y-5">
        <h2
          className={`${fontBangla.className} text-6xl font-bold text-primary`}
        >
          শেরা পণ্য সেরা ডিলস
        </h2>
        <p className={`${fontBangla.className} text-2xl font-semibold text-secondary `}>
          সকল প্রোডাক্ট এ ডিস্কাউন্ট <span className="text-accent">৩৫%</span>  পর্যন্ত
        </p>
        <button className="btn btn-accent text-white rounded-xl  ">
          Explore Products
        </button>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/hero.png"}
          alt="Buye Everything With up to 15% Discount"
          height={700}
          width={700}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
