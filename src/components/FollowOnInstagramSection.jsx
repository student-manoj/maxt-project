import { FollowOnInstagramData } from "@/utils/FollowOnInstagramData";
import Heading from "./Heading";
import Image from "next/image";
import { FaRegComments, FaRegHeart } from "react-icons/fa";

const FollowOnInstagramSection = () => {
  return (
    <>
      <div className="xl:py-24 py-20">
        <div className="container mx-auto px-4">
          <Heading
            title="Follow On Instagram"
            description="Preorder now to receive exclusive deals & gifts"
          />
          <div className="grid lg:grid-cols-6 md:grid-cols-3 pt-12">
            {FollowOnInstagramData.map((value) => (
              <div key={value.id} className="relative group flex justify-center items-center">
                <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                  <div className="flex items-center justify-center h-full gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <FaRegHeart /><span>2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegComments /><span>0</span>
                    </div>
                  </div>
                </div>
                <Image src={value.img} alt="image" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowOnInstagramSection;
