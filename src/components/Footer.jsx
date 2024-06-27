import Image from "next/image";

import Logo from "../../public/Logo.png";
import {FaFacebookF, FaInstagram, FaLinkedinIn,FaTwitter,} from "react-icons/fa";
import { FooterDat2, FooterData } from "@/utils/FooterData";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="bg-primary flex flex-col justify-center items-center text-white">
        <div className="xl:py-24 py-20 flex flex-col justify-center items-center gap-3">
          <h3 className="xl:text-2xl text-xl">Subscribe To Our Newsletter Now</h3>
          <p className="text-base text-center">Preorder now to receive exclusive deals & gifts</p>
          <div className="relative pt-5">
            <button className="bg-primary px-6 py-2 absolute right-2 rounded-full bottom-2">Subscribe</button>
            <input placeholder="Enter Your Email" className="h-14 md:w-[550px] w-72 rounded-full px-6"/>
          </div>
        </div>
      </div>
      <div className="bg-[#EDF7FF] xl:py-24 py-20 ">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <Image src={Logo} alt="Logo" />
            <spn className="border-t-2 border-primary h-2 w-[30%]" />
            <p className="py-6"> Iteam is consisted of young pashion developer and designers who are intereste</p>
            <div className="flex gap-4">
              <FaFacebookF className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
              <FaInstagram className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
              <FaTwitter className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
              <FaLinkedinIn className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold flex flex-col"> Quick Links
              <spn className="border-t-2 border-primary h-2 w-[30%]" />
            </div>
            {FooterData.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">{value.title}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold flex flex-col">Categories<spn className="border-t-2 border-primary h-2 w-[30%]" /></div>
            {FooterDat2.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">{value.title}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold flex flex-col">Contact Us<spn className="border-t-2 border-primary h-2 w-[30%]" /></div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <FaLocationDot className="mt-2" />
                <span className="flex flex-col">29 Main Rd E, St Albans <span>Shop center LH 1, USA </span>
                </span>
              </div>
              <div className="flex items-center gap-4"><IoIosMail />
                <span className="flex flex-col">info@maxtshop.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneVolume /><span className="flex flex-col">+99 88045813402</span>
              </div>
              <div className="flex items-center gap-4">
                <TbWorldWww /><span className="flex flex-col">+99 88045813402</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm py-8 flex items-center justify-center gap-1">
        Copyright © 2024 <span className="text-primary">Maxtshop</span> . All
        Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
