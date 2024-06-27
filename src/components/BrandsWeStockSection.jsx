import { BrandsWeStockData } from "@/utils/BrandsWeStockData";
import Heading from "./Heading";
import Image from "next/image";

const BrandsWeStockSection = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] xl:py-24 py-20">
        <div className="container mx-auto px-4">
          <Heading
            title="Brands We Stock"
            description="Preorder now to receive exclusive deals & gifts"
          />
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6 pt-12">
            {BrandsWeStockData.map((value) => (
              <div key={value.id} className="bg-white py-4 px-8 flex items-center">
                <Image src={value.img} alt="image" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsWeStockSection;
