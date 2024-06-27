"use client";
import { FeaturedProductsData } from "@/utils/FeaturedProductsData";
import Heading from "./Heading";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

const itme = 4;
const FeaturedProductsSection = () => {
  const [selectedCars, setselectedCars] = useState(0);
  const [allData, setallData] = useState(FeaturedProductsData);

  const handleClick = (info) => {
    setselectedCars(info);
  };
  const prevSlide = () => {
    if (selectedCars > 0) {
      handleClick(selectedCars - 1);
    } else {
      alert("start");
    }
  };
  const nextSlide = () => {
    if (selectedCars < allData.length - 4) {
      handleClick(selectedCars + 1);
    } else {
      alert("start");
    }
  };

  return (
    <>
      <div className="bg-[#FAFAFA] xl:py-24 py-20">
        <div className="container mx-auto px-4">
          <Heading
            title="Featured Products"
            description="Preorder now to receive exclusive deals & gifts"
          />
          <div className="flex gap-4 pt-14 justify-end">
            <div onClick={prevSlide} className="p-3 rounded-full hover:bg-primary duration-300 border border-primary">
              <FaChevronLeft />
            </div>
            <div onClick={nextSlide} className="hover:bg-primary duration-300 p-3 rounded-full border border-primary">
              <FaChevronRight />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-5">
            {allData.slice(selectedCars * itme, selectedCars + 1 * itme).map((value) => {
                return (
                  <FeaturedProductsCard key={value.id} value={value}/>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsSection;
