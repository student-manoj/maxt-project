import HeraderSection from "@/components/HeraderSection";
import ShopSection from "@/components/ShopSection";
import ShopTop from "@/components/ShopTop";

const Productpage = () => {
  return (
    <>
      <HeraderSection tilte="Product" sTitle="Product" />
      <div className="container mx-auto px-4 xl:py-24 py-20">
        <ShopTop />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-12">
          <ShopSection />
        </div>
      </div>
    </>
  );
};

export default Productpage;
