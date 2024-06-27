"use client";

import HeraderSection from "@/components/HeraderSection";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa";
import { OurBestProductsData } from "@/utils/OurBestProductsData";
import OurBestProductsCard from "@/components/OurBestProductsCard";
import { useState } from "react";

const ProductDetailspage = ({ params }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const [items, setItems] = useState(OurBestProductsData);

  const postid = parseInt(params.id);

  const products = items.find((productData) => productData.id === postid);
  
  const { img, img1, img2, img3, icon, price } = products;
  return (
    <>
      <HeraderSection tilte="Shop" sTitle="Product" />
      <div className="xl:py-24 py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <Image src={img} alt="image" className="w-10/12" />
            <div className="flex gap-6 pt-7">
              <Image src={img1} alt="image" />
              <Image src={img2} alt="image" />
              <Image src={img3} alt="image" />
            </div>
            <div className="flex gap-4 pt-20">
              <button className="px-5 py-2 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-md">
                Description
              </button>
              <button className="px-5 py-2 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-md">
                Additional information
              </button>
              <button className="px-5 py-2 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-md">
                Reviews
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-medium">Special Stethoscope</h3>
            <p className="text-base font-medium ">${price}.00</p>
            <p className="flex gap-4">
              <Image src={icon} alt="icon" />
              <span className="text-primary">(4 customer review)</span>
            </p>
            <p className="text-base">
              Lpsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua ipsum ultrices
              gravida risus commodo viverra mae cenas accumsan lacus vel.
            </p>
            <div className="flex gap-7">
              <button
                onClick={() => addToCart(products)}
                className="text-sm font-medium px-5 py-2 bg-primary text-white rounded-md"
              >
                Add To Cart
              </button>
              <div className="flex gap-2 items-center justify-center">
                <span className="bg-primary rounded-md text-white  h-8 w-8 text-center text-lg font-semibold">
                  -
                </span>
                <span className="bg-primary rounded-md text-white h-8 w-8 text-center text-lg font-semibold">
                  1
                </span>
                <span className="bg-primary rounded-md text-white h-8 w-8 text-center text-lg font-semibold">
                  +
                </span>
              </div>
            </div>
            <div className=" flex gap-4 items-center">
              <FaRegHeart className="bg-primary h-10 w-10 p-2 rounded-md text-white" />
              <span className="text-sm font-medium">Add To Wishlist</span>
            </div>
            <div className="text-base">
              <span className="font-medium">Categories :</span> Men, Women,
              Tops, T-Shirt
            </div>
            <div className="text-base">
              <span className="font-medium">Tags :</span> MedicalChakup
            </div>
            <div className="text-base">
              <span className="font-medium">suk :</span> wo- syrup
            </div>
            <div className="text-base flex gap-4">
              <span className="font-medium">Share :</span>
              <span>
                <div className="flex gap-4">
                  <FaFacebookF className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                  <FaInstagram className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                  <FaTwitter className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                  <FaLinkedinIn className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="text-2xl font-medium pt-16">Description</div>
        <p className="pt-5">
          ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua ipsum ultrices
          gravida risus commodo viverra mae cenas accumsan lacus vel. facilisis
          suspendisseipsum dolor sit amet consectetur adipisicing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim veniam, quis nostrud.ipsum dolor sit amet, consectetur
          adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua ipsum ultrices gravida risus commodo viverra mae cenas
          accumsan lacus vel. facilisis suspendisseipsum dolor sit.
        </p>
        <div className="text-4xl font-semibold pt-16">Related products</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-10">
          {OurBestProductsData.slice(0, 4).map((value) => (
            <OurBestProductsCard key={value.id} {...value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetailspage;
