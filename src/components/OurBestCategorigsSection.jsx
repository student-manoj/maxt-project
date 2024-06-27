"use client";

import {OurBestCategorigsData,OurBestCategorigsDataTow,} from "@/utils/OurBestCategorigsData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OurBestCategorigsSection = () => {
  const [nextItems, setNextItems] = useState(6);

  const loadMore = () => {
    setNextItems((prev) => prev + 6);
  };
  return (
    <>
      <div className="container mx-auto px-4 xl:py-24 py-20">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">Our Best Categorigs</h3>
          <button onClick={loadMore} className="text-white bg-primary px-6 py-2 rounded-full" >View All</button>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-6 py-12">
          {OurBestCategorigsData.slice(0, nextItems).map((value) => (
            <div key={value.id} className="relative flex items-center justify-center group" >
              <div className="absolute group-hover:bg-primary text-white p-4 rounded-full hidden group-hover:block duration-300">
                <div className="flex flex-col justify-center items-center h-24 w-24 gap-1">
                  <div className="ease-in text-sm">Shoes</div>
                  <div className="border-t border-white text-sm ease-in"> 25 Product</div>
                </div>
              </div>
              <Image src={value.img} alt="image" className="" />
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 pt-14">
          {OurBestCategorigsDataTow.map((value) => (
            <div key={value.id} className="relative">
              <div className="pl-4 absolute lg:top-[52%] top-[40%]">
                <h4 className="xl:text-4xl text-3xl w-60 font-semibold lg:pb-8 pb-6">{value.title}
                </h4>
                <Link href="#" className="text-white bg-primary px-6 md:py-3 py-2 rounded-full" >Shop New</Link>
              </div>
              <Image src={value.img} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurBestCategorigsSection;
