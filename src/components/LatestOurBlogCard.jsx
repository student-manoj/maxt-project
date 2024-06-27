import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestOurBlogCard = ({ img, title, description }) => {
  return (
    <>
      <div className="group p">
        <Image src={img} alt="image" className="w-full" />
        <div className="">
          <h3 className="xl:text-xl group-hover:text-primary text-lg font-semibold pt-7">{title}</h3>
          <p className="text-sm pt-6 pb-9">{description}</p>
          <div className="flex">
            <Link href="#" className="px-6 py-2 group-hover:bg-primary rounded-full group-hover:text-white text-primary border border-primary flex items-center gap-4 justify-center" >
              Read More
              <span><FaArrowRightLong /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestOurBlogCard;
