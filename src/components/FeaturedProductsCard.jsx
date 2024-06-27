import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

const FeaturedProductsCard = ({ value, addToCart }) => {
  const { id, img, icon, title, price, discount_Price, Sale } = value;
  return (
    <>
      <div className="bg-white rounded-xl relative group">
        <div className="absolute top-4 left-4">
          <div className="bg-primary p-4 rounded-full h-10 w-10 text-xs flex items-center justify-center text-white"> {Sale}</div>
        </div>
        <Image src={img} alt="image" className="w-full" />
        <div className="flex flex-col justify-center items-center">
          <Image src={icon} alt="icon" className="pt-7" />
          <h4 className="text-lg font-medium pt-4 pb-2">{title}</h4>
          <div className="flex flex-row gap-4 pb-7">
            <span className="line-through"> ${discount_Price}.00</span>
            <span className="text-primary">${price} .00</span>
          </div>
          <div className="absolute top-40 z-[5] hidden group-hover:block">
            <div className="flex flex-col gap-24 justify-center items-center">
              <Link href={`ProductDetails/${id}`} className="px-5 py-2 bg-primary text-white text-base rounded-full">Quick View</Link>
              <div className="flex gap-4">
                <div className="bg-white hover:bg-primary p-3 rounded-full hover:text-white">
                  <FaRegHeart />
                </div>
                <button onClick={() => addToCart(value)} className="bg-white hover:bg-primary p-3 rounded-full hover:text-white">
                  <FaShoppingCart/>
                </button>
                <div className="bg-white p-3 hover:bg-primary rounded-full hover:text-white">
                  <FaArrowsRotate/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsCard;
