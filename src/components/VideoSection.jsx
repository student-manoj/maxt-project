"use client";
import Image from "next/image";
import Link from "next/link";
import VideoplayButtonImage from "../../public/VideoplayButtonImage.png";
import { VideoData } from "@/utils/FeaturedProductsData";
import { useState } from "react";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[url('/videoSectionImageBg.png')] bg-center bg-cover">
        <div className=" container mx-auto px-4 grid md:grid-cols-2 gap-6 py-28">
          <div className="flex flex-col gap-7 text-white">
            <h3 className="text-4xl font-semibold md:w-[400px]">See How Our Products Are Made</h3>
            <p className="text-base">Preorder now to receive exclusive.</p>
            <div> <Link href="#" className="py-3 px-5 bg-primary rounded-full">Shop New</Link></div>
          </div>
          <div className="flex flex-col justify-center">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="asUN0c94xnY"
              onClose={() => setOpen(false)}
            />
            <Image onClick={() => setOpen(true)} src={VideoplayButtonImage} alt="Video Icons" className="cursor-pointer"/>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:py-24 py-20">
          {VideoData.map((value) => (
            <div key={value.id} className="bg-white shadow-card p-10 flex flex-col items-center justify-center gap-3 rounded-xl">
              <Image src={value.icon} alt="icon" />
              <h3 className="text-lg font-semibold pt-2">{value.title}</h3>
              <p className="text-sm text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSection;
