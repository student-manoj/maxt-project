"use client";

import HeraderSection from "@/components/HeraderSection";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import { AddtoCardData } from "@/utils/AddtoCardData";
import { useState } from "react";
import Link from "next/link";


const AddToCardpage = ({ cart }) => {
  const [catdItem, setCatdItem] = useState(AddtoCardData);

 
  return (
    <>
      <HeraderSection tilte="Cart" sTitle="Cart" />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-11 md:border place-items-center">
              <div className="md:col-span-2 border-r md:flex hidden">cancel</div>
              <div className="md:col-span-4 border-r border-l py-2 xl:px-[141px] md:px-[105px] md:flex hidden">Product</div>
              <div className="md:col-span-1 md:flex hidden">Price</div>
              <div className="md:col-span-2 border-r border-l py-2 px-7 md:flex hidden">Quantity</div>
              <div className="md:col-span-2 md:flex hidden">Quantity</div>
            </div>

            {catdItem.map((value) => (
              <div key={value.id} className="grid md:grid-cols-11 md:border-b md:border-r md:border-l place-items-center">
                <div className="col-span-2 md:flex hidden">
                  <IoMdCloseCircleOutline className="lg:h-7 h-6 w-6 lg:w-7 flex" />
                </div>
                <div className="col-span-4 md:flex hidden">
                  <div className="grid grid-cols-4 gap-4 border-r border-l">
                    <div className="col-span-1 lg:p-3 p-2">
                      <Image src={value.img} alt="image" />
                    </div>
                    <div className="col-span-3 lg:pt-7 pt-4">{value.title}</div>
                  </div>
                </div>
                <div className="col-span-1 md:flex hidden">
                  <div className="">${value.price}.00</div>
                </div>
                <div className="col-span-2 border-r border-l md:flex hidden">
                  <div className="flex justify-center py-6 px-4">
                    <button className="border h-7 w-7 flex items-center justify-center text-xl rounded-tl-md rounded-bl-md" >-
                    </button>
                    <span className="border h-7 w-7 flex items-center justify-center text-xl">{value.quantity}</span>
                    <button className="border h-7 w-7 flex items-center justify-center text-xl rounded-tr-md rounded-br-md" >+
                    </button>
                  </div>
                </div>
                <div className="col-span-2 md:flex hidden">
                  <div >
                    <div className="">$30 .00</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="border-b border-r border-l p-4 md:flex justify-between hidden">
              <div className="flex gap-16">
                <input
                  placeholder="Coupon Code"
                  className="border focus:outline-none px-3 py-2 rounded-md"
                />
                <button className="text-white bg-primary px-3 py-2 rounded-md">
                  Apply Code
                </button>
              </div>
              <button className="bg-primary text-white py-2 px-4 rounded-md">
                Update CArt
              </button>
            </div>

            <div className="md:hidden">
              <div className="divide-y">
                {AddtoCardData.map((value) => (
                  <div key={value.id} className="pt-2">
                    <div className="grid grid-cols-5 gap- place-items-center">
                      <div className="col-span-1">
                        <Image src={value.img} alt="image" />
                      </div>
                      <div className="col-span-3">{value.title}</div>
                      <div className="col-span-1 flex flex-col items-center">$120.00</div>
                    </div>
                    <div className="flex justify-between items-center pl-4">
                      <IoMdCloseCircleOutline className="h-8 w-8 " />
                      <div className="">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex">
                            <span className="border h-7 w-7 flex items-center justify-center text-xl rounded-tl-md rounded-bl-md">-</span>
                            <span className="border h-7 w-7 flex items-center justify-center text-xl">2</span>
                            <span className="border h-7 w-7 flex items-center justify-center text-xl rounded-tr-md rounded-br-md">+</span>
                          </div>
                          <div className="">$240.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 pb-3 flex justify-between">
                <input placeholder="Coupon Code" className="border focus:outline-none px-3 py-1 rounded-md"/>
                <button className="text-white bg-primary px-3 py-1 rounded-md">Apply Code</button>
              </div>
              <button className="bg-primary text-white py-1 px-4 rounded-md w-full">Update CArt</button>
            </div>
          </div>
          <div className="col-span-1 border ">
            <div className="border-b flex justify-center py-4 text-xl font-semibold">Cart Totals</div>
            <div className="border-b flex justify-between px-3 py-4">
              Subtotal
              <span className="text-primary">$100 .00</span>
            </div>
            <div className="border-b flex justify-between px-3 py-4 text-lg font-semibold">
              Total
              <span className="text-primary"> $
                100 .00</span>
            </div>
            <div className="p-2">
              <Link href="/addToCard/Checkout" className="bg-primary flex w-full justify-center py-3 text-white rounded-md">Proceed to checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCardpage;
