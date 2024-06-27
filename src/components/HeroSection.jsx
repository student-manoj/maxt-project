"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = ["/heroSectionImage.png", "/heroSectionImage1.png", "/heroSectionImage2.png",
];
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changDot = (info) => {
    setCurrentIndex(info);
  };

  return (
    <>
      <div className="relative h-[510px]">
        <div
          className="absolute inset-0 duration-700"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="container mx-auto px-4 xl:py-44 py-40">
              <h3 className="font-dancing font-bold text-4xl">Our New Collectoin 2021</h3>
              <h3 className="text-4xl font-semibold w-72 pt-5 pb-11 space-y-3">
                Wellcome To Our 
                <span className="text-primary">New Shop</span>
              </h3>
              <Link href="#" className="text-white bg-primary px-6 py-3 rounded-full" >Shop Now</Link>
            </div>
          </div>
        </div>
        <button className="absolute top-1/2 left-5 transform -translate-y-1/2 md:bg-white px-1 py-3 rounded-sm text-2xl"
          onClick={prevSlide} >
          <FaChevronLeft className="text-primary" />
        </button>
        <button className="absolute top-1/2 right-5 transform -translate-y-1/2 md:bg-white px-1 py-3 rounded-sm text-2xl"
          onClick={nextSlide} >
          <FaChevronRight className="text-primary" />
        </button>
      </div>
    </>
  );
};

export default HeroSection;
