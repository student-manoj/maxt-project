import {ShopSideBarProductCategoriesData, ShopSideBarProductCategoriesData2, TopRatedData,} from "@/utils/ShopSideBarProductCategoriesData";
import Image from "next/image";

const ShopRightSideBar = () => {
  return (
    <>
      <h4 className="text-xl font-medium text-primary border-b-2 border-primary pb-2"> Filter By Price
      </h4>
      <div className="pt-8 relative">
        <div className="h-5 w-4 bg-primary rounded-sm absolute top-[62%]" />
        <div className="border-4 border-primary" />
        <div className="h-5 w-4 bg-primary rounded-sm absolute right-0 -bottom-[14%]" />
      </div>
      <div className="flex justify-between items-center pt-8 text-sm">
        Price: $10 - $80
        <span className="border px-5 py-2">Filter</span>
      </div>
      <h4 className="text-xl font-medium text-primary border-b-2 border-primary pb-2 pt-12">Filter By Color</h4>
      <div className="pt-8">
        <div className="flex flex-wrap gap-3">
          <div className="h-9 w-9 rounded-full bg-[#F09121]" />
          <div className="h-9 w-9 rounded-full bg-[#49C8DB]" />
          <div className="h-9 w-9 rounded-full bg-[#414141]" />
          <div className="h-9 w-9 rounded-full bg-[#62C624]" />
          <div className="h-9 w-9 rounded-full bg-[#3389D9]" />
          <div className="h-9 w-9 rounded-full bg-[#911B94]" />
        </div>
      </div>
      <h4 className="text-xl font-medium text-primary border-b-2 border-primary pb-2 pt-12">Product Categories</h4>
      <div className="pt-7 flex flex-col gap-2">
        {ShopSideBarProductCategoriesData.map((value) => (
          <div key={value.id}>{value.title}</div>
        ))}
      </div>
      <h4 className="text-xl font-medium text-primary border-b-2 border-primary pb-2 pt-12">Product Tags</h4>
      <div className="flex flex-wrap gap-4 pt-7">
        {ShopSideBarProductCategoriesData2.map((value) => (
          <div key={value.id} className="px-5 py-1 border-2 rounded-md">
            {value.title}
          </div>
        ))}
      </div>
      <h4 className="text-xl font-medium text-primary border-b-2 border-primary pb-2 pt-12">Top Rated</h4>
      <div className="flex flex-col gap-3 rounded-3xl pt-7">
        {TopRatedData.map((value) => (
          <div key={value.id}className="grid grid-cols-3 gap place-items-center">
            <div className="col-span-1 flex flex-col gap-4">
              <Image src={value.img} alt="image" />
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <h3 className="text-base font-medium">{value.title}</h3>
              <Image src={value.icon} alt="image" />
              <div className="flex flex-row gap-4 ">
                <span className="line-through">${value.discount_Price}.00</span>
                <span className="text-primary">${value.price} .00</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopRightSideBar;
