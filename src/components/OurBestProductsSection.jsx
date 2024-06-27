"use client";

import { OurBestProductsData } from "@/utils/OurBestProductsData";
import Heading from "./Heading";
import OurBestProductsCard from "./OurBestProductsCard";
import { useState } from "react";

const OurBestProductsSection = ({ productBest, addToCart }) => {
  const [nextItems, setNextItems] = useState(8);
  const [items, setItems] = useState(OurBestProductsData);

  const filterItem = (category) => {
    const updatadItem = OurBestProductsData.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatadItem);
  };

  const loadMore = () => {
    setNextItems((prev) => prev + 4);
  };

  return (
    <>
      <div className="bg-[#FAFAFA] xl:py-24 py-20">
        <div className="container mx-auto px-4">
          <Heading
            title="Our Best Products"
            description="Preorder now to receive exclusive deals & gifts"
          />
          <div className="md:flex flex flex-wrap gap-4 pt-14 pb-10 justify-center items-center">
            <button onClick={() => filterItem("New Product")} className="hover:bg-primary px-5 py-2 border rounded-full hover:border-primary duration-300 border-black  hover:text-white text-sm font-medium" >
              New Product
            </button>
            <button onClick={() => filterItem("Seller")} className="hover:bg-primary px-5 py-2 border rounded-full hover:border-primary duration-300 border-black  hover:text-white text-sm font-medium">
              Seller
            </button>
            <button onClick={() => filterItem("Top Rated")} className="hover:bg-primary px-5 py-2 border rounded-full hover:border-primary duration-300 border-black  hover:text-white text-sm font-medium">
              Top Rated
            </button>
            <button onClick={() => filterItem("Featured")} className="hover:bg-primary px-5 py-2 border border-black rounded-full text-sm font-medium">
              Featured
            </button>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-5">
            {items.slice(0, nextItems).map((value) => (
              <OurBestProductsCard key={value.id} {...value} addToCart={addToCart}/>
            ))}
          </div>
          <div className="pt-10 text-center">
            <button onClick={loadMore} className="text-white text-sm font-medium px-5 py-2 bg-primary rounded-full">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBestProductsSection;
