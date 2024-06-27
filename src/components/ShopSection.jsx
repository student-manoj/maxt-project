import { OurBestProductsData } from "@/utils/OurBestProductsData";
import OurBestProductsCard from "./OurBestProductsCard";

const ShopSection = () => {
  return (
    <>
      {OurBestProductsData.map((value) => (
        <OurBestProductsCard key={value.id} {...value} />
      ))}
    </>
  );
};

export default ShopSection;
